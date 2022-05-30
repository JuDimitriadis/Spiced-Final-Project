const spicedPg = require("spiced-pg");
const bcrypt = require("bcryptjs");
const cryptoRandomString = require("crypto-random-string");
let db;

if (process.env.DATABASE_URL) {
    db = spicedPg(process.env.DATABASE_URL);
} else {
    const {
        DATABASE_USER,
        DATABASE_PASSWORD,
        DATABASE_NAME,
    } = require("../secrets.json");
    db = spicedPg(
        `postgres:${DATABASE_USER}:${DATABASE_PASSWORD}@localhost:5432/${DATABASE_NAME}`
    );
    console.log(`[db] Connecting to: ${DATABASE_NAME}`);
}

//FUNTION CALLED BY createAccount()
function hashPassword(password) {
    return bcrypt.genSalt().then((salt) => {
        return bcrypt.hash(password, salt);
    });
}

//FUNTION CALLED BY authLogin()
function getClientByemail(email) {
    return db
        .query(`SELECT * FROM clientAccounts WHERE email = $1`, [email])
        .then((result) => result.rows[0]);
}

// FUNCTION CALLED BY "/api/create-account",
function createClientAccount({ name, email, password }) {
    const username = name.toUpperCase();
    // let client;
    // let provider;
    // if (accountType === "client") {
    //     client = true;
    //     provider = false;
    // } else {
    //     client = false;
    //     provider = true;
    // }
    return hashPassword(password)
        .then((hashPass) => {
            return db.query(
                `INSERT INTO clientAccounts (name, email, hash_password)
        VALUES ($1, $2, $3)
        RETURNING * `,
                [username, email, hashPass]
            );
        })
        .then((result) => result.rows[0]);
}

//FUNCTION CALLED BY "/api/auth-login"
function clientAuthLogin({ email, password }) {
    let userLogin;
    return getClientByemail(email)
        .then((user) => {
            userLogin = user;
            if (!user) {
                return null;
            } else {
                return bcrypt.compare(password, user.hash_password);
            }
        })
        .then((result) => {
            if (result === false || result === null) {
                return null;
            } else {
                return userLogin;
            }
        });
}

function changePassword(newpassword, id) {
    return hashPassword(newpassword)
        .then((hashPass) => {
            return db.query(
                `UPDATE users SET hash_password = $1 WHERE id = $2
            RETURNING * `,
                [hashPass, id]
            );
        })
        .then((result) => {
            return result.rows[0];
        });
}

function getMarkersData() {
    return db
        .query(
            `SELECT name, type, address, ST_AsGeoJSON(geom)::jsonb as geoJSON FROM professional_profile`
        )
        .then((result) => result.rows);
}

function getSearchData({ ltd, lgt, name, low, hight, category }) {
    console.log("DATA BASE REQ VALUES", ltd, lgt, name, low, hight, category);
    if (category) {
        console.log("YES category", category);
        return db
            .query(
                `SELECT professional_profile.id, professional_profile.name, professional_profile.address,
ST_AsGeoJSON(professional_profile.geom)::jsonb as geoJSON,  services.service_name, services.category, services.price, services.duration
FROM professional_profile
FULL JOIN services
ON  professional_profile.id = services.professional_id
WHERE ST_DWithin(geom, ST_MakePoint($1, $2)::geography, 5000)
AND professional_profile.name ILIKE $3 AND services.price > $4 AND services.price < $5 AND services.category = $6 
ORDER BY services.price ASC`,
                [ltd, lgt, name + "%", low, hight, category]
            )
            .then((result) => result.rows);
    } else {
        console.log("NO category", category);
        return db
            .query(
                `SELECT professional_profile.id, professional_profile.name, professional_profile.address,
    ST_AsGeoJSON(professional_profile.geom)::jsonb as geoJSON,  services.service_name, services.category, services.price, services.duration
    FROM professional_profile
    FULL JOIN services
    ON  professional_profile.id = services.professional_id
    WHERE ST_DWithin(geom, ST_MakePoint($1, $2)::geography, 5000)
    AND professional_profile.name ILIKE $3 AND services.price > $4 AND services.price < $5 
    ORDER BY services.price ASC`,
                [ltd, lgt, name + "%", low, hight]
            )
            .then((result) => result.rows);
    }
}

module.exports = {
    createClientAccount,
    clientAuthLogin,
    getMarkersData,
    getSearchData,
};
