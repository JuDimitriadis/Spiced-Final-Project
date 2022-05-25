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

//FUNCTION CALLED BY "api/get-welcome-img"
function getWelcomePic() {
    const random = Math.floor(Math.random() * 6) + 1;
    return db
        .query(`SELECT * FROM welcomePic WHERE id = $1`, [random])
        .then((result) => {
            return result.rows[0];
        });
}

module.exports = { getWelcomePic };
