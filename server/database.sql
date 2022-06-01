-- CREATE EXTENSION postgis;

-- -- DROP TABLE IF EXISTS password_reset_codes;

-- -- DROP TABLE IF EXISTS profiles;

-- -- DROP TABLE IF EXISTS clientAccounts;

-- -- DROP TABLE IF EXISTS professional_profile;

--  DROP TABLE IF EXISTS appointaments;

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

CREATE TABLE professional_profile (
  id                SERIAL PRIMARY KEY,
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
  category          VARCHAR(255) ,
  slot_date         DATE NOT NULL,
  slot_time         TIME NOT NULL,
  booked            BOOLEAN NOT NULL,
  user_id           INT REFERENCES clientAccounts (id),
  created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO appointaments (professional_id, slot_time, booked) VALUES(

-- INSERT INTO professional_profile (name, type, address, geom) 
-- VALUES('Style 'Hairdresser',''Hairdresser','Kaiserstraße 103',ST_GeomFromGeoJSON('{
--     "type": "Point","coordinates": [52.55645352452395, 13.34283884589511]}'));

-- INSERT INTO professional_profile (name, type, address, geom)
-- VALUES('Feel Good Spa','Spa','Lindenstraße 3', ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates":[52.547483491164655, 13.360670762166222]
-- }'));
-- INSERT INTO professional_profile (name, type, address, geom)
-- VALUES('Beauty Nails','Nails','Geleitstraße 66A',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [52.55207631941123, 13.372343735385341]
-- }'));
-- INSERT INTO professional_profile (name, type, address, geom)
-- VALUES('Pele SkinCare','SkinCare','Königsberger Str, 10',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [52.55437255328931, 13.365563111236]
-- }'));
-- INSERT INTO professional_profile (name, type, address, geom)
-- VALUES('Prettier 'Hairdresser',''Hairdresser','Am Galgenfeld 14',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates":[52.55849503529659, 13.339985566976456]
-- }'));
-- INSERT INTO professional_profile (name, type, address, geom)
-- VALUES('Natur Spa','Spa','Hohe Heide 5',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [52.52679759957386, 13.410701234923646]
-- }'));
-- INSERT INTO professional_profile (name, type, address, geom)
-- VALUES('Red Nails','Nails','Willy-Lessing-Straße 4',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [52.53327222346453, 13.34478326850979]
-- }'));
-- INSERT INTO professional_profile (name, type, address, geom)
-- VALUES('Müller Skin Care','SkinCare','Hornthalstraße 40',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [52.507159033097466, 13.331050358840237]
-- }'));
-- INSERT INTO professional_profile (name, type, address, geom)
-- VALUES('Waves 'Hairdresser',''Hairdresser','Ob. Sandstraße 18',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [50.126094779199875, 8.6374103999770391]
-- }'));
-- INSERT INTO professional_profile (name, type, address, geom)
-- VALUES('Relax Spa','Spa','Am Steinknock 3',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [50.10216411653206, 8.684921977896408]
-- }'));
-- INSERT INTO professional_profile (name, type, address, geom)
-- VALUES('Liz Nails','Nails','Kaiserstraße 103',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [50.12594135761815, 8.674249408904629]
-- }'));
-- INSERT INTO professional_profile (name, type, address, geom)
-- VALUES('Dr.Jung Skin Care','SkinCare','Lindenstraße 3',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [50.11738611166343, 8.67338418728478]
-- }'));
-- INSERT INTO professional_profile (name, type, address, geom)
-- VALUES('Dom 'Hairdresser',''Hairdresser','Geleitstraße 66A', ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [50.10436620907096, 8.66326308181386]
-- }'));

-- INSERT INTO professional_profile (name, type, address, geom)
-- VALUES('Pink Nails','Nails','Am Galgenfeld 14',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [50.101723686048246, 8.68300413946384]
-- }'));

-- INSERT INTO professional_profile (name, type, address, geom)
-- VALUES('Carol Smith Makeup Studio','Makeup','Landwehr 6',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [52.527934315565744, 13.408279489617819]
-- }'));

-- INSERT INTO professional_profile (name, type, address, geom)
-- VALUES('Permanet Makeup Studio','Makeup','Keltergasse 108 ',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [52.53399109382816, 13.400726389357125]
-- }'));

-- INSERT INTO professional_profile (name, type, address, geom)
-- VALUES('Line Eyebrows','Eyebrows','Keltergasse 108 ',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [52.50035497618171, 13.355751110532081]
-- }'));

-- INSERT INTO professional_profile (name, type, address, geom)
-- VALUES('Modern Eyebrows','Eyebrows','Konstanzer Str. 8',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [52.50641337426875, 13.324227326475294]
-- }'));

-- INSERT INTO professional_profile (name, type, address, geom)
-- VALUES('Pit Stop Baber Shop','Barber'','Charlottenstraße 35',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [52.53503310000599, 13.403878201951708]
-- }'));

-- INSERT INTO professional_profile (name, type, address, geom)
-- VALUES('The Baber Shop','Barber'','Charlottenstraße 35',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [52.54213291812395, 13.405938138386443]
-- }'));

-- INSERT INTO professional_profile (name, type, address, geom)
-- VALUES('Frankfurt Makeup Studio','Makeup','Landwehr 6',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [50.10819013906729, 8.724445410005812]
-- }'));

-- INSERT INTO professional_profile (name, type, address, geom)
-- VALUES('Sky Makeup Studio','Makeup','Braubachstraße 25B',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [50.10686900125838, 8.545230940183894]
-- }'));

-- INSERT INTO professional_profile (name, type, address, geom)
-- VALUES('Lashes Eyebrows','Eyebrows','Keltergasse 108 ',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [50.11198480727381, 8.684619503750282]
-- }'));

-- INSERT INTO professional_profile (name, type, address, geom)
-- VALUES('Microblading Eyebrows','Eyebrows','Konstanzer Str. 8',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [50.15335872027074, 8.745730951314082]
-- }'));

-- INSERT INTO professional_profile (name, type, address, geom)
-- VALUES('Classic Baber Shop','Barber'','Charlottenstraße 35',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [50.16699546501194, 8.636554320273135]
-- }'));

-- INSERT INTO professional_profile (name, type, address, geom)
-- VALUES('The Baber Shop','Barber'','Charlottenstraße 35',ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [50.13443679508439, 8.700412349749916]
-- }'));











INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(1,'Haircut','Hairdresser',35,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(1,'Styling','Hairdresser',35,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(1,'dye','Hairdresser',70,'01:00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(1,'Highlights','Hairdresser',150,02:'00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(1,'Hair Treatment','Hairdresser',100,'01:00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(5,'Haircut','Hairdresser',35,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(5,'Styling','Hairdresser',35,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(5,'dye','Hairdresser',70,'01:00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(5,'Highlights','Hairdresser',150,02:'00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(5,'Hair Treatment','Hairdresser',100,'01:00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(9,'Haircut','Hairdresser',35,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(9,'Styling','Hairdresser',35,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(9,'dye','Hairdresser',70,'01:00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(9,'Highlights','Hairdresser',150,02:'00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(9,'Hair Treatment','Hairdresser',100,'01:00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(13,'Haircut','Hairdresser',35,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(13,'Styling','Hairdresser',35,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(13,'dye','Hairdresser',70,'01:00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(13,'Highlights','Hairdresser',150,02:'00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(13,'Hair Treatment','Hairdresser',100,'01:00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(19,'Haircut','Barber',25,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(19,'dye','Barber',75,'01:00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(19,'Hot Shave','Barber',50,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(20,'Haircut','Barber',25,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(20,'dye','Barber',75,'01:00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(20,'Hot Shave','Barber',50,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(25,'Haircut','Barber',25,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(25,'dye','Barber',75,'01:00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(25,'Hot Shave','Barber',50,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(26,'Haircut','Barber',25,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(26,'dye','Barber',75,'01:00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(26,'Hot Shave','Barber',50,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(17,'Eyebrow Microblading','Eyebrows',500,'05:00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(17,'Eyebrow Wax','Eyebrows',50,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(17,'Eyebrow Tinting','Eyebrows',80,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(18,'Eyebrow Microblading','Eyebrows',500,'05:00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(18,'Eyebrow Wax','Eyebrows',50,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(18,'Eyebrow Tinting','Eyebrows',80,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(23,'Eyebrow Microblading','Eyebrows',500,'05:00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(23,'Eyebrow Wax','Eyebrows',50,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(23,'Eyebrow Tinting','Eyebrows',80,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(24,'Eyebrow Microblading','Eyebrows',500,'05:00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(24,'Eyebrow Wax','Eyebrows',50,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(24,'Eyebrow Tinting','Eyebrows',80,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(3,'Manicure','Nails',20,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(3,'Pedicure','Nails',20,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(3,'Acrylic Overlay','Nails',50,'01:00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(3,'Acrylic Overlay Refil','Nails',30,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(7,'Manicure','Nails',20,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(7,'Pedicure','Nails',20,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(7,'Acrylic Overlay','Nails',50,'01:00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(7,'Acrylic Overlay Refil','Nails',30,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(11,'Manicure','Nails',20,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(11,'Pedicure','Nails',20,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(11,'Acrylic Overlay','Nails',50,'01:00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(11,'Acrylic Overlay Refil','Nails',30,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(14,'Manicure','Nails',20,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(14,'Pedicure','Nails',20,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(14,'Acrylic Overlay','Nails',50,'01:00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(14,'Acrylic Overlay Refil','Nails',30,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(4,'Diamond Peeling','SkinCare',100,'01:00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(4,'Botox','SkinCare',500,'01:00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(4,'Deep Cleaning','SkinCare',100,'01:00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(8,'Diamond Peeling','SkinCare',100,'01:00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(8,'Botox','SkinCare',500,'01:00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(8,'Deep Cleaning','SkinCare',100,'01:00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(12,'Diamond Peeling','SkinCare',100,'01:00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(12,'Botox','SkinCare',500,'01:00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(12,'Deep Cleaning','SkinCare',100,'01:00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(2,'Day Spa','Spa',250,'07:00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(2,'Face Massage','Spa',80,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(2,'Body massage','Spa',100,'01:00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(6,'Day Spa','Spa',250,07:'00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(6,'Face Massage','Spa',80,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(6,'Body massage','Spa',100,'01:00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(10,'Day Spa','Spa',250,07:'00:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(10,'Face Massage','Spa',80,'00:30:00');
INSERT INTO services (professional_id, service_name, category, price, duration) VALUES(10,'Body massage','Spa',100,'01:00:00');