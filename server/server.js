const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
const cookieSession = require("cookie-session");
const db = require("./database");

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.use(compression());

const cookieSessionMiddleware = cookieSession({
    secret: `pretty pretty`,
    maxAge: 1000 * 60 * 60 * 24,
    sameSite: true,
});
app.use(cookieSessionMiddleware);

//API SERVING start.js
app.get("/api/check-cookie-id", (req, res) => {
    if (!req.session.id) {
        return res.json({ success: false });
    } else {
        return res.json({ success: true });
    }
});

//API SERVING clientLoginRegistration.js
app.post("/api/create-client-account", async (req, res) => {
    console.log("body", req.body);
    db.createClientAccount(req.body)
        .then((new_user) => {
            const newId = { id: new_user.id };
            req.session = newId;
            return res.json({ success: true });
        })
        .catch((error) => {
            console.log("new user error", error);
            if (error.constraint === "accounts_email_key") {
                return res.json({ error: "email" });
            } else {
                return res.json({ error: "others" });
            }
        });
});

//API SERVING app.js
app.post("/api/client-auth-login", (req, res) => {
    db.clientAuthLogin(req.body).then((result) => {
        if (result === null) {
            return res.json({ success: false });
        }
        const loginId = { id: result.id };
        req.session = loginId;
        res.json({ success: true });
        return;
    });
});

//API SERVING clientLoginRegistration.js
app.get("/api/get-markers", (req, res) => {
    db.getMarkersData().then((result) => {
        console.log("getMarkersData server", result);
        res.json(result);
    });
});

app.delete("/api/logout", (req, res) => {
    req.session = null;
    res.json({ success: true });
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
