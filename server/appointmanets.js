const spicedPg = require("spiced-pg"); //
const bcrypt = require("bcryptjs"); //
const cryptoRandomString = require("crypto-random-string"); //
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
    return db.query(
        `INSERT INTO appointaments (professional_id, slot_date, slot_time, booked)VALUES($1, $2,'18:00:00',false)`,
        [id, date]
    );
}

makeSlots(1, "2022-06-01 08:00:00");
makeSlots(1, "2022-06-02 08:00:00");
makeSlots(1, "2022-06-03 08:00:00");
makeSlots(1, "2022-06-04 08:00:00");
makeSlots(1, "2022-06-05 08:00:00");
makeSlots(1, "2022-06-06 08:00:00");
makeSlots(1, "2022-06-07 08:00:00");
makeSlots(1, "2022-06-08 08:00:00");
makeSlots(1, "2022-06-09 08:00:00");
makeSlots(1, "2022-06-10 08:00:00");
makeSlots(1, "2022-06-11 08:00:00");
makeSlots(1, "2022-06-12 08:00:00");
makeSlots(1, "2022-06-13 08:00:00");
makeSlots(1, "2022-06-14 08:00:00");
makeSlots(1, "2022-06-15 08:00:00");
makeSlots(1, "2022-06-16 08:00:00");
makeSlots(1, "2022-06-17 08:00:00");
makeSlots(1, "2022-06-18 08:00:00");
makeSlots(1, "2022-06-19 08:00:00");
makeSlots(1, "2022-06-20 08:00:00");
makeSlots(1, "2022-06-21 08:00:00");
makeSlots(1, "2022-06-22 08:00:00");
makeSlots(1, "2022-06-23 08:00:00");
makeSlots(1, "2022-06-24 08:00:00");
makeSlots(1, "2022-06-25 08:00:00");
makeSlots(1, "2022-06-26 08:00:00");
makeSlots(1, "2022-06-27 08:00:00");
makeSlots(1, "2022-06-28 08:00:00");
makeSlots(1, "2022-06-29 08:00:00");
makeSlots(1, "2022-06-30 08:00:00");

makeSlots(2, "2022-05-31 08:00:00");
makeSlots(2, "2022-06-01 08:00:00");
makeSlots(2, "2022-06-02 08:00:00");
makeSlots(2, "2022-06-03 08:00:00");
makeSlots(2, "2022-06-04 08:00:00");
makeSlots(2, "2022-06-05 08:00:00");
makeSlots(2, "2022-06-06 08:00:00");
makeSlots(2, "2022-06-07 08:00:00");
makeSlots(2, "2022-06-08 08:00:00");
makeSlots(2, "2022-06-09 08:00:00");
makeSlots(2, "2022-06-10 08:00:00");
makeSlots(2, "2022-06-11 08:00:00");
makeSlots(2, "2022-06-12 08:00:00");
makeSlots(2, "2022-06-13 08:00:00");
makeSlots(2, "2022-06-14 08:00:00");
makeSlots(2, "2022-06-15 08:00:00");
makeSlots(2, "2022-06-16 08:00:00");
makeSlots(2, "2022-06-17 08:00:00");
makeSlots(2, "2022-06-18 08:00:00");
makeSlots(2, "2022-06-19 08:00:00");
makeSlots(2, "2022-06-20 08:00:00");
makeSlots(2, "2022-06-21 08:00:00");
makeSlots(2, "2022-06-22 08:00:00");
makeSlots(2, "2022-06-23 08:00:00");
makeSlots(2, "2022-06-24 08:00:00");
makeSlots(2, "2022-06-25 08:00:00");
makeSlots(2, "2022-06-26 08:00:00");
makeSlots(2, "2022-06-27 08:00:00");
makeSlots(2, "2022-06-28 08:00:00");
makeSlots(2, "2022-06-29 08:00:00");
makeSlots(2, "2022-06-30 08:00:00");

makeSlots(3, "2022-05-31 08:00:00");
makeSlots(3, "2022-06-01 08:00:00");
makeSlots(3, "2022-06-02 08:00:00");
makeSlots(3, "2022-06-03 08:00:00");
makeSlots(3, "2022-06-04 08:00:00");
makeSlots(3, "2022-06-05 08:00:00");
makeSlots(3, "2022-06-06 08:00:00");
makeSlots(3, "2022-06-07 08:00:00");
makeSlots(3, "2022-06-08 08:00:00");
makeSlots(3, "2022-06-09 08:00:00");
makeSlots(3, "2022-06-10 08:00:00");
makeSlots(3, "2022-06-11 08:00:00");
makeSlots(3, "2022-06-12 08:00:00");
makeSlots(3, "2022-06-13 08:00:00");
makeSlots(3, "2022-06-14 08:00:00");
makeSlots(3, "2022-06-15 08:00:00");
makeSlots(3, "2022-06-16 08:00:00");
makeSlots(3, "2022-06-17 08:00:00");
makeSlots(3, "2022-06-18 08:00:00");
makeSlots(3, "2022-06-19 08:00:00");
makeSlots(3, "2022-06-20 08:00:00");
makeSlots(3, "2022-06-21 08:00:00");
makeSlots(3, "2022-06-22 08:00:00");
makeSlots(3, "2022-06-23 08:00:00");
makeSlots(3, "2022-06-24 08:00:00");
makeSlots(3, "2022-06-25 08:00:00");
makeSlots(3, "2022-06-26 08:00:00");
makeSlots(3, "2022-06-27 08:00:00");
makeSlots(3, "2022-06-28 08:00:00");
makeSlots(3, "2022-06-29 08:00:00");
makeSlots(3, "2022-06-30 08:00:00");

