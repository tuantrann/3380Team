


SELECT flight_id, a.city as departure_city, b.city as arrival_city, 
a.airport_name AS departure_airport, b.airport_name AS arrival_airport, 
TO_CHAR(scheduled_departure_time, 'MM/DD HH24:MI') AS departure_date, 
TO_CHAR(scheduled_arrival_time, 'MM/DD HH24:MI') AS arrival_date,
status, departure_gate, arrival_gate, baggage_claim
FROM flight_info 
INNER JOIN airport AS a 
ON flight_info.departure_airport_code=a.airport_code
INNER JOIN airport AS b
ON flight_info.arrival_airport_code=b.airport_code;

SELECT flight_info.flight_id, a.city as departure_city, b.city as arrival_city, 
a.airport_name AS departure_airport, b.airport_name AS arrival_airport, 
a.timezone AS departure_timezone, b.timezone as arrival_timezone,
TO_CHAR(scheduled_departure_time, 'MM/DD HH24:MI') AS departure_date, 
TO_CHAR(scheduled_arrival_time, 'MM/DD HH24:MI') AS arrival_date,
status, departure_gate, arrival_gate, baggage_claim
FROM flight_info 
INNER JOIN airport AS a 
ON flight_info.departure_airport_code=a.airport_code
INNER JOIN airport AS b
ON flight_info.arrival_airport_code=b.airport_code
WHERE flight_id='37908';    
    
SELECT number_of_empty_seat, arrival_status, reason, accommodation, cost,
wifi_service, food_beverage, movie
FROM flight_summary
INNER JOIN amenities
ON flight_summary.flight_id=amenities.flight_id
WHERE flight_summary.flight_id='37908';    
    
SELECT c.name, c.crew_id, f.role
FROM crew_assigned_flight AS f
INNER JOIN crew_member AS c
ON f.crew_id=c.crew_id
WHERE flight_id='37908';    
    
SELECT flight_info.flight_id, a.city as departure_city, b.city as arrival_city, 
a.airport_name AS departure_airport, b.airport_name AS arrival_airport, 
a.timezone AS departure_timezone, b.timezone as arrival_timezone,
TO_CHAR(scheduled_departure_time, 'MM/DD HH24:MI') AS departure_date, 
TO_CHAR(scheduled_arrival_time, 'MM/DD HH24:MI') AS arrival_date,
status, departure_gate, arrival_gate, baggage_claim
FROM flight_info 
INNER JOIN airport AS a 
ON flight_info.departure_airport_code=a.airport_code
INNER JOIN airport AS b
ON flight_info.arrival_airport_code=b.airport_code
WHERE flight_id='37908';    
    
SELECT number_of_empty_seat, arrival_status, reason, accommodation, cost,
wifi_service, food_beverage, movie
FROM flight_summary
INNER JOIN amenities
ON flight_summary.flight_id=amenities.flight_id
WHERE flight_summary.flight_id='37908';    
    
SELECT c.name, c.crew_id, f.role
FROM crew_assigned_flight AS f
INNER JOIN crew_member AS c
ON f.crew_id=c.crew_id
WHERE flight_id='37908';    
    
SELECT a.aircraft_code, model, range, refuel_id, total_distance_traveled, TO_CHAR(refuel_date, 'MM/DD HH24:MI') AS refuel_date, 
r.cost AS refuel_history, maintenance_id, checkstatus, TO_CHAR(date, 'MM/DD HH24:MI') as date, m.cost AS maintenance_cost
FROM aircraft_info AS a
INNER JOIN refueling_history AS r
ON a.aircraft_code=r.aircraft_code
INNER JOIN maintenance_history AS m
ON a.aircraft_code=m.aircraft_code;

SELECT a.aircraft_code, model, range, refuel_id, total_distance_traveled, TO_CHAR(refuel_date, 'MM/DD HH24:MI') AS refuel_date, 
r.cost AS refuel_cost, maintenance_id, checkstatus, TO_CHAR(date, 'MM/DD HH24:MI') as date, m.cost AS maintenance_cost
FROM aircraft_info AS a
INNER JOIN refueling_history AS r
ON a.aircraft_code=r.aircraft_code
INNER JOIN maintenance_history AS m
ON a.aircraft_code=m.aircraft_code
WHERE a.aircraft_code='QV9359';    
    
SELECT t.ticket_no, t.flight_id, t.passenger_name, t.email, t.phone, a.city as arrival_city, t.checking_status, f.departure_gate,
TO_CHAR(f.scheduled_departure_time, 'MM/DD HH24:MI') AS departure_date
FROM ticket AS t
INNER JOIN flight_info AS f
ON t.flight_id=f.flight_id
INNER JOIN airport AS a
ON f.arrival_airport_code=a.airport_code;

SELECT t.ticket_no, t.flight_id, t.passenger_name, t.email, t.phone, a.city as arrival_city, t.checking_status, f.departure_gate,
TO_CHAR(f.scheduled_departure_time, 'MM/DD HH24:MI') AS departure_date
FROM ticket AS t
INNER JOIN flight_info AS f
ON t.flight_id=f.flight_id
INNER JOIN airport AS a
ON f.arrival_airport_code=a.airport_code
WHERE t.ticket_no='14893549'
;
SELECT * FROM crew_member;

