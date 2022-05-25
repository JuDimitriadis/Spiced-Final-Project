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

app.get("/api/get-welcome-img", async (req, res) => {
    db.getWelcomePic().then((pic) => {
        console.log("pic.url", pic, pic.url);
        return res.json(pic.url);
    });
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