makeSlots(4, "2022-05-31 08:00:00");
makeSlots(4, "2022-06-01 08:00:00");
makeSlots(4, "2022-06-02 08:00:00");
makeSlots(4, "2022-06-03 08:00:00");
makeSlots(4, "2022-06-04 08:00:00");
makeSlots(4, "2022-06-05 08:00:00");
makeSlots(4, "2022-06-06 08:00:00");
makeSlots(4, "2022-06-07 08:00:00");
makeSlots(4, "2022-06-08 08:00:00");
makeSlots(4, "2022-06-09 08:00:00");
makeSlots(4, "2022-06-10 08:00:00");
makeSlots(4, "2022-06-11 08:00:00");
makeSlots(4, "2022-06-12 08:00:00");
makeSlots(4, "2022-06-13 08:00:00");
makeSlots(4, "2022-06-14 08:00:00");
makeSlots(4, "2022-06-15 08:00:00");
makeSlots(4, "2022-06-16 08:00:00");
makeSlots(4, "2022-06-17 08:00:00");
makeSlots(4, "2022-06-18 08:00:00");
makeSlots(4, "2022-06-19 08:00:00");
makeSlots(4, "2022-06-20 08:00:00");
makeSlots(4, "2022-06-21 08:00:00");
makeSlots(4, "2022-06-22 08:00:00");
makeSlots(4, "2022-06-23 08:00:00");
makeSlots(4, "2022-06-24 08:00:00");
makeSlots(4, "2022-06-25 08:00:00");
makeSlots(4, "2022-06-26 08:00:00");
makeSlots(4, "2022-06-27 08:00:00");
makeSlots(4, "2022-06-28 08:00:00");
makeSlots(4, "2022-06-29 08:00:00");
makeSlots(4, "2022-06-30 08:00:00");

makeSlots(5, "2022-05-31 08:00:00");
makeSlots(5, "2022-06-01 08:00:00");
makeSlots(5, "2022-06-02 08:00:00");
makeSlots(5, "2022-06-03 08:00:00");
makeSlots(5, "2022-06-04 08:00:00");
makeSlots(5, "2022-06-05 08:00:00");
makeSlots(5, "2022-06-06 08:00:00");
makeSlots(5, "2022-06-07 08:00:00");
makeSlots(5, "2022-06-08 08:00:00");
makeSlots(5, "2022-06-09 08:00:00");
makeSlots(5, "2022-06-10 08:00:00");
makeSlots(5, "2022-06-11 08:00:00");
makeSlots(5, "2022-06-12 08:00:00");
makeSlots(5, "2022-06-13 08:00:00");
makeSlots(5, "2022-06-14 08:00:00");
makeSlots(5, "2022-06-15 08:00:00");
makeSlots(5, "2022-06-16 08:00:00");
makeSlots(5, "2022-06-17 08:00:00");
makeSlots(5, "2022-06-18 08:00:00");
makeSlots(5, "2022-06-19 08:00:00");
makeSlots(5, "2022-06-20 08:00:00");
makeSlots(5, "2022-06-21 08:00:00");
makeSlots(5, "2022-06-22 08:00:00");
makeSlots(5, "2022-06-23 08:00:00");
makeSlots(5, "2022-06-24 08:00:00");
makeSlots(5, "2022-06-25 08:00:00");
makeSlots(5, "2022-06-26 08:00:00");
makeSlots(5, "2022-06-27 08:00:00");
makeSlots(5, "2022-06-28 08:00:00");
makeSlots(5, "2022-06-29 08:00:00");
makeSlots(5, "2022-06-30 08:00:00");

makeSlots(6, "2022-05-31 08:00:00");
makeSlots(6, "2022-06-01 08:00:00");
makeSlots(6, "2022-06-02 08:00:00");
makeSlots(6, "2022-06-03 08:00:00");
makeSlots(6, "2022-06-04 08:00:00");
makeSlots(6, "2022-06-05 08:00:00");
makeSlots(6, "2022-06-06 08:00:00");
makeSlots(6, "2022-06-07 08:00:00");
makeSlots(6, "2022-06-08 08:00:00");
makeSlots(6, "2022-06-09 08:00:00");
makeSlots(6, "2022-06-10 08:00:00");
makeSlots(6, "2022-06-11 08:00:00");
makeSlots(6, "2022-06-12 08:00:00");
makeSlots(6, "2022-06-13 08:00:00");
makeSlots(6, "2022-06-14 08:00:00");
makeSlots(6, "2022-06-15 08:00:00");
makeSlots(6, "2022-06-16 08:00:00");
makeSlots(6, "2022-06-17 08:00:00");
makeSlots(6, "2022-06-18 08:00:00");
makeSlots(6, "2022-06-19 08:00:00");
makeSlots(6, "2022-06-20 08:00:00");
makeSlots(6, "2022-06-21 08:00:00");
makeSlots(6, "2022-06-22 08:00:00");
makeSlots(6, "2022-06-23 08:00:00");
makeSlots(6, "2022-06-24 08:00:00");
makeSlots(6, "2022-06-25 08:00:00");
makeSlots(6, "2022-06-26 08:00:00");
makeSlots(6, "2022-06-27 08:00:00");
makeSlots(6, "2022-06-28 08:00:00");
makeSlots(6, "2022-06-29 08:00:00");
makeSlots(6, "2022-06-30 08:00:00");

