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

// makeSlots(1, "2022-05-31");
// makeSlots(1, "2022-06-01");
// makeSlots(1, "2022-06-02");
// makeSlots(1, "2022-06-03");
// makeSlots(1, "2022-06-04");
// makeSlots(1, "2022-06-05");
// makeSlots(1, "2022-06-06");
// makeSlots(1, "2022-06-07");
// makeSlots(1, "2022-06-08");
// makeSlots(1, "2022-06-09");
// makeSlots(1, "2022-06-10");
// makeSlots(1, "2022-06-11");
// makeSlots(1, "2022-06-12");
// makeSlots(1, "2022-06-13");
// makeSlots(1, "2022-06-14");
// makeSlots(1, "2022-06-15");
// makeSlots(1, "2022-06-16");
// makeSlots(1, "2022-06-17");
// makeSlots(1, "2022-06-18");
// makeSlots(1, "2022-06-19");
// makeSlots(1, "2022-06-20");
// makeSlots(1, "2022-06-21");
// makeSlots(1, "2022-06-22");
// makeSlots(1, "2022-06-23");
// makeSlots(1, "2022-06-24");
// makeSlots(1, "2022-06-25");
// makeSlots(1, "2022-06-26");
// makeSlots(1, "2022-06-27");
// makeSlots(1, "2022-06-28");
// makeSlots(1, "2022-06-29");
// makeSlots(1, "2022-06-30");

// makeSlots(2, "2022-05-31");
// makeSlots(2, "2022-06-01");
// makeSlots(2, "2022-06-02");
// makeSlots(2, "2022-06-03");
// makeSlots(2, "2022-06-04");
// makeSlots(2, "2022-06-05");
// makeSlots(2, "2022-06-06");
// makeSlots(2, "2022-06-07");
// makeSlots(2, "2022-06-08");
// makeSlots(2, "2022-06-09");
// makeSlots(2, "2022-06-10");
// makeSlots(2, "2022-06-11");
// makeSlots(2, "2022-06-12");
// makeSlots(2, "2022-06-13");
// makeSlots(2, "2022-06-14");
// makeSlots(2, "2022-06-15");
// makeSlots(2, "2022-06-16");
// makeSlots(2, "2022-06-17");
// makeSlots(2, "2022-06-18");
// makeSlots(2, "2022-06-19");
// makeSlots(2, "2022-06-20");
// makeSlots(2, "2022-06-21");
// makeSlots(2, "2022-06-22");
// makeSlots(2, "2022-06-23");
// makeSlots(2, "2022-06-24");
// makeSlots(2, "2022-06-25");
// makeSlots(2, "2022-06-26");
// makeSlots(2, "2022-06-27");
// makeSlots(2, "2022-06-28");
// makeSlots(2, "2022-06-29");
// makeSlots(2, "2022-06-30");

// makeSlots(3, "2022-05-31");
// makeSlots(3, "2022-06-01");
// makeSlots(3, "2022-06-02");
// makeSlots(3, "2022-06-03");
// makeSlots(3, "2022-06-04");
// makeSlots(3, "2022-06-05");
// makeSlots(3, "2022-06-06");
// makeSlots(3, "2022-06-07");
// makeSlots(3, "2022-06-08");
// makeSlots(3, "2022-06-09");
// makeSlots(3, "2022-06-10");
// makeSlots(3, "2022-06-11");
// makeSlots(3, "2022-06-12");
// makeSlots(3, "2022-06-13");
// makeSlots(3, "2022-06-14");
// makeSlots(3, "2022-06-15");
// makeSlots(3, "2022-06-16");
// makeSlots(3, "2022-06-17");
// makeSlots(3, "2022-06-18");
// makeSlots(3, "2022-06-19");
// makeSlots(3, "2022-06-20");
// makeSlots(3, "2022-06-21");
// makeSlots(3, "2022-06-22");
// makeSlots(3, "2022-06-23");
// makeSlots(3, "2022-06-24");
// makeSlots(3, "2022-06-25");
// makeSlots(3, "2022-06-26");
// makeSlots(3, "2022-06-27");
// makeSlots(3, "2022-06-28");
// makeSlots(3, "2022-06-29");
// makeSlots(3, "2022-06-30");

