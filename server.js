const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./creds');

// add for keroku use
app.use(express.static('public'));

// middleware
app.use(cors());
app.use(express.json());    

// get flight info prefill
app.get('/allFlight', async(req, res)=>{
  try{
    const allDemos = await pool.query(`
SELECT flight_id, a.city as departure_city, b.city as arrival_city, 
a.airport_name AS departure_airport, b.airport_name AS arrival_airport, 
TO_CHAR(scheduled_departure_time, 'MM/DD HH:mm') AS departure_date, 
TO_CHAR(scheduled_arrival_time, 'MM/DD HH:mm') AS arrival_date,
status, departure_gate, arrival_gate, baggage_claim
FROM flight_info 
INNER JOIN airport AS a 
ON flight_info.departure_airport_code=a.airport_code
INNER JOIN airport AS b
ON flight_info.arrival_airport_code=b.airport_code;
`);
    res.json(allDemos.rows);
  } catch(err){
    console.log(err.message);
  }
});

// find a flight info
app.post('/selectedFlight', async(req, res)=>{
  try{
    const {inputData} = req.body;
    const query = `
SELECT flight_id, a.city as departure_city, b.city as arrival_city, 
a.airport_name AS departure_airport, b.airport_name AS arrival_airport, 
TO_CHAR(scheduled_departure_time, 'MM/DD HH:mm') AS departure_date, 
TO_CHAR(scheduled_arrival_time, 'MM/DD HH:mm') AS arrival_date,
status, departure_gate, arrival_gate, baggage_claim
FROM flight_info 
INNER JOIN airport AS a 
ON flight_info.departure_airport_code=a.airport_code
INNER JOIN airport AS b
ON flight_info.arrival_airport_code=b.airport_code
WHERE flight_id='${inputData}';    
    `;
    console.log(query);
    const allDemos = await pool.query(query);
    res.json(allDemos.rows);
  } catch(err){
    console.log(err.message);
  }
});

// find detailed flight
app.post('/detailedFlight1', async(req, res)=>{
  try{
    const {inputData} = req.body;
    const query = `
SELECT flight_info.flight_id, a.city as departure_city, b.city as arrival_city, 
a.airport_name AS departure_airport, b.airport_name AS arrival_airport, 
a.timezone AS departure_timezone, b.timezone as arrival_timezone,
TO_CHAR(scheduled_departure_time, 'MM/DD HH:mm') AS departure_date, 
TO_CHAR(scheduled_arrival_time, 'MM/DD HH:mm') AS arrival_date,
status, departure_gate, arrival_gate, baggage_claim
FROM flight_info 
INNER JOIN airport AS a 
ON flight_info.departure_airport_code=a.airport_code
INNER JOIN airport AS b
ON flight_info.arrival_airport_code=b.airport_code
WHERE flight_id='${inputData}';    
    `;
    console.log(query);
    const allDemos = await pool.query(query);
    res.json(allDemos.rows);
  } catch(err){
    console.log(err.message);
  }
});

app.post('/detailedFlight2', async(req, res)=>{
  try{
    const {inputData} = req.body;
    const query = `
SELECT number_of_empty_seat, arrival_status, reason, accommodation, cost,
wifi_service, food_beverage, movie
FROM flight_summary
INNER JOIN amenities
ON flight_summary.flight_id=amenities.flight_id
WHERE flight_summary.flight_id='${inputData}';    
    `;
    console.log(query);
    const allDemos = await pool.query(query);
    res.json(allDemos.rows);
  } catch(err){
    console.log(err.message);
  }
});

app.post('/detailedFlight3', async(req, res)=>{
  try{
    const {inputData} = req.body;
    const query = `
SELECT c.name, c.crew_id, f.role
FROM crew_assigned_flight AS f
INNER JOIN crew_member AS c
ON f.crew_id=c.crew_id
WHERE flight_id='${inputData}';    
    `;
    console.log(query);
    const allDemos = await pool.query(query);
    res.json(allDemos.rows);
  } catch(err){
    console.log(err.message);
  }
});

// update content for flight
app.post('/updateFlight1', async(req, res)=>{
  try{
    const {departure_time, arrival_time, status, departure_gate, arrival_gate, baggage_claim, flight_id} = req.body;
    if(departure_time == null){
        departure_time = '';
    }
    if(arrival_time == null){
        arrival_time = '';
    }
    if(status == null){
        status = '';
    }
    if(departure_gate == null){
        departure_gate = '';
    }
    if(arrival_gate == null){
        arrival_gate = '';
    }
    if(baggage_claim == null){
        baggage_claim = '';
    }
    const query = `
BEGIN; 
UPDATE flight_info 
SET 
scheduled_departure_time = TO_DATE('${departure_time}', 'MM/DD HH:mm'), 
scheduled_arrival_time = TO_DATE('${arrival_time}', 'MM/DD HH:mm'), 
status = '${status} ',
departure_gate = '${departure_gate}', 
arrival_gate = '${arrival_gate}', 
baggage_claim =' ${baggage_claim}'
WHERE flight_id = '${flight_id}'; 
COMMIT; 
`;
    console.log(query)
    const allDemos = await pool.query(query);
    res.status(200).send('Good');
  } catch(err){
    console.log(err.message);
    res.status(400).send('Bad');
  }
});