makeSlots(7, "2022-05-31 08:00:00");
makeSlots(7, "2022-06-01 08:00:00");
makeSlots(7, "2022-06-02 08:00:00");
makeSlots(7, "2022-06-03 08:00:00");
makeSlots(7, "2022-06-04 08:00:00");
makeSlots(7, "2022-06-05 08:00:00");
makeSlots(7, "2022-06-06 08:00:00");
makeSlots(7, "2022-06-07 08:00:00");
makeSlots(7, "2022-06-08 08:00:00");
makeSlots(7, "2022-06-09 08:00:00");
makeSlots(7, "2022-06-10 08:00:00");
makeSlots(7, "2022-06-11 08:00:00");
makeSlots(7, "2022-06-12 08:00:00");
makeSlots(7, "2022-06-13 08:00:00");
makeSlots(7, "2022-06-14 08:00:00");
makeSlots(7, "2022-06-15 08:00:00");
makeSlots(7, "2022-06-16 08:00:00");
makeSlots(7, "2022-06-17 08:00:00");
makeSlots(7, "2022-06-18 08:00:00");
makeSlots(7, "2022-06-19 08:00:00");
makeSlots(7, "2022-06-20 08:00:00");
makeSlots(7, "2022-06-21 08:00:00");
makeSlots(7, "2022-06-22 08:00:00");
makeSlots(7, "2022-06-23 08:00:00");
makeSlots(7, "2022-06-24 08:00:00");
makeSlots(7, "2022-06-25 08:00:00");
makeSlots(7, "2022-06-26 08:00:00");
makeSlots(7, "2022-06-27 08:00:00");
makeSlots(7, "2022-06-28 08:00:00");
makeSlots(7, "2022-06-29 08:00:00");

makeSlots(8, "2022-05-31 08:00:00");
makeSlots(8, "2022-06-01 08:00:00");
makeSlots(8, "2022-06-02 08:00:00");
makeSlots(8, "2022-06-03 08:00:00");
makeSlots(8, "2022-06-04 08:00:00");
makeSlots(8, "2022-06-05 08:00:00");
makeSlots(8, "2022-06-06 08:00:00");
makeSlots(8, "2022-06-07 08:00:00");
makeSlots(8, "2022-06-08 08:00:00");
makeSlots(8, "2022-06-09 08:00:00");
makeSlots(8, "2022-06-10 08:00:00");
makeSlots(8, "2022-06-11 08:00:00");
makeSlots(8, "2022-06-12 08:00:00");
makeSlots(8, "2022-06-13 08:00:00");
makeSlots(8, "2022-06-14 08:00:00");
makeSlots(8, "2022-06-15 08:00:00");
makeSlots(8, "2022-06-16 08:00:00");
makeSlots(8, "2022-06-17 08:00:00");
makeSlots(8, "2022-06-18 08:00:00");
makeSlots(8, "2022-06-19 08:00:00");
makeSlots(8, "2022-06-20 08:00:00");
makeSlots(8, "2022-06-21 08:00:00");
makeSlots(8, "2022-06-22 08:00:00");
makeSlots(8, "2022-06-23 08:00:00");
makeSlots(8, "2022-06-24 08:00:00");
makeSlots(8, "2022-06-25 08:00:00");
makeSlots(8, "2022-06-26 08:00:00");
makeSlots(8, "2022-06-27 08:00:00");
makeSlots(8, "2022-06-28 08:00:00");
makeSlots(8, "2022-06-29 08:00:00");
makeSlots(8, "2022-06-30 08:00:00");

makeSlots(9, "2022-05-31 08:00:00");
makeSlots(9, "2022-06-01 08:00:00");
makeSlots(9, "2022-06-02 08:00:00");
makeSlots(9, "2022-06-03 08:00:00");
makeSlots(9, "2022-06-04 08:00:00");
makeSlots(9, "2022-06-05 08:00:00");
makeSlots(9, "2022-06-06 08:00:00");
makeSlots(9, "2022-06-07 08:00:00");
makeSlots(9, "2022-06-08 08:00:00");
makeSlots(9, "2022-06-09 08:00:00");
makeSlots(9, "2022-06-10 08:00:00");
makeSlots(9, "2022-06-11 08:00:00");
makeSlots(9, "2022-06-12 08:00:00");
makeSlots(9, "2022-06-13 08:00:00");
makeSlots(9, "2022-06-14 08:00:00");
makeSlots(9, "2022-06-15 08:00:00");
makeSlots(9, "2022-06-16 08:00:00");
makeSlots(9, "2022-06-17 08:00:00");
makeSlots(9, "2022-06-18 08:00:00");
makeSlots(9, "2022-06-19 08:00:00");
makeSlots(9, "2022-06-20 08:00:00");
makeSlots(9, "2022-06-21 08:00:00");
makeSlots(9, "2022-06-22 08:00:00");
makeSlots(9, "2022-06-23 08:00:00");
makeSlots(9, "2022-06-24 08:00:00");
makeSlots(9, "2022-06-25 08:00:00");
makeSlots(9, "2022-06-26 08:00:00");
makeSlots(9, "2022-06-27 08:00:00");
makeSlots(9, "2022-06-28 08:00:00");
makeSlots(9, "2022-06-29 08:00:00");
makeSlots(9, "2022-06-30 08:00:00");

makeSlots(10, "2022-05-31 08:00:00");
makeSlots(10, "2022-06-01 08:00:00");
makeSlots(10, "2022-06-02 08:00:00");
makeSlots(10, "2022-06-03 08:00:00");
makeSlots(10, "2022-06-04 08:00:00");
makeSlots(10, "2022-06-05 08:00:00");
makeSlots(10, "2022-06-06 08:00:00");
makeSlots(10, "2022-06-07 08:00:00");
makeSlots(10, "2022-06-08 08:00:00");
makeSlots(10, "2022-06-09 08:00:00");
makeSlots(10, "2022-06-10 08:00:00");
makeSlots(10, "2022-06-11 08:00:00");
makeSlots(10, "2022-06-12 08:00:00");
makeSlots(10, "2022-06-13 08:00:00");
makeSlots(10, "2022-06-14 08:00:00");
makeSlots(10, "2022-06-15 08:00:00");
makeSlots(10, "2022-06-16 08:00:00");
makeSlots(10, "2022-06-17 08:00:00");
makeSlots(10, "2022-06-18 08:00:00");
makeSlots(10, "2022-06-19 08:00:00");
makeSlots(10, "2022-06-20 08:00:00");
makeSlots(10, "2022-06-21 08:00:00");
makeSlots(10, "2022-06-22 08:00:00");
makeSlots(10, "2022-06-23 08:00:00");
makeSlots(10, "2022-06-24 08:00:00");
makeSlots(10, "2022-06-25 08:00:00");
makeSlots(10, "2022-06-26 08:00:00");
makeSlots(10, "2022-06-27 08:00:00");
makeSlots(10, "2022-06-28 08:00:00");
makeSlots(10, "2022-06-29 08:00:00");
makeSlots(10, "2022-06-30 08:00:00");