// makeSlots(4, "2022-05-31");
// makeSlots(4, "2022-06-01");
// makeSlots(4, "2022-06-02");
// makeSlots(4, "2022-06-03");
// makeSlots(4, "2022-06-04");
// makeSlots(4, "2022-06-05");
// makeSlots(4, "2022-06-06");
// makeSlots(4, "2022-06-07");
// makeSlots(4, "2022-06-08");
// makeSlots(4, "2022-06-09");
// makeSlots(4, "2022-06-10");
// makeSlots(4, "2022-06-11");
// makeSlots(4, "2022-06-12");
// makeSlots(4, "2022-06-13");
// makeSlots(4, "2022-06-14");
// makeSlots(4, "2022-06-15");
// makeSlots(4, "2022-06-16");
// makeSlots(4, "2022-06-17");
// makeSlots(4, "2022-06-18");
// makeSlots(4, "2022-06-19");
// makeSlots(4, "2022-06-20");
// makeSlots(4, "2022-06-21");
// makeSlots(4, "2022-06-22");
// makeSlots(4, "2022-06-23");
// makeSlots(4, "2022-06-24");
// makeSlots(4, "2022-06-25");
// makeSlots(4, "2022-06-26");
// makeSlots(4, "2022-06-27");
// makeSlots(4, "2022-06-28");
// makeSlots(4, "2022-06-29");
// makeSlots(4, "2022-06-30");

// makeSlots(5, "2022-05-31");
// makeSlots(5, "2022-06-01");
// makeSlots(5, "2022-06-02");
// makeSlots(5, "2022-06-03");
// makeSlots(5, "2022-06-04");
// makeSlots(5, "2022-06-05");
// makeSlots(5, "2022-06-06");
// makeSlots(5, "2022-06-07");
// makeSlots(5, "2022-06-08");
// makeSlots(5, "2022-06-09");
// makeSlots(5, "2022-06-10");
// makeSlots(5, "2022-06-11");
// makeSlots(5, "2022-06-12");
// makeSlots(5, "2022-06-13");
// makeSlots(5, "2022-06-14");
// makeSlots(5, "2022-06-15");
// makeSlots(5, "2022-06-16");
// makeSlots(5, "2022-06-17");
// makeSlots(5, "2022-06-18");
// makeSlots(5, "2022-06-19");
// makeSlots(5, "2022-06-20");
// makeSlots(5, "2022-06-21");
// makeSlots(5, "2022-06-22");
// makeSlots(5, "2022-06-23");
// makeSlots(5, "2022-06-24");
// makeSlots(5, "2022-06-25");
// makeSlots(5, "2022-06-26");
// makeSlots(5, "2022-06-27");
// makeSlots(5, "2022-06-28");
// makeSlots(5, "2022-06-29");
// makeSlots(5, "2022-06-30");

// makeSlots(6, "2022-05-31");
// makeSlots(6, "2022-06-01");
// makeSlots(6, "2022-06-02");
// makeSlots(6, "2022-06-03");
// makeSlots(6, "2022-06-04");
// makeSlots(6, "2022-06-05");
// makeSlots(6, "2022-06-06");
// makeSlots(6, "2022-06-07");
// makeSlots(6, "2022-06-08");
// makeSlots(6, "2022-06-09");
// makeSlots(6, "2022-06-10");
// makeSlots(6, "2022-06-11");
// makeSlots(6, "2022-06-12");
// makeSlots(6, "2022-06-13");
// makeSlots(6, "2022-06-14");
// makeSlots(6, "2022-06-15");
// makeSlots(6, "2022-06-16");
// makeSlots(6, "2022-06-17");
// makeSlots(6, "2022-06-18");
// makeSlots(6, "2022-06-19");
// makeSlots(6, "2022-06-20");
// makeSlots(6, "2022-06-21");
// makeSlots(6, "2022-06-22");
// makeSlots(6, "2022-06-23");
// makeSlots(6, "2022-06-24");
// makeSlots(6, "2022-06-25");
// makeSlots(6, "2022-06-26");
// makeSlots(6, "2022-06-27");
// makeSlots(6, "2022-06-28");
// makeSlots(6, "2022-06-29");
// makeSlots(6, "2022-06-30");

