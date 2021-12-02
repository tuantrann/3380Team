import { Button } from '@chakra-ui/button';
import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Container, Flex, Text } from '@chakra-ui/layout';
import React, {useState, useEffect } from 'react';
import { ContainerWrap } from './advancedSearchStyling';

export const AdvancedSearchBox = ({setAdvancedSearch}) => {
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
    const [food_beverage, setFoodBeverage] = useState()
    const [movie, setMovie] = useState('')
    const [wifi_service, setWifiService] = useState('')

    const [arrival_city, setArrivalCity] = useState('')
    const [departure_city, setDepartureCity] = useState('')

 
    return(
        <> 
            <ContainerWrap
                zIndex="1"
            >
            <Flex
                width="50%"
                flexDirection="row"
                padding="2rem 0"
                
            >
                <Container
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
                        <Input value={departure_airport_code|| ''} onChange={(e)=>setDepartureAirportCode(e.target.value)}></Input>
                    </FormControl>
                    <FormControl
                        isRequired    
                    >
                        <FormLabel>Arrival Airport Code</FormLabel>
                        <Input value={arrival_airport_code|| ''} onChange={(e)=>setArrivalAirportCode(e.target.value)}></Input>
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
                        <FormLabel>Arrival City</FormLabel>
                        <Input backgroundColor="#E5E2E2" value={arrival_city|| ''} readOnly={true}></Input>
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
                        <FormLabel>Departure City</FormLabel>
                        <Input backgroundColor="#E5E2E2" value={departure_city|| ''} readOnly={true}></Input>
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
                        isRequired    
                    >
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
                        <FormLabel>Maintenance Date</FormLabel>
                        <Input placeholder="MM/DD HH24:MI" value={date} onChange={(e)=>setDate(e.target.value)}></Input>
                    </FormControl>
                   
                    
                </Container>
            </Flex>
            <Button onClick={()=>setAdvancedSearch()}>
                Cancel
            </Button>
            <Button>
                Search
            </Button>
            </ContainerWrap   >

           
        </>
    )
}