makeSlots(11, "2022-05-31 08:00:00");
makeSlots(11, "2022-06-01 08:00:00");
makeSlots(11, "2022-06-02 08:00:00");
makeSlots(11, "2022-06-03 08:00:00");
makeSlots(11, "2022-06-04 08:00:00");
makeSlots(11, "2022-06-05 08:00:00");
makeSlots(11, "2022-06-06 08:00:00");
makeSlots(11, "2022-06-07 08:00:00");
makeSlots(11, "2022-06-08 08:00:00");
makeSlots(11, "2022-06-09 08:00:00");
makeSlots(11, "2022-06-10 08:00:00");
makeSlots(11, "2022-06-11 08:00:00");
makeSlots(11, "2022-06-12 08:00:00");
makeSlots(11, "2022-06-13 08:00:00");
makeSlots(11, "2022-06-14 08:00:00");
makeSlots(11, "2022-06-15 08:00:00");
makeSlots(11, "2022-06-16 08:00:00");
makeSlots(11, "2022-06-17 08:00:00");
makeSlots(11, "2022-06-18 08:00:00");
makeSlots(11, "2022-06-19 08:00:00");
makeSlots(11, "2022-06-20 08:00:00");
makeSlots(11, "2022-06-21 08:00:00");
makeSlots(11, "2022-06-22 08:00:00");
makeSlots(11, "2022-06-23 08:00:00");
makeSlots(11, "2022-06-24 08:00:00");
makeSlots(11, "2022-06-25 08:00:00");
makeSlots(11, "2022-06-26 08:00:00");
makeSlots(11, "2022-06-27 08:00:00");
makeSlots(11, "2022-06-28 08:00:00");
makeSlots(11, "2022-06-29 08:00:00");
makeSlots(11, "2022-06-30 08:00:00");

makeSlots(12, "2022-05-31 08:00:00");
makeSlots(12, "2022-06-01 08:00:00");
makeSlots(12, "2022-06-02 08:00:00");
makeSlots(12, "2022-06-03 08:00:00");
makeSlots(12, "2022-06-04 08:00:00");
makeSlots(12, "2022-06-05 08:00:00");
makeSlots(12, "2022-06-06 08:00:00");
makeSlots(12, "2022-06-07 08:00:00");
makeSlots(12, "2022-06-08 08:00:00");
makeSlots(12, "2022-06-09 08:00:00");
makeSlots(12, "2022-06-10 08:00:00");
makeSlots(12, "2022-06-11 08:00:00");
makeSlots(12, "2022-06-12 08:00:00");
makeSlots(12, "2022-06-13 08:00:00");
makeSlots(12, "2022-06-14 08:00:00");
makeSlots(12, "2022-06-15 08:00:00");
makeSlots(12, "2022-06-16 08:00:00");
makeSlots(12, "2022-06-17 08:00:00");
makeSlots(12, "2022-06-18 08:00:00");
makeSlots(12, "2022-06-19 08:00:00");
makeSlots(12, "2022-06-20 08:00:00");
makeSlots(12, "2022-06-21 08:00:00");
makeSlots(12, "2022-06-22 08:00:00");
makeSlots(12, "2022-06-23 08:00:00");
makeSlots(12, "2022-06-24 08:00:00");
makeSlots(12, "2022-06-25 08:00:00");
makeSlots(12, "2022-06-26 08:00:00");
makeSlots(12, "2022-06-27 08:00:00");
makeSlots(12, "2022-06-28 08:00:00");
makeSlots(12, "2022-06-29 08:00:00");
makeSlots(12, "2022-06-30 08:00:00");

makeSlots(13, "2022-05-31 08:00:00");
makeSlots(13, "2022-06-01 08:00:00");
makeSlots(13, "2022-06-02 08:00:00");
makeSlots(13, "2022-06-03 08:00:00");
makeSlots(13, "2022-06-04 08:00:00");
makeSlots(13, "2022-06-05 08:00:00");
makeSlots(13, "2022-06-06 08:00:00");
makeSlots(13, "2022-06-07 08:00:00");
makeSlots(13, "2022-06-08 08:00:00");
makeSlots(13, "2022-06-09 08:00:00");
makeSlots(13, "2022-06-10 08:00:00");
makeSlots(13, "2022-06-11 08:00:00");
makeSlots(13, "2022-06-12 08:00:00");
makeSlots(13, "2022-06-13 08:00:00");
makeSlots(13, "2022-06-14 08:00:00");
makeSlots(13, "2022-06-15 08:00:00");
makeSlots(13, "2022-06-16 08:00:00");
makeSlots(13, "2022-06-17 08:00:00");
makeSlots(13, "2022-06-18 08:00:00");
makeSlots(13, "2022-06-19 08:00:00");
makeSlots(13, "2022-06-20 08:00:00");
makeSlots(13, "2022-06-21 08:00:00");
makeSlots(13, "2022-06-22 08:00:00");
makeSlots(13, "2022-06-23 08:00:00");
makeSlots(13, "2022-06-24 08:00:00");
makeSlots(13, "2022-06-25 08:00:00");
makeSlots(13, "2022-06-26 08:00:00");
makeSlots(13, "2022-06-27 08:00:00");
makeSlots(13, "2022-06-28 08:00:00");
makeSlots(13, "2022-06-29 08:00:00");
makeSlots(13, "2022-06-30 08:00:00");