// makeSlots(7, "2022-05-31");
// makeSlots(7, "2022-06-01");
// makeSlots(7, "2022-06-02");
// makeSlots(7, "2022-06-03");
// makeSlots(7, "2022-06-04");
// makeSlots(7, "2022-06-05");
// makeSlots(7, "2022-06-06");
// makeSlots(7, "2022-06-07");
// makeSlots(7, "2022-06-08");
// makeSlots(7, "2022-06-09");
// makeSlots(7, "2022-06-10");
// makeSlots(7, "2022-06-11");
// makeSlots(7, "2022-06-12");
// makeSlots(7, "2022-06-13");
// makeSlots(7, "2022-06-14");
// makeSlots(7, "2022-06-15");
// makeSlots(7, "2022-06-16");
// makeSlots(7, "2022-06-17");
// makeSlots(7, "2022-06-18");
// makeSlots(7, "2022-06-19");
// makeSlots(7, "2022-06-20");
// makeSlots(7, "2022-06-21");
// makeSlots(7, "2022-06-22");
// makeSlots(7, "2022-06-23");
// makeSlots(7, "2022-06-24");
// makeSlots(7, "2022-06-25");
// makeSlots(7, "2022-06-26");
// makeSlots(7, "2022-06-27");
// makeSlots(7, "2022-06-28");
// makeSlots(7, "2022-06-29");

// makeSlots(8, "2022-05-31");
// makeSlots(8, "2022-06-01");
// makeSlots(8, "2022-06-02");
// makeSlots(8, "2022-06-03");
// makeSlots(8, "2022-06-04");
// makeSlots(8, "2022-06-05");
// makeSlots(8, "2022-06-06");
// makeSlots(8, "2022-06-07");
// makeSlots(8, "2022-06-08");
// makeSlots(8, "2022-06-09");
// makeSlots(8, "2022-06-10");
// makeSlots(8, "2022-06-11");
// makeSlots(8, "2022-06-12");
// makeSlots(8, "2022-06-13");
// makeSlots(8, "2022-06-14");
// makeSlots(8, "2022-06-15");
// makeSlots(8, "2022-06-16");
// makeSlots(8, "2022-06-17");
// makeSlots(8, "2022-06-18");
// makeSlots(8, "2022-06-19");
// makeSlots(8, "2022-06-20");
// makeSlots(8, "2022-06-21");
// makeSlots(8, "2022-06-22");
// makeSlots(8, "2022-06-23");
// makeSlots(8, "2022-06-24");
// makeSlots(8, "2022-06-25");
// makeSlots(8, "2022-06-26");
// makeSlots(8, "2022-06-27");
// makeSlots(8, "2022-06-28");
// makeSlots(8, "2022-06-29");
// makeSlots(8, "2022-06-30");

// makeSlots(9, "2022-05-31");
// makeSlots(9, "2022-06-01");
// makeSlots(9, "2022-06-02");
// makeSlots(9, "2022-06-03");
// makeSlots(9, "2022-06-04");
// makeSlots(9, "2022-06-05");
// makeSlots(9, "2022-06-06");
// makeSlots(9, "2022-06-07");
// makeSlots(9, "2022-06-08");
// makeSlots(9, "2022-06-09");
// makeSlots(9, "2022-06-10");
// makeSlots(9, "2022-06-11");
// makeSlots(9, "2022-06-12");
// makeSlots(9, "2022-06-13");
// makeSlots(9, "2022-06-14");
// makeSlots(9, "2022-06-15");
// makeSlots(9, "2022-06-16");
// makeSlots(9, "2022-06-17");
// makeSlots(9, "2022-06-18");
// makeSlots(9, "2022-06-19");
// makeSlots(9, "2022-06-20");
// makeSlots(9, "2022-06-21");
// makeSlots(9, "2022-06-22");
// makeSlots(9, "2022-06-23");
// makeSlots(9, "2022-06-24");
// makeSlots(9, "2022-06-25");
// makeSlots(9, "2022-06-26");
// makeSlots(9, "2022-06-27");
// makeSlots(9, "2022-06-28");
// makeSlots(9, "2022-06-29");
// makeSlots(9, "2022-06-30");

