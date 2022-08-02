-- CREATE EXTENSION postgis;

-- -- DROP TABLE IF EXISTS password_reset_codes;

-- -- DROP TABLE IF EXISTS profiles;

-- -- DROP TABLE IF EXISTS clientAccounts;

-- -- DROP TABLE IF EXISTS professional_profile;

--  DROP TABLE IF EXISTS appointaments;

CREATE TABLE clientAccounts (
    id                      SERIAL primary key,
    name                    VARCHAR(200) NOT NULL,
    email                   VARCHAR(100) NOT NULL UNIQUE,
    hash_password           VARCHAR NOT NULL,
    created_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE profiles (
  id                  SERIAL PRIMARY KEY,
  user_id             INT REFERENCES clientAccounts (id) NOT NULL,
  address             TEXT,
  created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE password_reset_codes (
    id              SERIAL PRIMARY KEY,
    user_id         INT REFERENCES clientAccounts (id) NOT NULL,
    code            VARCHAR(6) NOT NULL,
    email           VARCHAR(50) NOT NULL,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE professional_profile (
  id                SERIAL PRIMARY KEY NOT NULL,
  name              VARCHAR(255) NOT NULL,
  type              VARCHAR(255) NOT NULL,
  address           VARCHAR(255) ,
  email             VARCHAR(255) ,
  phone             INT,   
  geom              geometry NOT NULL,
  created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE services (
  id                SERIAL PRIMARY KEY,
  professional_id   INT REFERENCES professional_profile (id) NOT NULL,
  service_name      VARCHAR(255) NOT NULL,
  category          VARCHAR(255) NOT NULL,
  price             INT,
  duration          TIME NOT NULL,
  created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS appointaments;
CREATE TABLE appointaments (
  id                SERIAL PRIMARY KEY,
  professional_id   INT REFERENCES professional_profile (id) NOT NULL,
  service_id        INT REFERENCES services (id),
  slot_date         TIMESTAMP NOT NULL,
  slot_time         TIME NOT NULL,
  booked            BOOLEAN NOT NULL,
  user_id           INT REFERENCES clientAccounts (id),
  created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


