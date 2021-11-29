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

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
  console.log(`server has started on port ${port}`);
});