// makeSlots(10, "2022-05-31");
// makeSlots(10, "2022-06-01");
// makeSlots(10, "2022-06-02");
// makeSlots(10, "2022-06-03");
// makeSlots(10, "2022-06-04");
// makeSlots(10, "2022-06-05");
// makeSlots(10, "2022-06-06");
// makeSlots(10, "2022-06-07");
// makeSlots(10, "2022-06-08");
// makeSlots(10, "2022-06-09");
// makeSlots(10, "2022-06-10");
// makeSlots(10, "2022-06-11");
// makeSlots(10, "2022-06-12");
// makeSlots(10, "2022-06-13");
// makeSlots(10, "2022-06-14");
// makeSlots(10, "2022-06-15");
// makeSlots(10, "2022-06-16");
// makeSlots(10, "2022-06-17");
// makeSlots(10, "2022-06-18");
// makeSlots(10, "2022-06-19");
// makeSlots(10, "2022-06-20");
// makeSlots(10, "2022-06-21");
// makeSlots(10, "2022-06-22");
// makeSlots(10, "2022-06-23");
// makeSlots(10, "2022-06-24");
// makeSlots(10, "2022-06-25");
// makeSlots(10, "2022-06-26");
// makeSlots(10, "2022-06-27");
// makeSlots(10, "2022-06-28");
// makeSlots(10, "2022-06-29");
// makeSlots(10, "2022-06-30");

makeSlots(11, "2022-05-31");
makeSlots(11, "2022-06-01");
makeSlots(11, "2022-06-02");
makeSlots(11, "2022-06-03");
makeSlots(11, "2022-06-04");
makeSlots(11, "2022-06-05");
makeSlots(11, "2022-06-06");
makeSlots(11, "2022-06-07");
makeSlots(11, "2022-06-08");
makeSlots(11, "2022-06-09");
makeSlots(11, "2022-06-10");
makeSlots(11, "2022-06-11");
makeSlots(11, "2022-06-12");
makeSlots(11, "2022-06-13");
makeSlots(11, "2022-06-14");
makeSlots(11, "2022-06-15");
makeSlots(11, "2022-06-16");
makeSlots(11, "2022-06-17");
makeSlots(11, "2022-06-18");
makeSlots(11, "2022-06-19");
makeSlots(11, "2022-06-20");
makeSlots(11, "2022-06-21");
makeSlots(11, "2022-06-22");
makeSlots(11, "2022-06-23");
makeSlots(11, "2022-06-24");
makeSlots(11, "2022-06-25");
makeSlots(11, "2022-06-26");
makeSlots(11, "2022-06-27");
makeSlots(11, "2022-06-28");
makeSlots(11, "2022-06-29");
makeSlots(11, "2022-06-30");

makeSlots(12, "2022-05-31");
makeSlots(12, "2022-06-01");
makeSlots(12, "2022-06-02");
makeSlots(12, "2022-06-03");
makeSlots(12, "2022-06-04");
makeSlots(12, "2022-06-05");
makeSlots(12, "2022-06-06");
makeSlots(12, "2022-06-07");
makeSlots(12, "2022-06-08");
makeSlots(12, "2022-06-09");
makeSlots(12, "2022-06-10");
makeSlots(12, "2022-06-11");
makeSlots(12, "2022-06-12");
makeSlots(12, "2022-06-13");
makeSlots(12, "2022-06-14");
makeSlots(12, "2022-06-15");
makeSlots(12, "2022-06-16");
makeSlots(12, "2022-06-17");
makeSlots(12, "2022-06-18");
makeSlots(12, "2022-06-19");
makeSlots(12, "2022-06-20");
makeSlots(12, "2022-06-21");
makeSlots(12, "2022-06-22");
makeSlots(12, "2022-06-23");
makeSlots(12, "2022-06-24");
makeSlots(12, "2022-06-25");
makeSlots(12, "2022-06-26");
makeSlots(12, "2022-06-27");
makeSlots(12, "2022-06-28");
makeSlots(12, "2022-06-29");
makeSlots(12, "2022-06-30");

makeSlots(13, "2022-05-31");
makeSlots(13, "2022-06-01");
makeSlots(13, "2022-06-02");
makeSlots(13, "2022-06-03");
makeSlots(13, "2022-06-04");
makeSlots(13, "2022-06-05");
makeSlots(13, "2022-06-06");
makeSlots(13, "2022-06-07");
makeSlots(13, "2022-06-08");
makeSlots(13, "2022-06-09");
makeSlots(13, "2022-06-10");
makeSlots(13, "2022-06-11");
makeSlots(13, "2022-06-12");
makeSlots(13, "2022-06-13");
makeSlots(13, "2022-06-14");
makeSlots(13, "2022-06-15");
makeSlots(13, "2022-06-16");
makeSlots(13, "2022-06-17");
makeSlots(13, "2022-06-18");
makeSlots(13, "2022-06-19");
makeSlots(13, "2022-06-20");
makeSlots(13, "2022-06-21");
makeSlots(13, "2022-06-22");
makeSlots(13, "2022-06-23");
makeSlots(13, "2022-06-24");
makeSlots(13, "2022-06-25");
makeSlots(13, "2022-06-26");
makeSlots(13, "2022-06-27");
makeSlots(13, "2022-06-28");
makeSlots(13, "2022-06-29");
makeSlots(13, "2022-06-30");