SELECT * FROM crew_member
WHERE crew_id='NNI-164';    
    
SELECT flight_id, a.city as departure_city, b.city as arrival_city, 
a.airport_name AS departure_airport, b.airport_name AS arrival_airport, 
TO_CHAR(scheduled_departure_time, 'MM/DD HH24:MI') AS departure_date, 
TO_CHAR(scheduled_arrival_time, 'MM/DD HH24:MI') AS arrival_date,
status, departure_gate, arrival_gate, baggage_claim
FROM flight_info 
INNER JOIN airport AS a 
ON flight_info.departure_airport_code=a.airport_code
INNER JOIN airport AS b
ON flight_info.arrival_airport_code=b.airport_code;

SELECT flight_info.flight_id, a.city as departure_city, b.city as arrival_city, 
a.airport_name AS departure_airport, b.airport_name AS arrival_airport, 
a.timezone AS departure_timezone, b.timezone as arrival_timezone,
TO_CHAR(scheduled_departure_time, 'MM/DD HH24:MI') AS departure_date, 
TO_CHAR(scheduled_arrival_time, 'MM/DD HH24:MI') AS arrival_date,
status, departure_gate, arrival_gate, baggage_claim
FROM flight_info 
INNER JOIN airport AS a 
ON flight_info.departure_airport_code=a.airport_code
INNER JOIN airport AS b
ON flight_info.arrival_airport_code=b.airport_code
WHERE flight_id='24976';    
    
SELECT number_of_empty_seat, arrival_status, reason, accommodation, cost,
wifi_service, food_beverage, movie
FROM flight_summary
INNER JOIN amenities
ON flight_summary.flight_id=amenities.flight_id
WHERE flight_summary.flight_id='24976';    
    
SELECT c.name, c.crew_id, f.role
FROM crew_assigned_flight AS f
INNER JOIN crew_member AS c
ON f.crew_id=c.crew_id
WHERE flight_id='24976';    
    
SELECT flight_id, a.city as departure_city, b.city as arrival_city, 
a.airport_name AS departure_airport, b.airport_name AS arrival_airport, 
TO_CHAR(scheduled_departure_time, 'MM/DD HH24:MI') AS departure_date, 
TO_CHAR(scheduled_arrival_time, 'MM/DD HH24:MI') AS arrival_date,
status, departure_gate, arrival_gate, baggage_claim
FROM flight_info 
INNER JOIN airport AS a 
ON flight_info.departure_airport_code=a.airport_code
INNER JOIN airport AS b
ON flight_info.arrival_airport_code=b.airport_code;

SELECT flight_id, a.city as departure_city, b.city as arrival_city, 
a.airport_name AS departure_airport, b.airport_name AS arrival_airport, 
TO_CHAR(scheduled_departure_time, 'MM/DD HH24:MI') AS departure_date, 
TO_CHAR(scheduled_arrival_time, 'MM/DD HH24:MI') AS arrival_date,
status, departure_gate, arrival_gate, baggage_claim
FROM flight_info 
INNER JOIN airport AS a 
ON flight_info.departure_airport_code=a.airport_code
INNER JOIN airport AS b
ON flight_info.arrival_airport_code=b.airport_code
WHERE flight_id='24976';    
    
SELECT flight_info.flight_id, a.city as departure_city, b.city as arrival_city, 
a.airport_name AS departure_airport, b.airport_name AS arrival_airport, 
a.timezone AS departure_timezone, b.timezone as arrival_timezone,
TO_CHAR(scheduled_departure_time, 'MM/DD HH24:MI') AS departure_date, 
TO_CHAR(scheduled_arrival_time, 'MM/DD HH24:MI') AS arrival_date,
status, departure_gate, arrival_gate, baggage_claim
FROM flight_info 
INNER JOIN airport AS a 
ON flight_info.departure_airport_code=a.airport_code
INNER JOIN airport AS b
ON flight_info.arrival_airport_code=b.airport_code
WHERE flight_id='24976';    
    
SELECT number_of_empty_seat, arrival_status, reason, accommodation, cost,
wifi_service, food_beverage, movie
FROM flight_summary
INNER JOIN amenities
ON flight_summary.flight_id=amenities.flight_id
WHERE flight_summary.flight_id='24976';    
    
SELECT c.name, c.crew_id, f.role
FROM crew_assigned_flight AS f
INNER JOIN crew_member AS c
ON f.crew_id=c.crew_id
WHERE flight_id='24976';    
    
SELECT flight_id, a.city as departure_city, b.city as arrival_city, 
a.airport_name AS departure_airport, b.airport_name AS arrival_airport, 
TO_CHAR(scheduled_departure_time, 'MM/DD HH24:MI') AS departure_date, 
TO_CHAR(scheduled_arrival_time, 'MM/DD HH24:MI') AS arrival_date,
status, departure_gate, arrival_gate, baggage_claim
FROM flight_info 
INNER JOIN airport AS a 
ON flight_info.departure_airport_code=a.airport_code
INNER JOIN airport AS b
ON flight_info.arrival_airport_code=b.airport_code;

