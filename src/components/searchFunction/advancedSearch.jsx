import { Button } from '@chakra-ui/button';
import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Container, Flex, Text } from '@chakra-ui/layout';
import React, {useState, useEffect } from 'react';
import { ContainerWrap } from './advancedSearchStyling';

export const AdvancedSearchBox = ({setAdvancedSearch, setData, setDataType, setShowData}) => {
    const [aircraft_code, setAircraftCode] = useState('')
    const [refuel_id, setRefuelId] = useState('')
    const [maintenance_id, setMaintenanceId] = useState('')
    const [date, setDate] = useState('')
    const [model, setModel] = useState('')
    const [range, setRange] = useState('')
    const [refuel_date, setRefuelDate] = useState('')
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
    const [arrival_status, setArrivalStatus] = useState('')
    const [food_beverage, setFoodBeverage] = useState('')
    const [movie, setMovie] = useState('')
    const [wifi_service, setWifiService] = useState('')

    
     const handleChange = async () => {
       
        const response = await fetch("http://localhost:5000/advancedSearch",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
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
            })
        });
        const jsonData = await response.json();
        //console.log(jsonData)
        setData(jsonData);
        setDataType("flight")
        setShowData(true);
        setAdvancedSearch(false);
        
    }

    return(
        <> 
            <ContainerWrap
            >
            <Flex
                width="100%"
                flexDirection="row"
                padding="2rem 0"
                
            >
                <Container
                    padding="2rem"
                >
                    <FormControl
                        
                    >
                        <FormHelperText>Flight Info</FormHelperText>
                        <FormLabel>Flight Number</FormLabel>
                        <Input value={flight_id|| ''} onChange={(e)=>setFlightId(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                            
                    >
                        <FormLabel>Aircraft Code</FormLabel>
                        <Input value={aircraft_code|| ''} onChange={(e)=>setAircraftCode(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                            
                    >
                    <FormLabel>Departure Time</FormLabel>
                        <Input placeholder="MM/DD" value={scheduled_departure_time|| ''} onChange={(e)=>setDepartureDate(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                            
                    >
                        <FormLabel>Arrival Time</FormLabel>
                        <Input placeholder="MM/DD" value={scheduled_arrival_time|| ''} onChange={(e)=>setArrivalDate(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                            
                    >
                        <FormLabel>Departure Airport Code</FormLabel>
                        <Input value={departure_airport_code|| ''} onChange={(e)=>setDepartureAirportCode(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                            
                    >
                        <FormLabel>Arrival Airport Code</FormLabel>
                        <Input value={arrival_airport_code|| ''} onChange={(e)=>setArrivalAirportCode(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                            
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
 
                >
  
                    <FormControl
                    >
                        <FormHelperText>Flight Summary</FormHelperText>
                        <FormLabel>Arrival Status</FormLabel>
                        <Input value={arrival_status|| ''} onChange={(e)=>setArrivalStatus(e.target.value)}></Input>
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
          
         
                <Container
                    width="25rem"
                    padding="2rem"
        
                >

                    <FormControl
                    >
                        <FormHelperText>Aircraft Info</FormHelperText>
                        <FormLabel>Model</FormLabel>
                        <Input value={model} onChange={(e)=>setModel(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                            
                    >
                        <FormLabel>Range</FormLabel>
                        <Input value={range} onChange={(e)=>setRange(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                        
                    >
                        <FormLabel>Refuel Id</FormLabel>
                        <Input value={refuel_id} onChange={(e)=>setRefuelId(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                        
                    >
                        <FormLabel>Total Distance Traveled</FormLabel>
                        <Input value={total_distance_traveled} onChange={(e)=>setDistanceTravel(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                    >
                        <FormLabel>Refuel Date</FormLabel>
                        <Input placeholder="MM/DD" value={refuel_date} onChange={(e)=>setRefuelDate(e.target.value)}></Input>
                    </FormControl>
                
            
                </Container>
                <Container
                    width="25rem"
                    padding="2rem"
                >


                    <FormControl
                        
                    >
                        <FormHelperText>Maintenance Info</FormHelperText>
                        <FormLabel>Maintenance Id</FormLabel>
                        <Input value={maintenance_id} onChange={(e)=>setMaintenanceId(e.target.value)}></Input>
                    </FormControl>
                   
                    <FormControl
                        
                    >
                        <FormLabel>Maintenance Date</FormLabel>
                        <Input placeholder="MM/DD" value={date} onChange={(e)=>setDate(e.target.value)}></Input>
                    </FormControl>
                   
                    
                </Container>
            </Flex>
            <Button onClick={()=>setAdvancedSearch()}>
                Cancel
            </Button>
            <Button
                onClick={handleChange}
                margin="2rem"
            >
                Search
            </Button>
            </ContainerWrap   >

           
        </>
    )
}