makeSlots(14, "2022-05-31");
makeSlots(14, "2022-06-01");
makeSlots(14, "2022-06-02");
makeSlots(14, "2022-06-03");
makeSlots(14, "2022-06-04");
makeSlots(14, "2022-06-05");
makeSlots(14, "2022-06-06");
makeSlots(14, "2022-06-07");
makeSlots(14, "2022-06-08");
makeSlots(14, "2022-06-09");
makeSlots(14, "2022-06-10");
makeSlots(14, "2022-06-11");
makeSlots(14, "2022-06-12");
makeSlots(14, "2022-06-13");
makeSlots(14, "2022-06-14");
makeSlots(14, "2022-06-15");
makeSlots(14, "2022-06-16");
makeSlots(14, "2022-06-17");
makeSlots(14, "2022-06-18");
makeSlots(14, "2022-06-19");
makeSlots(14, "2022-06-20");
makeSlots(14, "2022-06-21");
makeSlots(14, "2022-06-22");
makeSlots(14, "2022-06-23");
makeSlots(14, "2022-06-24");
makeSlots(14, "2022-06-25");
makeSlots(14, "2022-06-26");
makeSlots(14, "2022-06-27");
makeSlots(14, "2022-06-28");
makeSlots(14, "2022-06-29");
makeSlots(14, "2022-06-30");

makeSlots(15, "2022-05-31");
makeSlots(15, "2022-06-01");
makeSlots(15, "2022-06-02");
makeSlots(15, "2022-06-03");
makeSlots(15, "2022-06-04");
makeSlots(15, "2022-06-05");
makeSlots(15, "2022-06-06");
makeSlots(15, "2022-06-07");
makeSlots(15, "2022-06-08");
makeSlots(15, "2022-06-09");
makeSlots(15, "2022-06-10");
makeSlots(15, "2022-06-11");
makeSlots(15, "2022-06-12");
makeSlots(15, "2022-06-13");
makeSlots(15, "2022-06-14");
makeSlots(15, "2022-06-15");
makeSlots(15, "2022-06-16");
makeSlots(15, "2022-06-17");
makeSlots(15, "2022-06-18");
makeSlots(15, "2022-06-19");
makeSlots(15, "2022-06-20");
makeSlots(15, "2022-06-21");
makeSlots(15, "2022-06-22");
makeSlots(15, "2022-06-23");
makeSlots(15, "2022-06-24");
makeSlots(15, "2022-06-25");
makeSlots(15, "2022-06-26");
makeSlots(15, "2022-06-27");
makeSlots(15, "2022-06-28");
makeSlots(15, "2022-06-29");
makeSlots(15, "2022-06-30");

makeSlots(16, "2022-05-31");
makeSlots(16, "2022-06-01");
makeSlots(16, "2022-06-02");
makeSlots(16, "2022-06-03");
makeSlots(16, "2022-06-04");
makeSlots(16, "2022-06-05");
makeSlots(16, "2022-06-06");
makeSlots(16, "2022-06-07");
makeSlots(16, "2022-06-08");
makeSlots(16, "2022-06-09");
makeSlots(16, "2022-06-10");
makeSlots(16, "2022-06-11");
makeSlots(16, "2022-06-12");
makeSlots(16, "2022-06-13");
makeSlots(16, "2022-06-14");
makeSlots(16, "2022-06-15");
makeSlots(16, "2022-06-16");
makeSlots(16, "2022-06-17");
makeSlots(16, "2022-06-18");
makeSlots(16, "2022-06-19");
makeSlots(16, "2022-06-20");
makeSlots(16, "2022-06-21");
makeSlots(16, "2022-06-22");
makeSlots(16, "2022-06-23");
makeSlots(16, "2022-06-24");
makeSlots(16, "2022-06-25");
makeSlots(16, "2022-06-26");
makeSlots(16, "2022-06-27");
makeSlots(16, "2022-06-28");
makeSlots(16, "2022-06-29");
makeSlots(16, "2022-06-30");