makeSlots(14, "2022-05-31 08:00:00");
makeSlots(14, "2022-06-01 08:00:00");
makeSlots(14, "2022-06-02 08:00:00");
makeSlots(14, "2022-06-03 08:00:00");
makeSlots(14, "2022-06-04 08:00:00");
makeSlots(14, "2022-06-05 08:00:00");
makeSlots(14, "2022-06-06 08:00:00");
makeSlots(14, "2022-06-07 08:00:00");
makeSlots(14, "2022-06-08 08:00:00");
makeSlots(14, "2022-06-09 08:00:00");
makeSlots(14, "2022-06-10 08:00:00");
makeSlots(14, "2022-06-11 08:00:00");
makeSlots(14, "2022-06-12 08:00:00");
makeSlots(14, "2022-06-13 08:00:00");
makeSlots(14, "2022-06-14 08:00:00");
makeSlots(14, "2022-06-15 08:00:00");
makeSlots(14, "2022-06-16 08:00:00");
makeSlots(14, "2022-06-17 08:00:00");
makeSlots(14, "2022-06-18 08:00:00");
makeSlots(14, "2022-06-19 08:00:00");
makeSlots(14, "2022-06-20 08:00:00");
makeSlots(14, "2022-06-21 08:00:00");
makeSlots(14, "2022-06-22 08:00:00");
makeSlots(14, "2022-06-23 08:00:00");
makeSlots(14, "2022-06-24 08:00:00");
makeSlots(14, "2022-06-25 08:00:00");
makeSlots(14, "2022-06-26 08:00:00");
makeSlots(14, "2022-06-27 08:00:00");
makeSlots(14, "2022-06-28 08:00:00");
makeSlots(14, "2022-06-29 08:00:00");
makeSlots(14, "2022-06-30 08:00:00");

makeSlots(15, "2022-05-31 08:00:00");
makeSlots(15, "2022-06-01 08:00:00");
makeSlots(15, "2022-06-02 08:00:00");
makeSlots(15, "2022-06-03 08:00:00");
makeSlots(15, "2022-06-04 08:00:00");
makeSlots(15, "2022-06-05 08:00:00");
makeSlots(15, "2022-06-06 08:00:00");
makeSlots(15, "2022-06-07 08:00:00");
makeSlots(15, "2022-06-08 08:00:00");
makeSlots(15, "2022-06-09 08:00:00");
makeSlots(15, "2022-06-10 08:00:00");
makeSlots(15, "2022-06-11 08:00:00");
makeSlots(15, "2022-06-12 08:00:00");
makeSlots(15, "2022-06-13 08:00:00");
makeSlots(15, "2022-06-14 08:00:00");
makeSlots(15, "2022-06-15 08:00:00");
makeSlots(15, "2022-06-16 08:00:00");
makeSlots(15, "2022-06-17 08:00:00");
makeSlots(15, "2022-06-18 08:00:00");
makeSlots(15, "2022-06-19 08:00:00");
makeSlots(15, "2022-06-20 08:00:00");
makeSlots(15, "2022-06-21 08:00:00");
makeSlots(15, "2022-06-22 08:00:00");
makeSlots(15, "2022-06-23 08:00:00");
makeSlots(15, "2022-06-24 08:00:00");
makeSlots(15, "2022-06-25 08:00:00");
makeSlots(15, "2022-06-26 08:00:00");
makeSlots(15, "2022-06-27 08:00:00");
makeSlots(15, "2022-06-28 08:00:00");
makeSlots(15, "2022-06-29 08:00:00");
makeSlots(15, "2022-06-30 08:00:00");

makeSlots(16, "2022-05-31 08:00:00");
makeSlots(16, "2022-06-01 08:00:00");
makeSlots(16, "2022-06-02 08:00:00");
makeSlots(16, "2022-06-03 08:00:00");
makeSlots(16, "2022-06-04 08:00:00");
makeSlots(16, "2022-06-05 08:00:00");
makeSlots(16, "2022-06-06 08:00:00");
makeSlots(16, "2022-06-07 08:00:00");
makeSlots(16, "2022-06-08 08:00:00");
makeSlots(16, "2022-06-09 08:00:00");
makeSlots(16, "2022-06-10 08:00:00");
makeSlots(16, "2022-06-11 08:00:00");
makeSlots(16, "2022-06-12 08:00:00");
makeSlots(16, "2022-06-13 08:00:00");
makeSlots(16, "2022-06-14 08:00:00");
makeSlots(16, "2022-06-15 08:00:00");
makeSlots(16, "2022-06-16 08:00:00");
makeSlots(16, "2022-06-17 08:00:00");
makeSlots(16, "2022-06-18 08:00:00");
makeSlots(16, "2022-06-19 08:00:00");
makeSlots(16, "2022-06-20 08:00:00");
makeSlots(16, "2022-06-21 08:00:00");
makeSlots(16, "2022-06-22 08:00:00");
makeSlots(16, "2022-06-23 08:00:00");
makeSlots(16, "2022-06-24 08:00:00");
makeSlots(16, "2022-06-25 08:00:00");
makeSlots(16, "2022-06-26 08:00:00");
makeSlots(16, "2022-06-27 08:00:00");
makeSlots(16, "2022-06-28 08:00:00");
makeSlots(16, "2022-06-29 08:00:00");
makeSlots(16, "2022-06-30 08:00:00");

