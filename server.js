const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./creds');
const fs = require('fs');
 // add for keroku use
app.use(express.static('public'));

// middleware
app.use(cors());
app.use(express.json());    

const queryFile = 'query.sql';
const transactionFile = 'transaction.sql';

function logQueryFile(query) {

    fs.appendFile(queryFile, query, (err) => {
        // In case of a error throw err.
        if (err) throw err;
    })

}

async function logTransactionFile(query){
    fs.appendFile(transactionFile, query, (err) => {
        // In case of a error throw err.
        if (err) throw err;
    })

}

// get flight info prefill
app.get('/allFlight', async(req, res)=>{
  try{
    const query = `
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
`
    const allDemos = await pool.query(query);
    logQueryFile(query);
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
TO_CHAR(scheduled_departure_time, 'MM/DD HH24:MI') AS departure_date, 
TO_CHAR(scheduled_arrival_time, 'MM/DD HH24:MI') AS arrival_date,
status, departure_gate, arrival_gate, baggage_claim
FROM flight_info 
INNER JOIN airport AS a 
ON flight_info.departure_airport_code=a.airport_code
INNER JOIN airport AS b
ON flight_info.arrival_airport_code=b.airport_code
WHERE flight_id='${inputData}';    
    `;
    //console.log(query);
    logQueryFile(query);
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
TO_CHAR(scheduled_departure_time, 'MM/DD HH24:MI') AS departure_date, 
TO_CHAR(scheduled_arrival_time, 'MM/DD HH24:MI') AS arrival_date,
status, departure_gate, arrival_gate, baggage_claim
FROM flight_info 
INNER JOIN airport AS a 
ON flight_info.departure_airport_code=a.airport_code
INNER JOIN airport AS b
ON flight_info.arrival_airport_code=b.airport_code
WHERE flight_id='${inputData}';    
    `;
    //console.log(query);
    logQueryFile(query);
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
    //console.log(query);
    logQueryFile(query);
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
    //console.log(query);
    logQueryFile(query);
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
scheduled_departure_time = TO_DATE('${departure_time}', 'MM/DD HH24:MI'), 
scheduled_arrival_time = TO_DATE('${arrival_time}', 'MM/DD HH24:MI'), 
status = '${status} ',
departure_gate = '${departure_gate}', 
arrival_gate = '${arrival_gate}', 
baggage_claim =' ${baggage_claim}'
WHERE flight_id = '${flight_id}'; 
`;
    //console.log(query)
    logTransactionFile(query);
    const allDemos = await pool.query(query);
    await pool.query('COMMIT;');
    logTransactionFile('COMMIT;')
    res.status(200).send('Good');
  } catch(err){
    console.log(err.message);
    await pool.query('ROLLBACK;')
    logTransactionFile('ROLLBACK;')
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
`;
    //console.log(query)
    logTransactionFile(query);
    await pool.query(query);
    await pool.query('COMMIT;');
    logTransactionFile('COMMIT;')
    res.status(200).send('Good');
  } catch(err){
    console.log(err.message);
    await pool.query('ROLLBACK;')
    logTransactionFile('ROLLBACK;')
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
`;
    //console.log(query)
    await pool.query(query);
    query = `
UPDATE crew_assigned_flight
SET 
role='${role}',
WHERE  crew_id='${crew_id}',
AND flight_id='${flight_id}';
`;
    //console.log(query)
    logTransactionFile(query);
    await pool.query(query);
    await pool.query('COMMIT;');
    logTransactionFile('COMMIT;')
    res.status(200).send('Good');
  } catch(err){
    console.log(err.message);
    await pool.query('ROLLBACK;')
    logTransactionFile('ROLLBACK;')
    res.status(400).send('Bad');
  }
});

// get ticket info prefill
app.get('/allTicket', async(req, res)=>{
  try{
    const query=`
SELECT t.ticket_no, t.flight_id, t.passenger_name, t.email, t.phone, a.city as arrival_city, t.checking_status, f.departure_gate,
TO_CHAR(f.scheduled_departure_time, 'MM/DD HH24:MI') AS departure_date
FROM ticket AS t
INNER JOIN flight_info AS f
ON t.flight_id=f.flight_id
INNER JOIN airport AS a
ON f.arrival_airport_code=a.airport_code;
`
    const allDemos = await pool.query(query);
    logQueryFile(query);
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
TO_CHAR(f.scheduled_departure_time, 'MM/DD HH24:MI') AS departure_date
FROM ticket AS t
INNER JOIN flight_info AS f
ON t.flight_id=f.flight_id
INNER JOIN airport AS a
ON f.arrival_airport_code=a.airport_code
WHERE t.ticket_no='${inputData}'
;`;
    //console.log(query);
    logQueryFile(query);
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
`;
    //console.log(query)
    logTransactionFile(query);

    const allDemos = await pool.query(query);
    await pool.query('COMMIT;');
    logTransactionFile('COMMIT;')
    res.status(200).send('Good');
  } catch(err){
    console.log(err.message);
    await pool.query('ROLLBACK;')
    logTransactionFile('ROLLBACK;')
    res.status(400).send('Bad');
  }
});

// get all current crew info
app.get('/allCrew', async(req, res)=>{
  try{
    const query = `
SELECT * FROM crew_member;
`
    const allDemos = await pool.query(query);
    logQueryFile(query)
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
    logQueryFile(query)
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
`;
    //console.log(query)
    logTransactionFile(query)
    const allDemos = await pool.query(query);
    await pool.query('COMMIT;');
    logTransactionFile('COMMIT;')
    res.status(200).send('Good');
  } catch(err){
    console.log(err.message);
    await pool.query('ROLLBACK;')
    logTransactionFile('ROLLBACK;')
    res.status(400).send('Bad');
  }
});