makeSlots(17, "2022-05-31");
makeSlots(17, "2022-06-01");
makeSlots(17, "2022-06-02");
makeSlots(17, "2022-06-03");
makeSlots(17, "2022-06-04");
makeSlots(17, "2022-06-05");
makeSlots(17, "2022-06-06");
makeSlots(17, "2022-06-07");
makeSlots(17, "2022-06-08");
makeSlots(17, "2022-06-09");
makeSlots(17, "2022-06-10");
makeSlots(17, "2022-06-11");
makeSlots(17, "2022-06-12");
makeSlots(17, "2022-06-13");
makeSlots(17, "2022-06-14");
makeSlots(17, "2022-06-15");
makeSlots(17, "2022-06-16");
makeSlots(17, "2022-06-17");
makeSlots(17, "2022-06-18");
makeSlots(17, "2022-06-19");
makeSlots(17, "2022-06-20");
makeSlots(17, "2022-06-21");
makeSlots(17, "2022-06-22");
makeSlots(17, "2022-06-23");
makeSlots(17, "2022-06-24");
makeSlots(17, "2022-06-25");
makeSlots(17, "2022-06-26");
makeSlots(17, "2022-06-27");
makeSlots(17, "2022-06-28");
makeSlots(17, "2022-06-29");
makeSlots(17, "2022-06-30");

makeSlots(18, "2022-05-31");
makeSlots(18, "2022-06-01");
makeSlots(18, "2022-06-02");
makeSlots(18, "2022-06-03");
makeSlots(18, "2022-06-04");
makeSlots(18, "2022-06-05");
makeSlots(18, "2022-06-06");
makeSlots(18, "2022-06-07");
makeSlots(18, "2022-06-08");
makeSlots(18, "2022-06-09");
makeSlots(18, "2022-06-10");
makeSlots(18, "2022-06-11");
makeSlots(18, "2022-06-12");
makeSlots(18, "2022-06-13");
makeSlots(18, "2022-06-14");
makeSlots(18, "2022-06-15");
makeSlots(18, "2022-06-16");
makeSlots(18, "2022-06-17");
makeSlots(18, "2022-06-18");
makeSlots(18, "2022-06-19");
makeSlots(18, "2022-06-20");
makeSlots(18, "2022-06-21");
makeSlots(18, "2022-06-22");
makeSlots(18, "2022-06-23");
makeSlots(18, "2022-06-24");
makeSlots(18, "2022-06-25");
makeSlots(18, "2022-06-26");
makeSlots(18, "2022-06-27");
makeSlots(18, "2022-06-28");
makeSlots(18, "2022-06-29");
makeSlots(18, "2022-06-30");

makeSlots(19, "2022-05-31");
makeSlots(19, "2022-06-01");
makeSlots(19, "2022-06-02");
makeSlots(19, "2022-06-03");
makeSlots(19, "2022-06-04");
makeSlots(19, "2022-06-05");
makeSlots(19, "2022-06-06");
makeSlots(19, "2022-06-07");
makeSlots(19, "2022-06-08");
makeSlots(19, "2022-06-09");
makeSlots(19, "2022-06-10");
makeSlots(19, "2022-06-11");
makeSlots(19, "2022-06-12");
makeSlots(19, "2022-06-13");
makeSlots(19, "2022-06-14");
makeSlots(19, "2022-06-15");
makeSlots(19, "2022-06-16");
makeSlots(19, "2022-06-17");
makeSlots(19, "2022-06-18");
makeSlots(19, "2022-06-19");
makeSlots(19, "2022-06-20");
makeSlots(19, "2022-06-21");
makeSlots(19, "2022-06-22");
makeSlots(19, "2022-06-23");
makeSlots(19, "2022-06-24");
makeSlots(19, "2022-06-25");
makeSlots(19, "2022-06-26");
makeSlots(19, "2022-06-27");
makeSlots(19, "2022-06-28");
makeSlots(19, "2022-06-29");
makeSlots(19, "2022-06-30");

