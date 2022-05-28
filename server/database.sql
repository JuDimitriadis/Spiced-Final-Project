-- CREATE EXTENSION postgis;

-- -- DROP TABLE IF EXISTS password_reset_codes;

-- -- DROP TABLE IF EXISTS profiles;

-- -- DROP TABLE IF EXISTS clientAccounts;

-- CREATE TABLE clientAccounts (
--     id                      SERIAL primary key,
--     name                    VARCHAR(200) NOT NULL,
--     email                   VARCHAR(100) NOT NULL UNIQUE,
--     hash_password           VARCHAR NOT NULL,
--     created_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- -- CREATE TABLE profiles (
-- --   id                  SERIAL PRIMARY KEY,
-- --   user_id             INT REFERENCES users (id) NOT NULL,
-- --   address             TEXT,
-- --   created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- -- )

-- CREATE TABLE password_reset_codes (
--     id              SERIAL PRIMARY KEY,
--     user_id         INT REFERENCES accounts (id) NOT NULL,
--     code            VARCHAR(6) NOT NULL,
--     email           VARCHAR(50) NOT NULL,
--     created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE places (
--   id                SERIAL PRIMARY KEY,
--   name              VARCHAR(255) NOT NULL,
--   provider_type     VARCHAR(255) NOT NULL,
--   address           VARCHAR(255) NOT NULL,
--   geom              geometry
-- );


-- INSERT INTO places (name, provider_type, address, geom) VALUES('Style Hairdresser','Hairdresser','Kaiserstraße 103',ST_GeomFromGeoJSON('{"type": "Point","coordinates": [52.55645352452395, 13.34283884589511]}'));
-- INSERT INTO places (name, provider_type, address, geom)
-- VALUES('Feel Good Spa','Spa','Lindenstraße 3', ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates":[52.547483491164655, 13.360670762166222]
-- }'));
-- INSERT INTO places (name, provider_type, address, geom)
-- VALUES('Beauty Nails','Nails','Geleitstraße 66A',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [52.55207631941123, 13.372343735385341]
-- }'));
-- INSERT INTO places (name, provider_type, address, geom)
-- VALUES('Pele SkinCare','SkinCare','Königsberger Str, 10',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [52.55437255328931, 13.365563111236]
-- }'));
-- INSERT INTO places (name, provider_type, address, geom)
-- VALUES('Prettier Hairdresser','Hairdresser','Am Galgenfeld 14',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates":[52.55849503529659, 13.339985566976456]
-- }'));
-- INSERT INTO places (name, provider_type, address, geom)
-- VALUES('Natur Spa','Spa','Hohe Heide 5',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [52.52679759957386, 13.410701234923646]
-- }'));
-- INSERT INTO places (name, provider_type, address, geom)
-- VALUES('Red Nails','Nails','Willy-Lessing-Straße 4',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [52.53327222346453, 13.34478326850979]
-- }'));
-- INSERT INTO places (name, provider_type, address, geom)
-- VALUES('Müller Skin Care','SkinCare','Hornthalstraße 40',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [52.507159033097466, 13.331050358840237]
-- }'));
-- INSERT INTO places (name, provider_type, address, geom)
-- VALUES('Waves Hairdresser','Hairdresser','Ob. Sandstraße 18',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [50.126094779199875, 8.6374103999770391]
-- }'));
-- INSERT INTO places (name, provider_type, address, geom)
-- VALUES('Relax Spa','Spa','Am Steinknock 3',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [50.10216411653206, 8.684921977896408]
-- }'));
-- INSERT INTO places (name, provider_type, address, geom)
-- VALUES('Liz Nails','Nails','Kaiserstraße 103',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [50.12594135761815, 8.674249408904629]
-- }'));
-- INSERT INTO places (name, provider_type, address, geom)
-- VALUES('Dr.Jung Skin Care','SkinCare','Lindenstraße 3',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [50.11738611166343, 8.67338418728478]
-- }'));
-- INSERT INTO places (name, provider_type, address, geom)
-- VALUES('Dom Hairdresser','Hairdresser','Geleitstraße 66A', ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [50.10436620907096, 8.66326308181386]
-- }'));
-- INSERT INTO places (name, provider_type, address, geom)
-- VALUES('Pink Nails','Nails','Am Galgenfeld 14',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [50.101723686048246, 8.68300413946384]
-- }'));