// find all aircraft info
app.get('/allAircraft', async(req, res)=>{
  try{
    const query = `
SELECT a.aircraft_code, model, range, refuel_id, total_distance_traveled, TO_CHAR(refuel_date, 'MM/DD HH24:MI') AS refuel_date, 
r.cost AS refuel_history, maintenance_id, checkstatus, TO_CHAR(date, 'MM/DD HH24:MI') as date, m.cost AS maintenance_cost
FROM aircraft_info AS a
INNER JOIN refueling_history AS r
ON a.aircraft_code=r.aircraft_code
INNER JOIN maintenance_history AS m
ON a.aircraft_code=m.aircraft_code;
`
    const allDemos = await pool.query(query);
    logQueryFile(query)
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
SELECT a.aircraft_code, model, range, refuel_id, total_distance_traveled, TO_CHAR(refuel_date, 'MM/DD HH24:MI') AS refuel_date, 
r.cost AS refuel_cost, maintenance_id, checkstatus, TO_CHAR(date, 'MM/DD HH24:MI') as date, m.cost AS maintenance_cost
FROM aircraft_info AS a
INNER JOIN refueling_history AS r
ON a.aircraft_code=r.aircraft_code
INNER JOIN maintenance_history AS m
ON a.aircraft_code=m.aircraft_code
WHERE a.aircraft_code='${inputData}';    
    `;
    const allDemos = await pool.query(query);
    logQueryFile(query)
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
refuel_date=TO_DATE('${refuel_date}', 'MM/DD HH24:MI'),
cost='${refuel_cost}'
WHERE refuel_id='${refuel_id}';

UPDATE maintenance_history
SET 
checkstatus='${checkstatus}',
date=TO_DATE('${date}', 'MM/DD HH24:MI'),
cost='${maintenance_cost}'
WHERE maintenance_id='${maintenance_id}';
`;
    //console.log(query)
    logTransactionFile(query)
    const allDemos = await pool.query(query);
    await pool.query('COMMIT;');
    logTransactionFile('COMMIT;')
    res.status(200).send('Good');
  } catch(err){
    console.log(err.message);
    await pool.query('ROLLBACK;')
    logTransactionFile('ROLLBACK;')
    res.status(400).send('Bad');
  }
});