makeSlots(17, "2022-05-31 08:00:00");
makeSlots(17, "2022-06-01 08:00:00");
makeSlots(17, "2022-06-02 08:00:00");
makeSlots(17, "2022-06-03 08:00:00");
makeSlots(17, "2022-06-04 08:00:00");
makeSlots(17, "2022-06-05 08:00:00");
makeSlots(17, "2022-06-06 08:00:00");
makeSlots(17, "2022-06-07 08:00:00");
makeSlots(17, "2022-06-08 08:00:00");
makeSlots(17, "2022-06-09 08:00:00");
makeSlots(17, "2022-06-10 08:00:00");
makeSlots(17, "2022-06-11 08:00:00");
makeSlots(17, "2022-06-12 08:00:00");
makeSlots(17, "2022-06-13 08:00:00");
makeSlots(17, "2022-06-14 08:00:00");
makeSlots(17, "2022-06-15 08:00:00");
makeSlots(17, "2022-06-16 08:00:00");
makeSlots(17, "2022-06-17 08:00:00");
makeSlots(17, "2022-06-18 08:00:00");
makeSlots(17, "2022-06-19 08:00:00");
makeSlots(17, "2022-06-20 08:00:00");
makeSlots(17, "2022-06-21 08:00:00");
makeSlots(17, "2022-06-22 08:00:00");
makeSlots(17, "2022-06-23 08:00:00");
makeSlots(17, "2022-06-24 08:00:00");
makeSlots(17, "2022-06-25 08:00:00");
makeSlots(17, "2022-06-26 08:00:00");
makeSlots(17, "2022-06-27 08:00:00");
makeSlots(17, "2022-06-28 08:00:00");
makeSlots(17, "2022-06-29 08:00:00");
makeSlots(17, "2022-06-30 08:00:00");

makeSlots(18, "2022-05-31 08:00:00");
makeSlots(18, "2022-06-01 08:00:00");
makeSlots(18, "2022-06-02 08:00:00");
makeSlots(18, "2022-06-03 08:00:00");
makeSlots(18, "2022-06-04 08:00:00");
makeSlots(18, "2022-06-05 08:00:00");
makeSlots(18, "2022-06-06 08:00:00");
makeSlots(18, "2022-06-07 08:00:00");
makeSlots(18, "2022-06-08 08:00:00");
makeSlots(18, "2022-06-09 08:00:00");
makeSlots(18, "2022-06-10 08:00:00");
makeSlots(18, "2022-06-11 08:00:00");
makeSlots(18, "2022-06-12 08:00:00");
makeSlots(18, "2022-06-13 08:00:00");
makeSlots(18, "2022-06-14 08:00:00");
makeSlots(18, "2022-06-15 08:00:00");
makeSlots(18, "2022-06-16 08:00:00");
makeSlots(18, "2022-06-17 08:00:00");
makeSlots(18, "2022-06-18 08:00:00");
makeSlots(18, "2022-06-19 08:00:00");
makeSlots(18, "2022-06-20 08:00:00");
makeSlots(18, "2022-06-21 08:00:00");
makeSlots(18, "2022-06-22 08:00:00");
makeSlots(18, "2022-06-23 08:00:00");
makeSlots(18, "2022-06-24 08:00:00");
makeSlots(18, "2022-06-25 08:00:00");
makeSlots(18, "2022-06-26 08:00:00");
makeSlots(18, "2022-06-27 08:00:00");
makeSlots(18, "2022-06-28 08:00:00");
makeSlots(18, "2022-06-29 08:00:00");
makeSlots(18, "2022-06-30 08:00:00");

makeSlots(19, "2022-05-31 08:00:00");
makeSlots(19, "2022-06-01 08:00:00");
makeSlots(19, "2022-06-02 08:00:00");
makeSlots(19, "2022-06-03 08:00:00");
makeSlots(19, "2022-06-04 08:00:00");
makeSlots(19, "2022-06-05 08:00:00");
makeSlots(19, "2022-06-06 08:00:00");
makeSlots(19, "2022-06-07 08:00:00");
makeSlots(19, "2022-06-08 08:00:00");
makeSlots(19, "2022-06-09 08:00:00");
makeSlots(19, "2022-06-10 08:00:00");
makeSlots(19, "2022-06-11 08:00:00");
makeSlots(19, "2022-06-12 08:00:00");
makeSlots(19, "2022-06-13 08:00:00");
makeSlots(19, "2022-06-14 08:00:00");
makeSlots(19, "2022-06-15 08:00:00");
makeSlots(19, "2022-06-16 08:00:00");
makeSlots(19, "2022-06-17 08:00:00");
makeSlots(19, "2022-06-18 08:00:00");
makeSlots(19, "2022-06-19 08:00:00");
makeSlots(19, "2022-06-20 08:00:00");
makeSlots(19, "2022-06-21 08:00:00");
makeSlots(19, "2022-06-22 08:00:00");
makeSlots(19, "2022-06-23 08:00:00");
makeSlots(19, "2022-06-24 08:00:00");
makeSlots(19, "2022-06-25 08:00:00");
makeSlots(19, "2022-06-26 08:00:00");
makeSlots(19, "2022-06-27 08:00:00");
makeSlots(19, "2022-06-28 08:00:00");
makeSlots(19, "2022-06-29 08:00:00");
makeSlots(19, "2022-06-30 08:00:00");

