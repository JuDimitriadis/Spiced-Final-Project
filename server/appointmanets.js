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

function makeSlots(id, date) {
    db.query(
        `INSERT INTO appointaments (professional_id, slot_date, slot_time, booked) VALUES($1, $2,'08:00:00',false)`,
        [id, date]
    );
    db.query(
        `INSERT INTO appointaments (professional_id, slot_date, slot_time, booked) VALUES($1, $2,'08:30:00',false)`,
        [id, date]
    );
    db.query(
        `INSERT INTO appointaments (professional_id, slot_date, slot_time, booked) VALUES($1, $2,'09:00:00',false)`,
        [id, date]
    );
    db.query(
        `INSERT INTO appointaments (professional_id, slot_date, slot_time, booked) VALUES($1, $2,'09:30:00',false)`,
        [id, date]
    );
    db.query(
        `INSERT INTO appointaments (professional_id, slot_date, slot_time, booked) VALUES($1, $2,'10:00:00',false)`,
        [id, date]
    );
    db.query(
        `INSERT INTO appointaments (professional_id, slot_date, slot_time, booked) VALUES($1, $2,'10:30:00',false)`,
        [id, date]
    );
    db.query(
        `INSERT INTO appointaments (professional_id, slot_date, slot_time, booked) VALUES($1, $2,'11:00:00',false)`,
        [id, date]
    );
    db.query(
        `INSERT INTO appointaments (professional_id, slot_date, slot_time, booked) VALUES($1, $2,'11:30:00',false)`,
        [id, date]
    );
    db.query(
        `INSERT INTO appointaments (professional_id, slot_date, slot_time, booked) VALUES($1, $2,'12:00:00',false)`,
        [id, date]
    );
    db.query(
        `INSERT INTO appointaments (professional_id, slot_date, slot_time, booked) VALUES($1, $2,'12:30:00',false)`,
        [id, date]
    );
    db.query(
        `INSERT INTO appointaments (professional_id, slot_date, slot_time, booked) VALUES($1, $2,'13:00:00',false)`,
        [id, date]
    );
    db.query(
        `INSERT INTO appointaments (professional_id, slot_date, slot_time, booked) VALUES($1, $2,'13:30:00',false)`,
        [id, date]
    );
    db.query(
        `INSERT INTO appointaments (professional_id, slot_date, slot_time, booked) VALUES($1, $2,'14:00:00',false)`,
        [id, date]
    );
    db.query(
        `INSERT INTO appointaments (professional_id, slot_date, slot_time, booked) VALUES($1, $2,'14:30:00',false)`,
        [id, date]
    );
    db.query(
        `INSERT INTO appointaments (professional_id, slot_date, slot_time, booked) VALUES($1, $2,'15:00:00',false)`,
        [id, date]
    );
    db.query(
        `INSERT INTO appointaments (professional_id, slot_date, slot_time, booked) VALUES($1, $2,'15:30:00',false)`,
        [id, date]
    );
    db.query(
        `INSERT INTO appointaments (professional_id, slot_date, slot_time, booked) VALUES($1, $2,'16:00:00',false)`,
        [id, date]
    );
    db.query(
        `INSERT INTO appointaments (professional_id, slot_date, slot_time, booked) VALUES($1, $2,'16:30:00',false)`,
        [id, date]
    );
    db.query(
        `INSERT INTO appointaments (professional_id, slot_date, slot_time, booked) VALUES($1, $2,'17:00:00',false)`,
        [id, date]
    );
    db.query(
        `INSERT INTO appointaments (professional_id, slot_date, slot_time, booked) VALUES($1, $2,'17:30:00',false)`,
        [id, date]
    );
    db.query(
        `INSERT INTO appointaments (professional_id, slot_date, slot_time, booked)VALUES($1, $2,'18:00:00',false)`,
        [id, date]
    );
}

makeSlots(1, "2022-05-31");
makeSlots(2, "2022-05-30");
makeSlots(2, "2022-05-31");
makeSlots(1, "2022-06-01");
makeSlots(1, "2022-06-02");
makeSlots(1, "2022-06-03");
makeSlots(1, "2022-06-04");
makeSlots(1, "2022-06-05");
makeSlots(2, "2022-06-01");
makeSlots(2, "2022-06-02");
makeSlots(2, "2022-06-03");
makeSlots(2, "2022-06-04");
makeSlots(2, "2022-06-05");
makeSlots(3, "2022-06-01");
makeSlots(3, "2022-06-02");
makeSlots(3, "2022-06-03");
makeSlots(3, "2022-06-04");
makeSlots(3, "2022-06-05");
makeSlots(4, "2022-06-01");
makeSlots(4, "2022-06-02");
makeSlots(4, "2022-06-03");
makeSlots(4, "2022-06-04");
makeSlots(4, "2022-06-05");
makeSlots(25, "2022-06-01");
makeSlots(25, "2022-06-02");
makeSlots(25, "2022-06-03");
makeSlots(25, "2022-06-04");
makeSlots(25, "2022-06-05");
makeSlots(23, "2022-06-01");
makeSlots(23, "2022-06-02");
makeSlots(23, "2022-06-03");
makeSlots(23, "2022-06-04");
makeSlots(23, "2022-06-05");
makeSlots(21, "2022-06-01");
makeSlots(21, "2022-06-02");
makeSlots(21, "2022-06-03");
makeSlots(21, "2022-06-04");
makeSlots(21, "2022-06-05");