app.get('/getIds', async (req, res) => {
    try{
        const query1 = `
SELECT flight_id FROM flight_info;
        `
        const query2 = `
SELECT aircraft_code FROM aircraft_info;
        `
        const query3 = `
SELECT airport_code,city FROM airport;
        `
        const query4 = `
SELECT refuel_id FROM refueling_history;
        `
        const query5 = `
SELECT maintenance_id FROM maintenance_history;
        `
        let result = {
            flight_id: [],
            aircraft_code: [],
            airport_code: [],
            refuel_id: [],
            maintenance_id: []
        }
        logQueryFile(query1)
        logQueryFile(query2)
        logQueryFile(query3)
        logQueryFile(query4)
        logQueryFile(query5)
        let temp = await pool.query(query1);
        result.flight_id = temp.rows;
        temp = await pool.query(query2);
        result.aircraft_code = temp.rows;
        temp =  await pool.query(query3);
        result.airport_code = temp.rows;
        temp =await pool.query(query4);
        result.refuel_id = temp.rows;
        temp = await pool.query(query5);
        result.maintenance_id = temp.rows;
        res.status(200).json(result);

    }catch(err){
        res.status(400).send('Bad');
    }
})


app.post('/selectedAirport', async (req, res) => {
    try{
        const {airport_code} = req.body;
        //console.log(airport_code)
        const query1 = `
SELECT * FROM airport
WHERE airport_code='${airport_code}';
    `
        //console.log(query1)
        let temp = await pool.query(query1);
        logQueryFile(query1)
        
        res.status(200).json(temp.rows);

    }catch(err){
        res.send('Bad');
    }
})


// add new  data
app.post('/addData1', async(req, res)=>{
  try{
    let {
        aircraft_code,
        refuel_id,
        maintenance_id,
        checkstatus,
        date,
        maintenance_cost,
        model,
        range,
        refuel_date,
        refuel_cost,
        total_distance_traveled,
        flight_id,
        scheduled_departure_time,
        scheduled_arrival_time,
        departure_airport_code,
        arrival_airport_code,
        status,
        departure_gate,
        arrival_gate,
        baggage_claim,
        accommodation,
        arrival_status,
        cost,
        food_beverage,
        movie,
        number_of_empty_seat,
        reason,
        wifi_service
    } = req.body;

    if (!cost){
        cost = null
    }
    if (!maintenance_cost){
        maintenance_cost = null
    }
    if(!refuel_cost){
        refuel_cost = null
    }

    const query = `
BEGIN; 
INSERT INTO aircraft_info(aircraft_code, model, range)
VALUES ('${aircraft_code}','${model}', '${range}' );
INSERT INTO refueling_history(refuel_id, aircraft_code, total_distance_traveled, refuel_date, cost)
VALUES ('${refuel_id}', '${aircraft_code}', '${total_distance_traveled}', TO_DATE('${refuel_date}', 'MM/DD HH24:MI'), ${refuel_cost});
INSERT INTO maintenance_history(maintenance_id, aircraft_code, checkstatus, date, cost)
VALUES ('${maintenance_id}', '${aircraft_code}', '${checkstatus}', TO_DATE('${date}', 'MM/DD HH24:MI'), ${maintenance_cost});
INSERT INTO flight_info(flight_id, aircraft_code, scheduled_departure_time, scheduled_arrival_time, departure_airport_code, arrival_airport_code, status, departure_gate, arrival_gate, baggage_claim)
VALUES('${flight_id}', '${aircraft_code}', TO_DATE('${scheduled_departure_time}', 'MM/DD HH24:MI'), TO_DATE('${scheduled_arrival_time}', 'MM/DD HH24:MI'), '${departure_airport_code}', '${arrival_airport_code}', '${status}', '${departure_gate}', '${arrival_gate}', '${baggage_claim}');
INSERT INTO flight_summary(flight_id, number_of_empty_seat, arrival_status, reason, accommodation, cost)
VALUES('${flight_id}', '${number_of_empty_seat}', '${arrival_status}', '${reason}', '${accommodation}', ${cost});
INSERT INTO amenities(flight_id, wifi_service, food_beverage, movie)
VALUES('${flight_id}', '${wifi_service}', '${food_beverage}', '${movie}');
`;
    //console.log(query)
    
    const allDemos = await pool.query(query);
    logTransactionFile(query)
    await pool.query('COMMIT;');
    logTransactionFile('COMMIT;')
    res.status(200).send('Good');
  } catch(err){
    console.log(err.message);
    await pool.query('ROLLBACK;')
    logTransactionFile('ROLLBACK;')
    res.status(400).send('Bad');
  }
});


