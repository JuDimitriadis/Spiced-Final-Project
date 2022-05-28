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
            `SELECT name, provider_type, address, ST_AsGeoJSON(geom)::jsonb as geoJSON FROM places`
        )
        .then((result) => result.rows);
}

// SELECT name, provider_type, address, ST_AsGeoJSON(geom)::jsonb as geoJSON FROM places
// ST_AsGeoJSON(geom)::jsonb,

module.exports = { createClientAccount, clientAuthLogin, getMarkersData };