app.post('/updateFlight2', async(req, res)=>{
  try{
    const {flight_id, empty_seat, arrival_status, reason, accommodation, cost} = req.body;
    if(empty_seat == null){
        empty_seat = '';
    }
    if(arrival_status == null){
        arrival_status = '';
    }
    if(reason == null){
        reason = '';
    }
    if(accommodation == null){
        accommodation = '';
    }
    if(cost == null){
        cost = '';
    }

    const query = `
BEGIN; 
UPDATE flight_summary
SET 
number_of_empty_seat='${empty_seat}',
arrival_status='${arrival_status}',
reason='${reason}',
accommodation='${accommodation}',
cost='${cost}'
WHERE flight_id='${flight_id}';
COMMIT; 
`;
    console.log(query)
    await pool.query(query);
    res.status(200).send('Good');
  } catch(err){
    console.log(err.message);
    res.status(400).send('Bad');
  }
});

app.post('/updateFlight3', async(req, res)=>{
  try{
    const {flight_id, crew_id, role, name} = req.body;

    if(role == null){
        role = '';
    }
    if(name == null){
        name = '';
    }
    const query = `
BEGIN; 
UPDATE crew_member
SET 
name='${name}'
WHERE  crew_id='${crew_id}';
COMMIT; 
`;
    console.log(query)
    await pool.query(query);
    query = `
BEGIN; 
UPDATE crew_assigned_flight
SET 
role='${role}',
WHERE  crew_id='${crew_id}',
AND flight_id='${flight_id}';
COMMIT; 
`;
    console.log(query)
    await pool.query(query);
    res.status(200).send('Good');
  } catch(err){
    console.log(err.message);
    res.status(400).send('Bad');
  }
});

// get ticket info prefill
app.get('/allTicket', async(req, res)=>{
  try{
    const allDemos = await pool.query(`
SELECT t.ticket_no, t.flight_id, t.passenger_name, t.email, t.phone, a.city as arrival_city, t.checking_status, f.departure_gate,
TO_CHAR(f.scheduled_departure_time, 'MM/DD HH:mm') AS departure_date
FROM ticket AS t
INNER JOIN flight_info AS f
ON t.flight_id=f.flight_id
INNER JOIN airport AS a
ON f.arrival_airport_code=a.airport_code;
`);
    res.json(allDemos.rows);
  } catch(err){
    console.log(err.message);
  }
});


// find a ticket info
app.post('/selectedTicket', async(req, res)=>{
  try{
    const {inputData} = req.body;
    const query = `
SELECT t.ticket_no, t.flight_id, t.passenger_name, t.email, t.phone, a.city as arrival_city, t.checking_status, f.departure_gate,
TO_CHAR(f.scheduled_departure_time, 'MM/DD HH:mm') AS departure_date
FROM ticket AS t
INNER JOIN flight_info AS f
ON t.flight_id=f.flight_id
INNER JOIN airport AS a
ON f.arrival_airport_code=a.airport_code
WHERE t.ticket_no='${inputData}'
;`;
    console.log(query);
    const allDemos = await pool.query(query);
    res.json(allDemos.rows);
  } catch(err){
    console.log(err.message);
  }
});


// update content for ticket
app.post('/updateTicket1', async(req, res)=>{
  try{
    const {ticket_no, passenger_name, email, phone, checking_status} = req.body;

    if(passenger_name == null){
        passenger_name = '';
    }
    if(email == null){
        email = '';
    }
    if(phone == null){
        phone = '';
    }
    if(checking_status == null){
        checking_status = '';
    }

    const query = `
BEGIN; 
UPDATE ticket 
SET
passenger_name='${passenger_name}',
email='${email}',
phone='${phone}',
checking_status='${checking_status}'
WHERE ticket_no='${ticket_no}';
COMMIT; 
`;
    console.log(query)
    const allDemos = await pool.query(query);
    res.status(200).send('Good');
  } catch(err){
    console.log(err.message);
    res.status(400).send('Bad');
  }
});

// get all current crew info
app.get('/allCrew', async(req, res)=>{
  try{
    const allDemos = await pool.query(`
SELECT * FROM crew_member;
`);
    res.json(allDemos.rows);
  } catch(err){
    console.log(err.message);
  }
});