makeSlots(20, "2022-05-31");
makeSlots(20, "2022-06-01");
makeSlots(20, "2022-06-02");
makeSlots(20, "2022-06-03");
makeSlots(20, "2022-06-04");
makeSlots(20, "2022-06-05");
makeSlots(20, "2022-06-06");
makeSlots(20, "2022-06-07");
makeSlots(20, "2022-06-08");
makeSlots(20, "2022-06-09");
makeSlots(20, "2022-06-10");
makeSlots(20, "2022-06-11");
makeSlots(20, "2022-06-12");
makeSlots(20, "2022-06-13");
makeSlots(20, "2022-06-14");
makeSlots(20, "2022-06-15");
makeSlots(20, "2022-06-16");
makeSlots(20, "2022-06-17");
makeSlots(20, "2022-06-18");
makeSlots(20, "2022-06-19");
makeSlots(20, "2022-06-20");
makeSlots(20, "2022-06-21");
makeSlots(20, "2022-06-22");
makeSlots(20, "2022-06-23");
makeSlots(20, "2022-06-24");
makeSlots(20, "2022-06-25");
makeSlots(20, "2022-06-26");
makeSlots(20, "2022-06-27");
makeSlots(20, "2022-06-28");
makeSlots(20, "2022-06-29");
makeSlots(20, "2022-06-30");

makeSlots(21, "2022-05-31");
makeSlots(21, "2022-06-01");
makeSlots(21, "2022-06-02");
makeSlots(21, "2022-06-03");
makeSlots(21, "2022-06-04");
makeSlots(21, "2022-06-05");
makeSlots(21, "2022-06-06");
makeSlots(21, "2022-06-07");
makeSlots(21, "2022-06-08");
makeSlots(21, "2022-06-09");
makeSlots(21, "2022-06-10");
makeSlots(21, "2022-06-11");
makeSlots(21, "2022-06-12");
makeSlots(21, "2022-06-13");
makeSlots(21, "2022-06-14");
makeSlots(21, "2022-06-15");
makeSlots(21, "2022-06-16");
makeSlots(21, "2022-06-17");
makeSlots(21, "2022-06-18");
makeSlots(21, "2022-06-19");
makeSlots(21, "2022-06-20");
makeSlots(21, "2022-06-21");
makeSlots(21, "2022-06-22");
makeSlots(21, "2022-06-23");
makeSlots(21, "2022-06-24");
makeSlots(21, "2022-06-25");
makeSlots(21, "2022-06-26");
makeSlots(21, "2022-06-27");
makeSlots(21, "2022-06-28");
makeSlots(21, "2022-06-29");
makeSlots(21, "2022-06-30");

makeSlots(22, "2022-05-31");
makeSlots(22, "2022-06-01");
makeSlots(22, "2022-06-02");
makeSlots(22, "2022-06-03");
makeSlots(22, "2022-06-04");
makeSlots(22, "2022-06-05");
makeSlots(22, "2022-06-06");
makeSlots(22, "2022-06-07");
makeSlots(22, "2022-06-08");
makeSlots(22, "2022-06-09");
makeSlots(22, "2022-06-10");
makeSlots(22, "2022-06-11");
makeSlots(22, "2022-06-12");
makeSlots(22, "2022-06-13");
makeSlots(22, "2022-06-14");
makeSlots(22, "2022-06-15");
makeSlots(22, "2022-06-16");
makeSlots(22, "2022-06-17");
makeSlots(22, "2022-06-18");
makeSlots(22, "2022-06-19");
makeSlots(22, "2022-06-20");
makeSlots(22, "2022-06-21");
makeSlots(22, "2022-06-22");
makeSlots(22, "2022-06-23");
makeSlots(22, "2022-06-24");
makeSlots(22, "2022-06-25");
makeSlots(22, "2022-06-26");
makeSlots(22, "2022-06-27");
makeSlots(22, "2022-06-28");
makeSlots(22, "2022-06-29");
makeSlots(22, "2022-06-30");

makeSlots(23, "2022-05-31");
makeSlots(23, "2022-06-01");
makeSlots(23, "2022-06-02");
makeSlots(23, "2022-06-03");
makeSlots(23, "2022-06-04");
makeSlots(23, "2022-06-05");
makeSlots(23, "2022-06-06");
makeSlots(23, "2022-06-07");
makeSlots(23, "2022-06-08");
makeSlots(23, "2022-06-09");
makeSlots(23, "2022-06-10");
makeSlots(23, "2022-06-11");
makeSlots(23, "2022-06-12");
makeSlots(23, "2022-06-13");
makeSlots(23, "2022-06-14");
makeSlots(23, "2022-06-15");
makeSlots(23, "2022-06-16");
makeSlots(23, "2022-06-17");
makeSlots(23, "2022-06-18");
makeSlots(23, "2022-06-19");
makeSlots(23, "2022-06-20");
makeSlots(23, "2022-06-21");
makeSlots(23, "2022-06-22");
makeSlots(23, "2022-06-23");
makeSlots(23, "2022-06-24");
makeSlots(23, "2022-06-25");
makeSlots(23, "2022-06-26");
makeSlots(23, "2022-06-27");
makeSlots(23, "2022-06-28");
makeSlots(23, "2022-06-29");
makeSlots(23, "2022-06-30");