makeSlots(20, "2022-05-31 08:00:00");
makeSlots(20, "2022-06-01 08:00:00");
makeSlots(20, "2022-06-02 08:00:00");
makeSlots(20, "2022-06-03 08:00:00");
makeSlots(20, "2022-06-04 08:00:00");
makeSlots(20, "2022-06-05 08:00:00");
makeSlots(20, "2022-06-06 08:00:00");
makeSlots(20, "2022-06-07 08:00:00");
makeSlots(20, "2022-06-08 08:00:00");
makeSlots(20, "2022-06-09 08:00:00");
makeSlots(20, "2022-06-10 08:00:00");
makeSlots(20, "2022-06-11 08:00:00");
makeSlots(20, "2022-06-12 08:00:00");
makeSlots(20, "2022-06-13 08:00:00");
makeSlots(20, "2022-06-14 08:00:00");
makeSlots(20, "2022-06-15 08:00:00");
makeSlots(20, "2022-06-16 08:00:00");
makeSlots(20, "2022-06-17 08:00:00");
makeSlots(20, "2022-06-18 08:00:00");
makeSlots(20, "2022-06-19 08:00:00");
makeSlots(20, "2022-06-20 08:00:00");
makeSlots(20, "2022-06-21 08:00:00");
makeSlots(20, "2022-06-22 08:00:00");
makeSlots(20, "2022-06-23 08:00:00");
makeSlots(20, "2022-06-24 08:00:00");
makeSlots(20, "2022-06-25 08:00:00");
makeSlots(20, "2022-06-26 08:00:00");
makeSlots(20, "2022-06-27 08:00:00");
makeSlots(20, "2022-06-28 08:00:00");
makeSlots(20, "2022-06-29 08:00:00");
makeSlots(20, "2022-06-30 08:00:00");

makeSlots(21, "2022-05-31 08:00:00");
makeSlots(21, "2022-06-01 08:00:00");
makeSlots(21, "2022-06-02 08:00:00");
makeSlots(21, "2022-06-03 08:00:00");
makeSlots(21, "2022-06-04 08:00:00");
makeSlots(21, "2022-06-05 08:00:00");
makeSlots(21, "2022-06-06 08:00:00");
makeSlots(21, "2022-06-07 08:00:00");
makeSlots(21, "2022-06-08 08:00:00");
makeSlots(21, "2022-06-09 08:00:00");
makeSlots(21, "2022-06-10 08:00:00");
makeSlots(21, "2022-06-11 08:00:00");
makeSlots(21, "2022-06-12 08:00:00");
makeSlots(21, "2022-06-13 08:00:00");
makeSlots(21, "2022-06-14 08:00:00");
makeSlots(21, "2022-06-15 08:00:00");
makeSlots(21, "2022-06-16 08:00:00");
makeSlots(21, "2022-06-17 08:00:00");
makeSlots(21, "2022-06-18 08:00:00");
makeSlots(21, "2022-06-19 08:00:00");
makeSlots(21, "2022-06-20 08:00:00");
makeSlots(21, "2022-06-21 08:00:00");
makeSlots(21, "2022-06-22 08:00:00");
makeSlots(21, "2022-06-23 08:00:00");
makeSlots(21, "2022-06-24 08:00:00");
makeSlots(21, "2022-06-25 08:00:00");
makeSlots(21, "2022-06-26 08:00:00");
makeSlots(21, "2022-06-27 08:00:00");
makeSlots(21, "2022-06-28 08:00:00");
makeSlots(21, "2022-06-29 08:00:00");
makeSlots(21, "2022-06-30 08:00:00");

makeSlots(22, "2022-05-31 08:00:00");
makeSlots(22, "2022-06-01 08:00:00");
makeSlots(22, "2022-06-02 08:00:00");
makeSlots(22, "2022-06-03 08:00:00");
makeSlots(22, "2022-06-04 08:00:00");
makeSlots(22, "2022-06-05 08:00:00");
makeSlots(22, "2022-06-06 08:00:00");
makeSlots(22, "2022-06-07 08:00:00");
makeSlots(22, "2022-06-08 08:00:00");
makeSlots(22, "2022-06-09 08:00:00");
makeSlots(22, "2022-06-10 08:00:00");
makeSlots(22, "2022-06-11 08:00:00");
makeSlots(22, "2022-06-12 08:00:00");
makeSlots(22, "2022-06-13 08:00:00");
makeSlots(22, "2022-06-14 08:00:00");
makeSlots(22, "2022-06-15 08:00:00");
makeSlots(22, "2022-06-16 08:00:00");
makeSlots(22, "2022-06-17 08:00:00");
makeSlots(22, "2022-06-18 08:00:00");
makeSlots(22, "2022-06-19 08:00:00");
makeSlots(22, "2022-06-20 08:00:00");
makeSlots(22, "2022-06-21 08:00:00");
makeSlots(22, "2022-06-22 08:00:00");
makeSlots(22, "2022-06-23 08:00:00");
makeSlots(22, "2022-06-24 08:00:00");
makeSlots(22, "2022-06-25 08:00:00");
makeSlots(22, "2022-06-26 08:00:00");
makeSlots(22, "2022-06-27 08:00:00");
makeSlots(22, "2022-06-28 08:00:00");
makeSlots(22, "2022-06-29 08:00:00");
makeSlots(22, "2022-06-30 08:00:00");

makeSlots(23, "2022-05-31 08:00:00");
makeSlots(23, "2022-06-01 08:00:00");
makeSlots(23, "2022-06-02 08:00:00");
makeSlots(23, "2022-06-03 08:00:00");
makeSlots(23, "2022-06-04 08:00:00");
makeSlots(23, "2022-06-05 08:00:00");
makeSlots(23, "2022-06-06 08:00:00");
makeSlots(23, "2022-06-07 08:00:00");
makeSlots(23, "2022-06-08 08:00:00");
makeSlots(23, "2022-06-09 08:00:00");
makeSlots(23, "2022-06-10 08:00:00");
makeSlots(23, "2022-06-11 08:00:00");
makeSlots(23, "2022-06-12 08:00:00");
makeSlots(23, "2022-06-13 08:00:00");
makeSlots(23, "2022-06-14 08:00:00");
makeSlots(23, "2022-06-15 08:00:00");
makeSlots(23, "2022-06-16 08:00:00");
makeSlots(23, "2022-06-17 08:00:00");
makeSlots(23, "2022-06-18 08:00:00");
makeSlots(23, "2022-06-19 08:00:00");
makeSlots(23, "2022-06-20 08:00:00");
makeSlots(23, "2022-06-21 08:00:00");
makeSlots(23, "2022-06-22 08:00:00");
makeSlots(23, "2022-06-23 08:00:00");
makeSlots(23, "2022-06-24 08:00:00");
makeSlots(23, "2022-06-25 08:00:00");
makeSlots(23, "2022-06-26 08:00:00");
makeSlots(23, "2022-06-27 08:00:00");
makeSlots(23, "2022-06-28 08:00:00");
makeSlots(23, "2022-06-29 08:00:00");
makeSlots(23, "2022-06-30 08:00:00");

