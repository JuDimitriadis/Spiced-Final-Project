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

function getSearchData({ ltd, lgt, name, low, hight, category, date }) {
    console.log(
        "DATA BASE REQ VALUES",
        ltd,
        lgt,
        name,
        low,
        hight,
        category,
        date
    );
    if (category) {
        console.log("YES category", category);
        return db
            .query(
                `SELECT professional_profile.id, professional_profile.name, professional_profile.address,
ST_AsGeoJSON(professional_profile.geom)::jsonb as geoJSON,  services.service_name, services.category, services.price, services.duration, appointaments.slot_time, appointaments.slot_date, , appointaments.id as appointamentsId , services.id as serviceID
FROM professional_profile
FULL JOIN services
ON  professional_profile.id = services.professional_id
JOIN appointaments 
ON  professional_profile.id = appointaments.professional_id 
WHERE ST_DWithin(geom, ST_MakePoint($1, $2)::geography, 5000)
AND professional_profile.name ILIKE $3 AND services.price > $4 AND services.price < $5 AND services.category = $6 
AND appointaments.slot_date = $7 AND appointaments.booked = false
ORDER BY appointaments.slot_time ASC`,
                [
                    ltd,
                    lgt,
                    name + "%",
                    low,
                    hight,
                    category,
                    date + "T22:00:00.000Z",
                ]
            )
            .then((result) => result.rows);
    } else {
        console.log("NO category", category);
        return db
            .query(
                `SELECT professional_profile.id, professional_profile.name, professional_profile.address,
    ST_AsGeoJSON(professional_profile.geom)::jsonb as geoJSON,  services.service_name, services.category, services.price, services.duration, appointaments.slot_time, appointaments.slot_date, appointaments.id as appointamentsId , services.id as serviceID
    FROM professional_profile
    FULL JOIN services
    ON  professional_profile.id = services.professional_id
    JOIN appointaments 
    ON  professional_profile.id = appointaments.professional_id 
    WHERE ST_DWithin(geom, ST_MakePoint($1, $2)::geography, 5000)
    AND professional_profile.name ILIKE $3 AND services.price > $4 AND services.price < $5
    AND appointaments.slot_date = $6 AND appointaments.booked = false
    ORDER BY appointaments.slot_time ASC`,
                [ltd, lgt, name + "%", low, hight, date]
            )
            .then((result) => {
                return result.rows;
            });
    }
}

// SELECT professional_profile.id, professional_profile.name, professional_profile.address,
//     ST_AsGeoJSON(professional_profile.geom)::jsonb as geoJSON,  services.service_name, services.category, services.price, services.duration, appointaments.slot_time, appointaments.slot_date
//     FROM professional_profile
//     FULL JOIN services
//     ON  professional_profile.id = services.professional_id
//     JOIN appointaments
//     ON  professional_profile.id = appointaments.professional_id
//     WHERE ST_DWithin(geom, ST_MakePoint(52.536594783793284, 13.376634503116708)::geography, 5000)
//     AND professional_profile.name ILIKE 'C%' AND services.price > 550 AND services.price < 650
//     AND appointaments.slot_date = '2022-06-01' AND appointaments.booked = false
//     ORDER BY appointaments.slot_time ASC

// getSearchData({
//     ltd: 52.536594783793284,
//     lgt: 13.376634503116708,
//     name: "The",
//     low: 0,
//     hight: 600,
//     date: "2022-06-02",
// });

function insertBooking({ serviceId, appointmentId }, userId) {
    return db
        .query(
            ` UPDATE appointaments SET service_id = $1, booked = true, user_id = $2
   WHERE id = $3
   RETURNING *`,
            [serviceId, userId, appointmentId]
        )
        .then((result) => {
            return result.rows;
        });
}

function getAppointments(userId) {
    return db
        .query(
            ` SELECT  appointaments.id as slotId ,appointaments.professional_id, appointaments.service_id, appointaments.user_id, appointaments.slot_time, appointaments.slot_date,  services.service_name, services.category, services.price, services.duration, professional_profile.name, professional_profile.address
   FROM appointaments
   JOIN services
   ON services.id = appointaments.service_id
   JOIN professional_profile
   ON professional_profile.id = appointaments.professional_id
   WHERE appointaments.booked = true AND appointaments.user_id = $1
   ORDER BY appointaments.slot_date, appointaments.slot_time`,
            [userId]
        )
        .then((result) => {
            console.log("DB GET APPOINTMENTS", result.rows[0]);
            return result.rows;
        });
}

function cancelBooking({ slotid }) {
    return db
        .query(
            ` UPDATE appointaments SET service_id = null, booked = false, user_id = null
   WHERE id = $1
   RETURNING *`,
            [slotid]
        )
        .then((result) => {
            return result.rows;
        });
}

module.exports = {
    createClientAccount,
    clientAuthLogin,
    getMarkersData,
    getSearchData,
    insertBooking,
    getAppointments,
    cancelBooking,
};