makeSlots(24, "2022-05-31");
makeSlots(24, "2022-06-01");
makeSlots(24, "2022-06-02");
makeSlots(24, "2022-06-03");
makeSlots(24, "2022-06-04");
makeSlots(24, "2022-06-05");
makeSlots(24, "2022-06-06");
makeSlots(24, "2022-06-07");
makeSlots(24, "2022-06-08");
makeSlots(24, "2022-06-09");
makeSlots(24, "2022-06-10");
makeSlots(24, "2022-06-11");
makeSlots(24, "2022-06-12");
makeSlots(24, "2022-06-13");
makeSlots(24, "2022-06-14");
makeSlots(24, "2022-06-15");
makeSlots(24, "2022-06-16");
makeSlots(24, "2022-06-17");
makeSlots(24, "2022-06-18");
makeSlots(24, "2022-06-19");
makeSlots(24, "2022-06-20");
makeSlots(24, "2022-06-21");
makeSlots(24, "2022-06-22");
makeSlots(24, "2022-06-23");
makeSlots(24, "2022-06-24");
makeSlots(24, "2022-06-25");
makeSlots(24, "2022-06-26");
makeSlots(24, "2022-06-27");
makeSlots(24, "2022-06-28");
makeSlots(24, "2022-06-29");
makeSlots(24, "2022-06-30");

makeSlots(25, "2022-05-31");
makeSlots(25, "2022-06-01");
makeSlots(25, "2022-06-02");
makeSlots(25, "2022-06-03");
makeSlots(25, "2022-06-04");
makeSlots(25, "2022-06-05");
makeSlots(25, "2022-06-06");
makeSlots(25, "2022-06-07");
makeSlots(25, "2022-06-08");
makeSlots(25, "2022-06-09");
makeSlots(25, "2022-06-10");
makeSlots(25, "2022-06-11");
makeSlots(25, "2022-06-12");
makeSlots(25, "2022-06-13");
makeSlots(25, "2022-06-14");
makeSlots(25, "2022-06-15");
makeSlots(25, "2022-06-16");
makeSlots(25, "2022-06-17");
makeSlots(25, "2022-06-18");
makeSlots(25, "2022-06-19");
makeSlots(25, "2022-06-20");
makeSlots(25, "2022-06-21");
makeSlots(25, "2022-06-22");
makeSlots(25, "2022-06-23");
makeSlots(25, "2022-06-24");
makeSlots(25, "2022-06-25");
makeSlots(25, "2022-06-26");
makeSlots(25, "2022-06-27");
makeSlots(25, "2022-06-28");
makeSlots(25, "2022-06-29");
makeSlots(25, "2022-06-30");

makeSlots(26, "2022-05-31");
makeSlots(26, "2022-06-01");
makeSlots(26, "2022-06-02");
makeSlots(26, "2022-06-03");
makeSlots(26, "2022-06-04");
makeSlots(26, "2022-06-05");
makeSlots(26, "2022-06-06");
makeSlots(26, "2022-06-07");
makeSlots(26, "2022-06-08");
makeSlots(26, "2022-06-09");
makeSlots(26, "2022-06-10");
makeSlots(26, "2022-06-11");
makeSlots(26, "2022-06-12");
makeSlots(26, "2022-06-13");
makeSlots(26, "2022-06-14");
makeSlots(26, "2022-06-15");
makeSlots(26, "2022-06-16");
makeSlots(26, "2022-06-17");
makeSlots(26, "2022-06-18");
makeSlots(26, "2022-06-19");
makeSlots(26, "2022-06-20");
makeSlots(26, "2022-06-21");
makeSlots(26, "2022-06-22");
makeSlots(26, "2022-06-23");
makeSlots(26, "2022-06-24");
makeSlots(26, "2022-06-25");
makeSlots(26, "2022-06-26");
makeSlots(26, "2022-06-27");
makeSlots(26, "2022-06-28");
makeSlots(26, "2022-06-29");
makeSlots(26, "2022-06-30");
