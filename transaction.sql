
BEGIN; 
UPDATE flight_info 
SET 
scheduled_departure_time = TO_DATE('09/02 10:09', 'MM/DD HH24:MI'), 
scheduled_arrival_time = TO_DATE('09/03 07:09', 'MM/DD HH24:MI'), 
status = 'scheduled ',
departure_gate = 'B-4', 
arrival_gate = 'B-1', 
baggage_claim =' 4'
WHERE flight_id = '45274'; 
COMMIT; 

BEGIN; 
UPDATE crew_member 
SET
name='Andrew Candy',
address='963 Sachs Alley',
city='Boston',
state='Massachusetts',
zip='95180',
country='United States',
contact='617-700-0897'
WHERE crew_id='JFX-011';
COMMIT; 

BEGIN; 
UPDATE aircraft_info 
SET 
model='Boeing 737-300',
range='2612'
WHERE aircraft_code='QE2802';

UPDATE refueling_history
SET 
total_distance_traveled='8781',
refuel_date=TO_DATE('09/19 12:09', 'MM/DD HH24:MI'),
cost='17298.57'
WHERE refuel_id='610658187';

UPDATE maintenance_history
SET 
checkstatus='D',
date=TO_DATE('12/16 10:12', 'MM/DD HH24:MI'),
cost='19800'
WHERE maintenance_id='D-762142';

COMMIT; 

BEGIN
INSERT INTO refueling_history(refuel_id, aircraft_code, total_distance_traveled, refuel_date, cost)
VALUES ('123456789', '54321', '1234', TO_DATE('', 'MM/DD HH24:MI'), null);
INSERT INTO refueling_history(refuel_id, aircraft_code, total_distance_traveled, refuel_date, cost)
VALUES ('123456789', '54321', '1234', TO_DATE('', 'MM/DD HH24:MI'), null);
COMMIT
BEGIN; 
INSERT INTO aircraft_info(aircraft_code, model, range)
VALUES ('54321','QT2314', '1234' );
INSERT INTO refueling_history(refuel_id, aircraft_code, total_distance_traveled, refuel_date, cost)
VALUES ('123456789', '54321', '1234', TO_DATE('', 'MM/DD HH24:MI'), null);
INSERT INTO maintenance_history(maintenance_id, aircraft_code, checkstatus, date, cost)
VALUES ('A-123456', '54321', 'A', TO_DATE('11/02 22:01', 'MM/DD HH24:MI'), null);
INSERT INTO flight_info(flight_id, aircraft_code, scheduled_departure_time, scheduled_arrival_time, departure_airport_code, arrival_airport_code, status, departure_gate, arrival_gate, baggage_claim)
VALUES('12345', '54321', TO_DATE('11/02 11:02', 'MM/DD HH24:MI'), TO_DATE('11/03 22:04', 'MM/DD HH24:MI'), 'CAN', 'ATL', 'scheduled', 'G-1', 'G-3', '2');
INSERT INTO flight_summary(flight_id, number_of_empty_seat, arrival_status, reason, accommodation, cost)
VALUES('12345', '24', 'on time', '', '', 200.14);
INSERT INTO amenities(flight_id, wifi_service, food_beverage, movie)
VALUES('12345', 'Y', 'Y', 'Y');
COMMIT; 

SELECT flight_info.flight_id, a.city as departure_city, b.city as arrival_city, 
a.airport_name AS departure_airport, b.airport_name AS arrival_airport, 
TO_CHAR(scheduled_departure_time, 'MM/DD HH24:MI') AS departure_date, 
TO_CHAR(scheduled_arrival_time, 'MM/DD HH24:MI') AS arrival_date,
status, departure_gate, arrival_gate, baggage_claim
FROM flight_info 
INNER JOIN airport AS a 
ON flight_info.departure_airport_code=a.airport_code
INNER JOIN airport AS b
ON flight_info.arrival_airport_code=b.airport_code

 WHERE flight_id = '123' ;
SELECT flight_info.flight_id, a.city as departure_city, b.city as arrival_city, 
a.airport_name AS departure_airport, b.airport_name AS arrival_airport, 
TO_CHAR(scheduled_departure_time, 'MM/DD HH24:MI') AS departure_date, 
TO_CHAR(scheduled_arrival_time, 'MM/DD HH24:MI') AS arrival_date,
status, departure_gate, arrival_gate, baggage_claim
FROM flight_info 
INNER JOIN airport AS a 
ON flight_info.departure_airport_code=a.airport_code
INNER JOIN airport AS b
ON flight_info.arrival_airport_code=b.airport_code

 WHERE flight_id = '123' ;
SELECT flight_info.flight_id, a.city as departure_city, b.city as arrival_city, 
a.airport_name AS departure_airport, b.airport_name AS arrival_airport, 
TO_CHAR(scheduled_departure_time, 'MM/DD HH24:MI') AS departure_date, 
TO_CHAR(scheduled_arrival_time, 'MM/DD HH24:MI') AS arrival_date,
status, departure_gate, arrival_gate, baggage_claim
FROM flight_info 
INNER JOIN airport AS a 
ON flight_info.departure_airport_code=a.airport_code
INNER JOIN airport AS b
ON flight_info.arrival_airport_code=b.airport_code

 WHERE flight_id = '123456' ;