makeSlots(24, "2022-05-31 08:00:00");
makeSlots(24, "2022-06-01 08:00:00");
makeSlots(24, "2022-06-02 08:00:00");
makeSlots(24, "2022-06-03 08:00:00");
makeSlots(24, "2022-06-04 08:00:00");
makeSlots(24, "2022-06-05 08:00:00");
makeSlots(24, "2022-06-06 08:00:00");
makeSlots(24, "2022-06-07 08:00:00");
makeSlots(24, "2022-06-08 08:00:00");
makeSlots(24, "2022-06-09 08:00:00");
makeSlots(24, "2022-06-10 08:00:00");
makeSlots(24, "2022-06-11 08:00:00");
makeSlots(24, "2022-06-12 08:00:00");
makeSlots(24, "2022-06-13 08:00:00");
makeSlots(24, "2022-06-14 08:00:00");
makeSlots(24, "2022-06-15 08:00:00");
makeSlots(24, "2022-06-16 08:00:00");
makeSlots(24, "2022-06-17 08:00:00");
makeSlots(24, "2022-06-18 08:00:00");
makeSlots(24, "2022-06-19 08:00:00");
makeSlots(24, "2022-06-20 08:00:00");
makeSlots(24, "2022-06-21 08:00:00");
makeSlots(24, "2022-06-22 08:00:00");
makeSlots(24, "2022-06-23 08:00:00");
makeSlots(24, "2022-06-24 08:00:00");
makeSlots(24, "2022-06-25 08:00:00");
makeSlots(24, "2022-06-26 08:00:00");
makeSlots(24, "2022-06-27 08:00:00");
makeSlots(24, "2022-06-28 08:00:00");
makeSlots(24, "2022-06-29 08:00:00");
makeSlots(24, "2022-06-30 08:00:00");

makeSlots(25, "2022-05-31 08:00:00");
makeSlots(25, "2022-06-01 08:00:00");
makeSlots(25, "2022-06-02 08:00:00");
makeSlots(25, "2022-06-03 08:00:00");
makeSlots(25, "2022-06-04 08:00:00");
makeSlots(25, "2022-06-05 08:00:00");
makeSlots(25, "2022-06-06 08:00:00");
makeSlots(25, "2022-06-07 08:00:00");
makeSlots(25, "2022-06-08 08:00:00");
makeSlots(25, "2022-06-09 08:00:00");
makeSlots(25, "2022-06-10 08:00:00");
makeSlots(25, "2022-06-11 08:00:00");
makeSlots(25, "2022-06-12 08:00:00");
makeSlots(25, "2022-06-13 08:00:00");
makeSlots(25, "2022-06-14 08:00:00");
makeSlots(25, "2022-06-15 08:00:00");
makeSlots(25, "2022-06-16 08:00:00");
makeSlots(25, "2022-06-17 08:00:00");
makeSlots(25, "2022-06-18 08:00:00");
makeSlots(25, "2022-06-19 08:00:00");
makeSlots(25, "2022-06-20 08:00:00");
makeSlots(25, "2022-06-21 08:00:00");
makeSlots(25, "2022-06-22 08:00:00");
makeSlots(25, "2022-06-23 08:00:00");
makeSlots(25, "2022-06-24 08:00:00");
makeSlots(25, "2022-06-25 08:00:00");
makeSlots(25, "2022-06-26 08:00:00");
makeSlots(25, "2022-06-27 08:00:00");
makeSlots(25, "2022-06-28 08:00:00");
makeSlots(25, "2022-06-29 08:00:00");
makeSlots(25, "2022-06-30 08:00:00");

makeSlots(26, "2022-05-31 08:00:00");
makeSlots(26, "2022-06-01 08:00:00");
makeSlots(26, "2022-06-02 08:00:00");
makeSlots(26, "2022-06-03 08:00:00");
makeSlots(26, "2022-06-04 08:00:00");
makeSlots(26, "2022-06-05 08:00:00");
makeSlots(26, "2022-06-06 08:00:00");
makeSlots(26, "2022-06-07 08:00:00");
makeSlots(26, "2022-06-08 08:00:00");
makeSlots(26, "2022-06-09 08:00:00");
makeSlots(26, "2022-06-10 08:00:00");
makeSlots(26, "2022-06-11 08:00:00");
makeSlots(26, "2022-06-12 08:00:00");
makeSlots(26, "2022-06-13 08:00:00");
makeSlots(26, "2022-06-14 08:00:00");
makeSlots(26, "2022-06-15 08:00:00");
makeSlots(26, "2022-06-16 08:00:00");
makeSlots(26, "2022-06-17 08:00:00");
makeSlots(26, "2022-06-18 08:00:00");
makeSlots(26, "2022-06-19 08:00:00");
makeSlots(26, "2022-06-20 08:00:00");
makeSlots(26, "2022-06-21 08:00:00");
makeSlots(26, "2022-06-22 08:00:00");
makeSlots(26, "2022-06-23 08:00:00");
makeSlots(26, "2022-06-24 08:00:00");
makeSlots(26, "2022-06-25 08:00:00");
makeSlots(26, "2022-06-26 08:00:00");
makeSlots(26, "2022-06-27 08:00:00");
makeSlots(26, "2022-06-28 08:00:00");
makeSlots(26, "2022-06-29 08:00:00");
makeSlots(26, "2022-06-30 08:00:00");