SELECT a.aircraft_code, model, range, refuel_id, total_distance_traveled, TO_CHAR(refuel_date, 'MM/DD HH24:MI') AS refuel_date, 
r.cost AS refuel_history, maintenance_id, checkstatus, TO_CHAR(date, 'MM/DD HH24:MI') as date, m.cost AS maintenance_cost
FROM aircraft_info AS a
INNER JOIN refueling_history AS r
ON a.aircraft_code=r.aircraft_code
INNER JOIN maintenance_history AS m
ON a.aircraft_code=m.aircraft_code;

SELECT * FROM crew_member;

SELECT flight_id, a.city as departure_city, b.city as arrival_city, 
a.airport_name AS departure_airport, b.airport_name AS arrival_airport, 
TO_CHAR(scheduled_departure_time, 'MM/DD HH24:MI') AS departure_date, 
TO_CHAR(scheduled_arrival_time, 'MM/DD HH24:MI') AS arrival_date,
status, departure_gate, arrival_gate, baggage_claim
FROM flight_info 
INNER JOIN airport AS a 
ON flight_info.departure_airport_code=a.airport_code
INNER JOIN airport AS b
ON flight_info.arrival_airport_code=b.airport_code;

SELECT a.aircraft_code, model, range, refuel_id, total_distance_traveled, TO_CHAR(refuel_date, 'MM/DD HH24:MI') AS refuel_date, 
r.cost AS refuel_history, maintenance_id, checkstatus, TO_CHAR(date, 'MM/DD HH24:MI') as date, m.cost AS maintenance_cost
FROM aircraft_info AS a
INNER JOIN refueling_history AS r
ON a.aircraft_code=r.aircraft_code
INNER JOIN maintenance_history AS m
ON a.aircraft_code=m.aircraft_code;

SELECT * FROM crew_member;

SELECT t.ticket_no, t.flight_id, t.passenger_name, t.email, t.phone, a.city as arrival_city, t.checking_status, f.departure_gate,
TO_CHAR(f.scheduled_departure_time, 'MM/DD HH24:MI') AS departure_date
FROM ticket AS t
INNER JOIN flight_info AS f
ON t.flight_id=f.flight_id
INNER JOIN airport AS a
ON f.arrival_airport_code=a.airport_code;

SELECT flight_id, a.city as departure_city, b.city as arrival_city, 
a.airport_name AS departure_airport, b.airport_name AS arrival_airport, 
TO_CHAR(scheduled_departure_time, 'MM/DD HH24:MI') AS departure_date, 
TO_CHAR(scheduled_arrival_time, 'MM/DD HH24:MI') AS arrival_date,
status, departure_gate, arrival_gate, baggage_claim
FROM flight_info 
INNER JOIN airport AS a 
ON flight_info.departure_airport_code=a.airport_code
INNER JOIN airport AS b
ON flight_info.arrival_airport_code=b.airport_code;

SELECT flight_info.flight_id, a.city as departure_city, b.city as arrival_city, 
a.airport_name AS departure_airport, b.airport_name AS arrival_airport, 
a.timezone AS departure_timezone, b.timezone as arrival_timezone,
TO_CHAR(scheduled_departure_time, 'MM/DD HH24:MI') AS departure_date, 
TO_CHAR(scheduled_arrival_time, 'MM/DD HH24:MI') AS arrival_date,
status, departure_gate, arrival_gate, baggage_claim
FROM flight_info 
INNER JOIN airport AS a 
ON flight_info.departure_airport_code=a.airport_code
INNER JOIN airport AS b
ON flight_info.arrival_airport_code=b.airport_code
WHERE flight_id='45274';    
    
SELECT number_of_empty_seat, arrival_status, reason, accommodation, cost,
wifi_service, food_beverage, movie
FROM flight_summary
INNER JOIN amenities
ON flight_summary.flight_id=amenities.flight_id
WHERE flight_summary.flight_id='45274';    
    
SELECT c.name, c.crew_id, f.role
FROM crew_assigned_flight AS f
INNER JOIN crew_member AS c
ON f.crew_id=c.crew_id
WHERE flight_id='45274';    
    
SELECT flight_id, a.city as departure_city, b.city as arrival_city, 
a.airport_name AS departure_airport, b.airport_name AS arrival_airport, 
TO_CHAR(scheduled_departure_time, 'MM/DD HH24:MI') AS departure_date, 
TO_CHAR(scheduled_arrival_time, 'MM/DD HH24:MI') AS arrival_date,
status, departure_gate, arrival_gate, baggage_claim
FROM flight_info 
INNER JOIN airport AS a 
ON flight_info.departure_airport_code=a.airport_code
INNER JOIN airport AS b
ON flight_info.arrival_airport_code=b.airport_code;