SELECT flight_info.flight_id, a.city as departure_city, b.city as arrival_city, 
a.airport_name AS departure_airport, b.airport_name AS arrival_airport, 
TO_CHAR(scheduled_departure_time, 'MM/DD HH24:MI') AS departure_date, 
TO_CHAR(scheduled_arrival_time, 'MM/DD HH24:MI') AS arrival_date,
status, departure_gate, arrival_gate, baggage_claim
FROM flight_info 
INNER JOIN airport AS a 
ON flight_info.departure_airport_code=a.airport_code
INNER JOIN airport AS b
ON flight_info.arrival_airport_code=b.airport_code

 WHERE  aircraft_code = 'ZP7685' AND flight_id = '39648' ;
SELECT flight_info.flight_id, a.city as departure_city, b.city as arrival_city, 
a.airport_name AS departure_airport, b.airport_name AS arrival_airport, 
TO_CHAR(scheduled_departure_time, 'MM/DD HH24:MI') AS departure_date, 
TO_CHAR(scheduled_arrival_time, 'MM/DD HH24:MI') AS arrival_date,
status, departure_gate, arrival_gate, baggage_claim
FROM flight_info 
INNER JOIN airport AS a 
ON flight_info.departure_airport_code=a.airport_code
INNER JOIN airport AS b
ON flight_info.arrival_airport_code=b.airport_code

 WHERE DATE(scheduled_departure_time) = TO_DATE('09/01', 'MM/DD') ;
SELECT flight_info.flight_id, a.city as departure_city, b.city as arrival_city, 
a.airport_name AS departure_airport, b.airport_name AS arrival_airport, 
TO_CHAR(scheduled_departure_time, 'MM/DD HH24:MI') AS departure_date, 
TO_CHAR(scheduled_arrival_time, 'MM/DD HH24:MI') AS arrival_date,
status, departure_gate, arrival_gate, baggage_claim
FROM flight_info 
INNER JOIN airport AS a 
ON flight_info.departure_airport_code=a.airport_code
INNER JOIN airport AS b
ON flight_info.arrival_airport_code=b.airport_code

 WHERE DATE(scheduled_departure_time) = TO_DATE('09/01', 'MM/DD') ;
SELECT flight_info.flight_id, a.city as departure_city, b.city as arrival_city, 
a.airport_name AS departure_airport, b.airport_name AS arrival_airport, 
TO_CHAR(scheduled_departure_time, 'MM/DD HH24:MI') AS departure_date, 
TO_CHAR(scheduled_arrival_time, 'MM/DD HH24:MI') AS arrival_date,
status, departure_gate, arrival_gate, baggage_claim
FROM flight_info 
INNER JOIN airport AS a 
ON flight_info.departure_airport_code=a.airport_code
INNER JOIN airport AS b
ON flight_info.arrival_airport_code=b.airport_code

 WHERE DATE(scheduled_departure_time) = TO_DATE('09/26', 'MM/DD') ;
SELECT flight_info.flight_id, a.city as departure_city, b.city as arrival_city, 
a.airport_name AS departure_airport, b.airport_name AS arrival_airport, 
TO_CHAR(scheduled_departure_time, 'MM/DD HH24:MI') AS departure_date, 
TO_CHAR(scheduled_arrival_time, 'MM/DD HH24:MI') AS arrival_date,
status, departure_gate, arrival_gate, baggage_claim
FROM flight_info 
INNER JOIN airport AS a 
ON flight_info.departure_airport_code=a.airport_code
INNER JOIN airport AS b
ON flight_info.arrival_airport_code=b.airport_code

 WHERE DATE(scheduled_departure_time) = TO_DATE('09/26', 'MM/DD') ;
SELECT flight_info.flight_id, a.city as departure_city, b.city as arrival_city, 
a.airport_name AS departure_airport, b.airport_name AS arrival_airport, 
TO_CHAR(scheduled_departure_time, 'MM/DD HH24:MI') AS departure_date, 
TO_CHAR(scheduled_arrival_time, 'MM/DD HH24:MI') AS arrival_date,
status, departure_gate, arrival_gate, baggage_claim
FROM flight_info 
INNER JOIN airport AS a 
ON flight_info.departure_airport_code=a.airport_code
INNER JOIN airport AS b
ON flight_info.arrival_airport_code=b.airport_code

 WHERE TO_CHAR(scheduled_departure_time, 'MM/DD') = '10/15' ;
SELECT flight_info.flight_id, a.city as departure_city, b.city as arrival_city, 
a.airport_name AS departure_airport, b.airport_name AS arrival_airport, 
TO_CHAR(scheduled_departure_time, 'MM/DD HH24:MI') AS departure_date, 
TO_CHAR(scheduled_arrival_time, 'MM/DD HH24:MI') AS arrival_date,
status, departure_gate, arrival_gate, baggage_claim
FROM flight_info 
INNER JOIN airport AS a 
ON flight_info.departure_airport_code=a.airport_code
INNER JOIN airport AS b
ON flight_info.arrival_airport_code=b.airport_code

 WHERE TO_CHAR(scheduled_departure_time, 'MM/DD') = '10/15' ;
SELECT flight_info.flight_id, a.city as departure_city, b.city as arrival_city, 
a.airport_name AS departure_airport, b.airport_name AS arrival_airport, 
TO_CHAR(scheduled_departure_time, 'MM/DD HH24:MI') AS departure_date, 
TO_CHAR(scheduled_arrival_time, 'MM/DD HH24:MI') AS arrival_date,
status, departure_gate, arrival_gate, baggage_claim
FROM flight_info 
INNER JOIN airport AS a 
ON flight_info.departure_airport_code=a.airport_code
INNER JOIN airport AS b
ON flight_info.arrival_airport_code=b.airport_code

 WHERE status = 'arrived' ;