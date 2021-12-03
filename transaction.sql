
BEGIN; 
UPDATE flight_info 
SET 
scheduled_departure_time = TO_DATE('09/30 12:14', 'MM/DD HH24:MI'), 
scheduled_arrival_time = TO_DATE('09/30 17:57', 'MM/DD HH24:MI'), 
status = 'scheduled ',
departure_gate = 'E-1', 
arrival_gate = 'B-3', 
baggage_claim =' 5'
WHERE flight_id = '37908'; 
COMMIT;
BEGIN; 
UPDATE aircraft_info 
SET 
model='Bombardier CRJ200 Regional Jet',
range='1895'
WHERE aircraft_code='QV9359';

UPDATE refueling_history
SET 
total_distance_traveled='1000',
refuel_date=TO_DATE('10/09 16:01', 'MM/DD HH24:MI'),
cost='589.03'
WHERE refuel_id='38749103';

UPDATE maintenance_history
SET 
checkstatus='A',
date=TO_DATE('11/30 12:32', 'MM/DD HH24:MI'),
cost='14404'
WHERE maintenance_id='A-829735';
COMMIT;
BEGIN; 
UPDATE aircraft_info 
SET 
model='Bombardier CRJ200 Regional Jet',
range='1895'
WHERE aircraft_code='QV9359';

UPDATE refueling_history
SET 
total_distance_traveled='1000',
refuel_date=TO_DATE('10/09 16:01', 'MM/DD HH24:MI'),
cost='589.03'
WHERE refuel_id='38749103';

UPDATE maintenance_history
SET 
checkstatus='A',
date=TO_DATE('11/30 12:3223', 'MM/DD HH24:MI'),
cost='14404'
WHERE maintenance_id='A-829735';
ROLLBACK;
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


INNER JOIN amenities
ON flight_info.flight_id=amenities.flight_id
 WHERE food_beverage = 'Y' AND movie = 'Y' AND wifi_service = 'free' ;