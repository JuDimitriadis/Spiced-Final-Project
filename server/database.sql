-- DROP TABLE IF EXISTS password_reset_codes;

-- DROP TABLE IF EXISTS profiles;

-- DROP TABLE IF EXISTS accounts;

CREATE TABLE clientAccounts (
    id                      SERIAL primary key,
    name                    VARCHAR(200) NOT NULL,
    email                   VARCHAR(100) NOT NULL UNIQUE,
    hash_password           VARCHAR NOT NULL,
    created_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- CREATE TABLE profiles (
--   id                  SERIAL PRIMARY KEY,
--   user_id             INT REFERENCES users (id) NOT NULL,
--   address             TEXT,
--   created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- )

CREATE TABLE password_reset_codes (
    id              SERIAL PRIMARY KEY,
    user_id         INT REFERENCES accounts (id) NOT NULL,
    code            VARCHAR(6) NOT NULL,
    email           VARCHAR(50) NOT NULL,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);