// find a crew info
app.post('/selectedCrew', async(req, res)=>{
  try{
    const {inputData} = req.body;
    const query = `
SELECT * FROM crew_member
WHERE crew_id='${inputData}';    
    `;
    const allDemos = await pool.query(query);
    res.json(allDemos.rows);
  } catch(err){
    console.log(err.message);
  }
});

// update content for crew
app.post('/updateCrew1', async(req, res)=>{
  try{
    const {crew_id, name, address, city, state, zip, country, contact} = req.body;

    if(name == null){
        name = '';
    }
    if(address == null){
        address = '';
    }
    if(city == null){
        city = '';
    }
    if(state == null){
        state = '';
    }
    if(zip == null){
        zip = '';
    }
    if(country == null){
        refuel_date = '';
    }
    if(contact == null){
        contact = '';
    }
    const query = `
BEGIN; 
UPDATE crew_member 
SET
name='${name}',
address='${address}',
city='${city}',
state='${state}',
zip='${zip}',
country='${country}',
contact='${contact}'
WHERE crew_id='${crew_id}';
COMMIT; 
`;
    console.log(query)
    const allDemos = await pool.query(query);
    res.status(200).send('Good');
  } catch(err){
    console.log(err.message);
    res.status(400).send('Bad');
  }
});



// find all aircraft info
app.get('/allAircraft', async(req, res)=>{
  try{
    const allDemos = await pool.query(`
SELECT a.aircraft_code, model, range, refuel_id, total_distance_traveled, TO_CHAR(refuel_date, 'MM/DD HH:mm') AS refuel_date, 
r.cost AS refuel_history, maintenance_id, checkstatus, TO_CHAR(date, 'MM/DD HH:mm') as date, m.cost AS maintenance_cost
FROM aircraft_info AS a
INNER JOIN refueling_history AS r
ON a.aircraft_code=r.aircraft_code
INNER JOIN maintenance_history AS m
ON a.aircraft_code=m.aircraft_code;
`);
    res.json(allDemos.rows);
  } catch(err){
    console.log(err.message);
  }
});

// find selected aircraft
app.post('/selectedAircraft', async(req, res)=>{
  try{
    const {inputData} = req.body;
    const query = `
SELECT a.aircraft_code, model, range, refuel_id, total_distance_traveled, TO_CHAR(refuel_date, 'MM/DD HH:mm') AS refuel_date, 
r.cost AS refuel_cost, maintenance_id, checkstatus, TO_CHAR(date, 'MM/DD HH:mm') as date, m.cost AS maintenance_cost
FROM aircraft_info AS a
INNER JOIN refueling_history AS r
ON a.aircraft_code=r.aircraft_code
INNER JOIN maintenance_history AS m
ON a.aircraft_code=m.aircraft_code
WHERE a.aircraft_code='${inputData}';    
    `;
    const allDemos = await pool.query(query);
    res.json(allDemos.rows);
  } catch(err){
    console.log(err.message);
  }
});

// update content for flight
app.post('/updateAircraft1', async(req, res)=>{
  try{
    const {aircraft_code, checkstatus, date, maintenance_cost, maintenance_id, model, range, refuel_date, refuel_cost, refuel_id, total_distance_traveled} = req.body;

    if(checkstatus == null){
        checkstatus = '';
    }
    if(date == null){
        date = '';
    }
    if(maintenance_cost == null){
        maintenance_cost = '';
    }
    if(refuel_cost == null){
        refuel_cost = '';
    }
    if(model == null){
        model = '';
    }
    if(range == null){
        range = '';
    }
    if(refuel_date == null){
        refuel_date = '';
    }
    if(total_distance_traveled == null){
        total_distance_traveled = '';
    }
    const query = `
BEGIN; 
UPDATE aircraft_info 
SET 
model='${model}',
range='${range}'
WHERE aircraft_code='${aircraft_code}';

UPDATE refueling_history
SET 
total_distance_traveled='${total_distance_traveled}',
refuel_date=TO_DATE('${refuel_date}', 'MM/DD HH:mm'),
cost='${refuel_cost}'
WHERE refuel_id='${refuel_id}';

UPDATE maintenance_history
SET 
checkstatus='${checkstatus}',
date=TO_DATE('${date}', 'MM/DD HH:mm'),
cost='${maintenance_cost}'
WHERE maintenance_id='${maintenance_id}';

COMMIT; 
`;
    console.log(query)
    const allDemos = await pool.query(query);
    res.status(200).send('Good');
  } catch(err){
    console.log(err.message);
    res.status(400).send('Bad');
  }
});


const port = process.env.PORT || 5000;
app.listen(port, ()=>{
  console.log(`server has started on port ${port}`);
});