app.post('/advancedSearch', async (req, res) => {
    try{
    const {
        aircraft_code,
        refuel_id,
        maintenance_id,
        date,
        model,
        range,
        refuel_date,
        total_distance_traveled,
        flight_id,
        scheduled_departure_time,
        scheduled_arrival_time,
        departure_airport_code,
        arrival_airport_code,
        status,
        departure_gate,
        baggage_claim,
        arrival_status,
        food_beverage,
        movie,
        wifi_service
    } = req.body;


    var query_string=
`
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

`;

    if(arrival_status){
        query_string += 
        `
INNER JOIN flight_summary
ON flight_info.flight_id= flight_summary.flight_id

        `
    }
    if (wifi_service || food_beverage || movie) {
        query_string += 
`
INNER JOIN amenities
ON flight_info.flight_id=amenities.flight_id
`
    }
    if(model || range){
        query_string += 
        `
INNER JOIN aircraft_info
ON aircraft_info.aircraft_code=flight_info.aircraft_code
        `
    }
    if(total_distance_traveled || refuel_date)
{
    query_string += 

    `
INNER JOIN refueling_history
ON refueling_history.aircraft_code=flight_info.aircraft_code
    `
}
    if(date){

query_string += 
`
INNER JOIN maintenance_history
ON maintenance_history.aircraft_code=flight_info.aircraft_code
`
    }
    query_string += ' WHERE '
    let first = true;
    if(aircraft_code != "" && aircraft_code != " ") //meaning that is the user enter a flight_id, add the filter query otherwise skip and go to the next
    {
        query_string = (query_string + ` aircraft_code = '${aircraft_code}' `)
        first = false;
    }

    if(refuel_id != "" && refuel_id !=" ")
    {
        if(first)
        {
            query_string = query_string + `refuel_id = '${refuel_id}' `
            first = false;
        }

        else
        {
            query_string = query_string + `AND refuel_id = '${refuel_id}' `
        }
    }

    if(maintenance_id != "" && maintenance_id !=" ")
    {
        if(first)
        {
            query_string = query_string + `maintenance_id = '${maintenance_id}' `
            first = false;
        }

        else
        {
            query_string = query_string + `AND maintenance_id = '${maintenance_id}' `
        }
    }

    if(date != "" && date !=" ")
    {
        if(first)
        {
            query_string = query_string + `TO_CHAR(maintenance_history.date, 'MM/DD') = '${date}' `
            first = false;
        }

        else
        {
            query_string = query_string + `AND TO_CHAR(maintenance_history.date, 'MM/DD') = '${date}' `
        }
    }
    if(model != "" && model !=" ")
    {
        if(first)
        {
            query_string = query_string + `model = '${model}' `
            first = false;
        }

        else
        {
            query_string = query_string + `AND model = '${model}' `
        }
    }
    if(range != "" && range !=" ")
    {
        if(first)
        {
            query_string = query_string + `range = '${range}' `
            first = false;
        }

        else
        {
            query_string = query_string + `AND range = '${range}' `
        }
    }
    if(refuel_date != "" && refuel_date !=" ")
    {
        if(first)
        {
            query_string = query_string + `TO_CHAR(refuel_date, 'MM/DD') = '${refuel_date}' `
            first = false;
        }

        else
        {
            query_string = query_string + `AND TO_CHAR(refuel_date, 'MM/DD') = '${refuel_date}' `
        }
    }
    if(total_distance_traveled != "" && total_distance_traveled !=" ")
    {
        if(first)
        {
            query_string = query_string + `total_distance_traveled = '${total_distance_traveled}' `
            first = false;
        }

        else
        {
            query_string = query_string + `AND total_distance_traveled = '${total_distance_traveled}' `
        }
    }
    
    if(flight_id != "" && flight_id !=" ")
    {
        if(first)
        {
            query_string = query_string + `flight_id = '${flight_id}' `
            first = false;
        }

        else
        {
            query_string = query_string + `AND flight_id = '${flight_id}' `
        }
    }
    if(scheduled_departure_time != "" && scheduled_departure_time !=" ")
    {
        if(first)
        {
            query_string = query_string + `TO_CHAR(scheduled_departure_time, 'MM/DD') = '${scheduled_departure_time}' `
            first = false;
        }

        else
        {
            query_string = query_string + `AND TO_CHAR(schedule_departure_time, 'MM/DD') = '${scheduled_departure_time}' `
        }
    }
    if(scheduled_arrival_time != "" && scheduled_arrival_time !=" ")
    {
        if(first)
        {
            query_string = query_string + `TO_CHAR(scheduled_arrival_time, 'MM/DD') = '${scheduled_arrival_time}' `
            first = false;
        }

        else
        {
            query_string = query_string + `AND TO_CHAR(scheduled_arrival_time, 'MM/DD') = '${scheduled_arrival_time}' `
        }
    }
    if(departure_airport_code != "" && departure_airport_code !=" ")
    {
        if(first)
        {
            query_string = query_string + `departure_airport_code = '${departure_airport_code}' `
            first = false;
        }

        else
        {
            query_string = query_string + `AND departure_airport_code = '${departure_airport_code}' `
        }
    }
    if(arrival_airport_code != "" && arrival_airport_code !=" ")
    {
        if(first)
        {
            query_string = query_string + `aarrival_airport_code = '${arrival_airport_code}' `
            first = false;
        }

        else
        {
            query_string = query_string + `AND arrival_airport_code = '${arrival_airport_code}' `
        }
    }
    if(status != "" && status !=" ")
    {
        if(first)
        {
            query_string = query_string + `status = '${status}' `
            first = false;
        }

        else
        {
            query_string = query_string + `AND status = '${status}' `
        }
    }
    if(departure_gate != "" && departure_gate !=" ")
    {
        if(first)
        {
            query_string = query_string + `departure_gate = '${departure_gate}' `
            first = false;
        }

        else
        {
            query_string = query_string + `AND departure_gate = '${departure_gate}' `
        }
    }
    if(baggage_claim != "" && baggage_claim !=" ")
    {
        if(first)
        {
            query_string = query_string + `baggage_claim = '${baggage_claim}' `
            first = false;
        }

        else
        {
            query_string = query_string + `AND baggage_claim = '${baggage_claim}' `
        }
    }
    if(arrival_status != "" && arrival_status !=" ")
    {
        if(first)
        {
            query_string = query_string + `arrival_status = '${arrival_status}' `
            first = false;
        }

        else
        {
            query_string = query_string + `AND arrival_status = '${arrival_status}' `
        }
    }
    if(food_beverage != "" && food_beverage !=" ")
    {
        if(first)
        {
            query_string = query_string + `food_beverage = '${food_beverage}' `
            first = false;
        }

        else
        {
            query_string = query_string + `AND food_beverage = '${food_beverage}' `
        }
    }
    if(movie != "" && movie !=" ")
    {
        if(first)
        {
            query_string = query_string + `movie = '${movie}' `
            first = false;
        }

        else
        {
            query_string = query_string + `AND movie = '${movie}' `
        }
    }
    if(wifi_service != "" && wifi_service !=" ")
    {
        if(first)
        {
            query_string = query_string + `wifi_service = '${wifi_service}' `
            first = false;
        }

        else
        {
            query_string = query_string + `AND wifi_service = '${wifi_service}' `
        }
    }

    query_string = (query_string + ";")

    console.log(query_string)
    
    const allDemos = await pool.query(query_string);
    logTransactionFile(query_string)
    res.status(200).json(allDemos.rows);
  } catch(err){
    console.log(err.message);
    res.status(400).send('Bad');
  }



})


const port = process.env.PORT || 5000;
app.listen(port, ()=>{
  console.log(`server has started on port ${port}`);
});