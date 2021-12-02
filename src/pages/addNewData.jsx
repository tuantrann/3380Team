import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Container, Flex } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { NavBar } from '../components/navBar/NavBar';
import { Button } from '@chakra-ui/button';

export const AddNewData = (props) => {

    const [aircraft_code, setAircraftCode] = useState('')
    const [refuel_id, setRefuelId] = useState('')
    const [maintenance_id, setMaintenanceId] = useState('')
    const [checkstatus, setCheckStatus] = useState('')
    const [date, setDate] = useState('')
    const [maintenance_cost, setMaintenanceCost] = useState('')
    const [model, setModel] = useState('')
    const [range, setRange] = useState('')
    const [refuel_date, setRefuelDate] = useState('')
    const [ refuel_cost, setRefuelCost] = useState('')
    const [total_distance_traveled, setDistanceTravel] = useState('')
    const [flight_id, setFlightId] = useState('')
    const [scheduled_departure_time , setDepartureDate] = useState('')
    const [scheduled_arrival_time	 , setArrivalDate] = useState('')
    const [departure_airport_code, setDepartureAirportCode] = useState('')
    const [arrival_airport_code, setArrivalAirportCode] = useState('')
    const [status, setStatus] = useState('')
    const [departure_gate, setDepartureGate] = useState('')
    const [arrival_gate, setArrivalGate] = useState('')
    const [baggage_claim, setBaggageClaim] = useState('')
    const [accommodation, setAccommodation] = useState('')
    const [arrival_status, setArrivalStatus] = useState('')
    const [cost, setCost] = useState('')
    const [food_beverage, setFoodBeverage] = useState()
    const [movie, setMovie] = useState('')
    const [number_of_empty_seat, setEmptySeat] = useState('')
    const [reason, setReason] = useState('')
    const [wifi_service, setWifiService] = useState('')

    const [arrival_airport_name, setArrivalAirportName] = useState('')
    const [departure_airport_name, setDepartureAirportName] = useState('')
    const [arrival_city, setArrivalCity] = useState('')
    const [departure_city, setDepartureCity] = useState('')
    const [arrival_timezone, setArrivalTimezone] = useState('')
    const [departure_timezone, setDEpartureTimezone] = useState('')

    const [data, setData] = useState();
    
    useEffect(() => {
        fetchData()
    }, [])

    // getting all the ids to make sure it is unique
    const fetchData = async () => {
        let flightInfo = await fetch("http://localhost:5000/getIds");
        let jsonData = await flightInfo.json();

        console.log(jsonData);
        setData(jsonData);
        // setShowData(true);
    }

    const checkingValidCondition = () => {
        let error = '';
        let allAirportCodes = data.airport_code.map(x => x.airport_code)
        let flightId = data.flight_id.map(x=>x.flight_id)
        let aircraftCode = data.aircraft_code.map(x=>x.aircraft_code)
        let refuelId = data.refuel_id.map(x=>x.refuel_id)
        let maintenanceId = data.maintenance_id.map(x=>x.maintenance_id)
        console.log(flight_id)
        console.log(flightId)
        console.log(flightId.indexOf(flight_id))
        if (flightId.indexOf(flight_id) != -1){
            error = 'Flight Number already exists'
        }
        else if (aircraftCode.indexOf(aircraft_code) != -1){
            error = 'Aircraft Code already exists'
        }
        else if (refuelId.indexOf(refuel_id) != -1){
            error = 'Refuel Number already exists'
        }
        else if (maintenanceId.indexOf(maintenance_id) != -1){
            error = 'Maintenance Number already exists'
        }
        else if(allAirportCodes.indexOf(departure_airport_code) == -1){
            error = 'Not a valid departure airport code'
        }
        else if(allAirportCodes.indexOf(arrival_airport_code) == -1){
            error = 'Not a valid arrival airport code'
        }
        return error
    }

    const submitData1 = async () => {

        let error = checkingValidCondition()
        if (error != '')
        {
            alert(error)
            return
        }

        let stat = await fetch("http://localhost:5000/addData1",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
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
            })
        });
        if(stat.status == 200)
        {
            alert('Add successful')
        }
        else{
            alert('Add failed')
        }
    }

    const handleDepartureAirportCode = async(e) =>{
        setDepartureAirportCode(e);
        if(e.length != 3){
            return
        }
        if(e.length != 3){
            return
        }
        let allAirportCodes = data.airport_code.map(x => x.airport_code)
        if(allAirportCodes.indexOf(e) == -1){
            return
        }
        let flightInfo = await fetch("http://localhost:5000/selectedAirport",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                airport_code: e
            })
        });
        let jsonData = await flightInfo.json();
        console.log(jsonData);
        let formatData =jsonData[0];
        setDepartureAirportName(formatData.airport_name)
        setDepartureCity(formatData.city)
        setDEpartureTimezone(formatData.timezone)
        
    }

    const handleArrivalAirportCode = async(e) =>{
        setArrivalAirportCode(e);
        if(e.length != 3){
            return
        }
        let allAirportCodes = data.airport_code.map(x => x.airport_code)
        if(allAirportCodes.indexOf(e) == -1){
            return
        }
        let flightInfo = await fetch("http://localhost:5000/selectedAirport",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({airport_code: e}), 
        });

        let jsonData = await flightInfo.json();
        console.log(jsonData);
        let formatData =jsonData[0];
        setArrivalAirportName(formatData.airport_name)
        setArrivalCity(formatData.city)
        setArrivalTimezone(formatData.timezone)
        
    }

    return(
        <>
        <NavBar />
        <br></br>
        <Flex
            width="100%"
            justifyContent="right"
        >
            <Button
                marginRight="2rem"
                borderRadius="5px"
                onClick={()=>submitData1()}
            >
                Submit
            </Button>
        </Flex>
        
        <Box
            width="100%"
        >
            <Flex
                justifyContent="space-around"
                width="100%"
                padding="2rem 0"
            >
                <Container
                    width="25rem"
                    padding="2rem"
                    border="1px"
                    borderColor="#EBEBEB"
                    borderRadius="5px"
                    boxShadow="10px 10px 17px -13px rgba(0,0,0,0.75)"
                >
                    <FormControl
                        isRequired    
                    >
                        <FormHelperText>Flight Info</FormHelperText>
                        <FormLabel>Flight Number</FormLabel>
                        <Input value={flight_id|| ''} onChange={(e)=>setFlightId(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                        isRequired    
                    >
                        <FormLabel>Aircraft Code</FormLabel>
                        <Input value={aircraft_code|| ''} onChange={(e)=>setAircraftCode(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                        isRequired    
                    >
                        <FormLabel>Departure Time</FormLabel>
                        <Input placeholder="MM/DD HH24:MI" value={scheduled_departure_time|| ''} onChange={(e)=>setDepartureDate(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                        isRequired    
                    >
                        <FormLabel>Arrival Time</FormLabel>
                        <Input placeholder="MM/DD HH24:MI" value={scheduled_arrival_time|| ''} onChange={(e)=>setArrivalDate(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                        isRequired    
                    >
                        <FormLabel>Departure Airport Code</FormLabel>
                        <Input value={departure_airport_code|| ''} onChange={(e)=>handleDepartureAirportCode(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                        isRequired    
                    >
                        <FormLabel>Arrival Airport Code</FormLabel>
                        <Input value={arrival_airport_code|| ''} onChange={(e)=>handleArrivalAirportCode(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                        isRequired    
                    >
                        <FormLabel>Status</FormLabel>
                        <Input value={status|| ''} onChange={(e)=>setStatus(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                    >
                        <FormLabel>Departure Gate</FormLabel>
                        <Input value={departure_gate|| ''} onChange={(e)=>setDepartureGate(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                    >
                        <FormLabel>Arrival Gate</FormLabel>
                        <Input value={arrival_gate|| ''} onChange={(e)=>setArrivalGate(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                    >
                        <FormLabel>Baggage Claim</FormLabel>
                        <Input value={baggage_claim|| ''} onChange={(e)=>setBaggageClaim(e.target.value)}></Input>
                    </FormControl>
                </Container>
                <Container
                    width="25rem"
                    padding="2rem"
                    border="1px"
                    borderColor="#EBEBEB"
                    borderRadius="5px"
                    boxShadow="10px 10px 17px -13px rgba(0,0,0,0.75)"
                >
                    <FormControl
                     isRequired
                    >
                        <FormHelperText>Airport Info</FormHelperText>
                        <FormLabel>Arrival Airport Code</FormLabel>
                        <Input backgroundColor="#E5E2E2" value={arrival_airport_code|| ''} readOnly={true}></Input>
                    </FormControl>
                    <FormControl
                     isRequired
                    >
                        <FormLabel>Arrival Airport Name</FormLabel>
                        <Input backgroundColor="#E5E2E2" value={arrival_airport_name|| ''} readOnly={true}></Input>
                    </FormControl>
                    <FormControl
                     isRequired
                    >
                        <FormLabel>Arrival City</FormLabel>
                        <Input backgroundColor="#E5E2E2" value={arrival_city|| ''} readOnly={true}></Input>
                    </FormControl>
                    <FormControl
                     isRequired
                    >
                        <FormLabel>Arrival Timezone</FormLabel>
                        <Input backgroundColor="#E5E2E2" value={arrival_timezone|| ''} readOnly={true}></Input>
                    </FormControl>
                    <FormControl
                     isRequired
                    >
                        <FormLabel>Departure Airport Code</FormLabel>
                        <Input backgroundColor="#E5E2E2" value={departure_airport_code|| ''} readOnly={true}></Input>
                    </FormControl>
                    <FormControl
                     isRequired
                    >
                        <FormLabel>Departure Airport Name</FormLabel>
                        <Input backgroundColor="#E5E2E2" value={departure_airport_name|| ''} readOnly={true}></Input>
                    </FormControl>
                    <FormControl
                     isRequired
                    >
                        <FormLabel>Departure City</FormLabel>
                        <Input backgroundColor="#E5E2E2" value={departure_city|| ''} readOnly={true}></Input>
                    </FormControl>
                    <FormControl
                     isRequired
                    >
                        <FormLabel>Departure Timezone</FormLabel>
                        <Input backgroundColor="#E5E2E2" value={departure_timezone|| ''} readOnly={true}></Input>
                    </FormControl>
                </Container>
                <Container
                    width="25rem"
                    padding="2rem"
                    border="1px"
                    borderColor="#EBEBEB"
                    borderRadius="5px"
                    boxShadow="10px 10px 17px -13px rgba(0,0,0,0.75)"
                >
                    <FormControl
                        isRequired    
                    >
                        <FormHelperText>Flight Summary</FormHelperText>
                        <FormLabel>Flight Number</FormLabel>
                        <Input backgroundColor="#E5E2E2"  value={flight_id|| ''} readOnly={true}></Input>
                    </FormControl>
                    <FormControl
                    >
                        <FormLabel>Number of empty seats</FormLabel>
                        <Input value={number_of_empty_seat|| ''} onChange={(e)=>setEmptySeat(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                        isRequired    
                    >
                        <FormLabel>Arrival Status</FormLabel>
                        <Input value={arrival_status|| ''} onChange={(e)=>setArrivalStatus(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                    >
                        <FormLabel>Reason</FormLabel>
                        <Input value={reason|| ''} onChange={(e)=>setReason(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                    >
                        <FormLabel>Accommodation</FormLabel>
                        <Input value={accommodation|| ''} onChange={(e)=>setAccommodation(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                    >
                        <FormLabel>Cost</FormLabel>
                        <Input value={cost|| ''} onChange={(e)=>setCost(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                    >
                        <FormLabel>Wifi Service</FormLabel>
                        <Input value={wifi_service|| ''} onChange={(e)=>setWifiService(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                    >
                        <FormLabel>Food Beverage</FormLabel>
                        <Input value={food_beverage|| ''} onChange={(e)=>setFoodBeverage(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                    >
                        <FormLabel>Movie</FormLabel>
                        <Input value={movie || ''} onChange={(e)=>setMovie(e.target.value)}></Input>
                    </FormControl>
                </Container>
            </Flex>
            <Flex>
                <Container
                    width="25rem"
                    padding="2rem"
                    border="1px"
                    borderColor="#EBEBEB"
                    borderRadius="5px"
                    boxShadow="10px 10px 17px -13px rgba(0,0,0,0.75)"
                >
                    <FormControl
                     isRequired
                    >
                        <FormHelperText>Aircraft Info</FormHelperText>
                        <FormLabel>Aircraft Code</FormLabel>
                        <Input backgroundColor="#E5E2E2" value={aircraft_code} readOnly={true}></Input>
                    </FormControl>
                    <FormControl
                    >
                        <FormLabel>Model</FormLabel>
                        <Input value={model} onChange={(e)=>setModel(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                            
                    >
                        <FormLabel>Range</FormLabel>
                        <Input value={range} onChange={(e)=>setRange(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                        isRequired
                    >
                        <FormLabel>Refuel Id</FormLabel>
                        <Input value={refuel_id} onChange={(e)=>setRefuelId(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                        isRequired
                    >
                        <FormLabel>Total Distance Traveled</FormLabel>
                        <Input value={total_distance_traveled} onChange={(e)=>setDistanceTravel(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                    >
                        <FormLabel>Refuel Date</FormLabel>
                        <Input placeholder="MM/DD HH24:MI" value={refuel_date} onChange={(e)=>setRefuelDate(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                    >
                        <FormLabel>Refuel Cost</FormLabel>
                        <Input value={refuel_cost} onChange={(e)=>setRefuelCost(e.target.value)}></Input>
                    </FormControl>
            
                </Container>
                <Container
                    width="25rem"
                    padding="2rem"
                    border="1px"
                    borderColor="#EBEBEB"
                    borderRadius="5px"
                    boxShadow="10px 10px 17px -13px rgba(0,0,0,0.75)"
                >
                    <FormControl
                     isRequired
                    >
                        <FormHelperText>Maintenance Info</FormHelperText>
                        <FormLabel>Aircraft Code</FormLabel>
                        <Input backgroundColor="#E5E2E2" value={aircraft_code} readOnly={true}></Input>
                    </FormControl>
                    <FormControl
                        isRequired
                    >
                        <FormLabel>Maintenance Id</FormLabel>
                        <Input value={maintenance_id} onChange={(e)=>setMaintenanceId(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                        isRequired
                    >
                        <FormLabel>Check Status</FormLabel>
                        <Input value={checkstatus} onChange={(e)=>setCheckStatus(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                        isRequired
                    >
                        <FormLabel>Maintenance Date</FormLabel>
                        <Input placeholder="MM/DD HH24:MI" value={date} onChange={(e)=>setDate(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                    >
                        <FormLabel>Maintenance Cost</FormLabel>
                        <Input value={maintenance_cost} onChange={(e)=>setMaintenanceCost(e.target.value)}></Input>
                    </FormControl>
                    
                </Container>
            </Flex>
        </Box>

      
        </>
    )
}
