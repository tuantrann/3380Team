import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Container, Flex } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FlightPic } from '../components/flightPic/flightPic';
import { NavBar } from '../components/navBar/NavBar';
import { AiTwotoneEdit } from "react-icons/ai";
import { Button } from '@chakra-ui/button';
export const FlightDetail = (props) => {
    
    const [data1, setData1] = useState()
    const [data2, setData2] = useState()
    const [data3, setData3] = useState()
    const [showData, setShowData] = useState(false)
    const [readOnly1, setReadOnly1] = useState(true)
    const [readOnly2, setReadOnly2] = useState(true)
    const [readOnly3, setReadOnly3] = useState(true)
    const [departureDate, setDepartureDate] = useState()
    const [arrivalDate, setArrivalDate] = useState()
    const [statusInfo, setStatus] = useState()
    const [departureGate, setDepartureGate] = useState()
    const [arrivalGate, setArrivalGate] = useState()
    const [baggageClaim, setBaggageClaim] = useState()
    const [accommodation, setAccommodation] = useState()
    const [arrivalStatus, setArrivalStatus] = useState()
    const [cost, setCost] = useState()
    const [foodBeverage, setFoodBeverage] = useState()
    const [movie, setMovie] = useState()
    const [emptySeat, setEmptySeat] = useState()
    const [reason, setReason] = useState()
    const [wifiService, setWifiService] = useState()
    const [crewId, setCrewId] = useState()
    const [name, setName] = useState()
    const [role, setRole] = useState()

    const {id} = useParams();

    const setUpData = (data1, data2, data3) => {
        setDepartureDate(data1.departure_date)
        setArrivalDate(data1.arrival_date)
        setStatus(data1.status)
        setDepartureGate(data1.departure_gate)
        setArrivalGate(data1.arrival_gate)
        setBaggageClaim(data1.baggage_claim)

        setAccommodation(data2.accommodation)
        setArrivalStatus(data2.arrival_status)
        setCost(data2.cost)
        setFoodBeverage(data2.food_beverage)
        setMovie(data2.movie)
        setEmptySeat(data2.number_of_empty_seat)
        setReason(data2.reason)
        setWifiService(data2.wifi_service)

        setCrewId(data3.crew_id)
        setName(data3.name)
        setRole(data3.role)
    }

    const setUpData1 = (data1) => {
        setDepartureDate(data1.departure_date)
        setArrivalDate(data1.arrival_date)
        setStatus(data1.status)
        setDepartureGate(data1.departure_gate)
        setArrivalGate(data1.arrival_gate)
        setBaggageClaim(data1.baggage_claim)

    }

    const setUpData2 = (data2) => {
        setAccommodation(data2.accommodation)
        setArrivalStatus(data2.arrival_status)
        setCost(data2.cost)
        setFoodBeverage(data2.food_beverage)
        setMovie(data2.movie)
        setEmptySeat(data2.number_of_empty_seat)
        setReason(data2.reason)
        setWifiService(data2.wifi_service)
    }

    const setUpData3 = (data3) => {
        setCrewId(data3.crew_id)
        setName(data3.name)
        setRole(data3.role)
    }

    async function getFlightInfo (){
        let flightInfo = await fetch("http://localhost:5000/detailedFlight1",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({inputData: id})
        });
        let jsonData = await flightInfo.json();
        
        console.log(jsonData)
        setData1(jsonData[0]);

        let flightSummary = await fetch("http://localhost:5000/detailedFlight2",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({inputData: id})
        });
        let jsonData1 = await flightSummary.json();
        
        console.log(jsonData1)
        setData2(jsonData1[0]);

        let crewInfo = await fetch("http://localhost:5000/detailedFlight3",{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({inputData: id})
            });
        let jsonData2 = await crewInfo.json();
        console.log(jsonData2)
        setData3(jsonData2[0])
        setUpData(jsonData[0], jsonData1[0], jsonData2[0]);
        setShowData(true);
    }


    useEffect(() => {
        getFlightInfo();
    }, [])

    const resetData1 = () => {
        setUpData1(data1);
    }

    const resetData2 = () => {
        setUpData2(data2);
    }

    const resetData3 = () => {
        setUpData3(data3);
    }

    const submitData1 = async () => {
        let stat = await fetch("http://localhost:5000/updateFlight1",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                flight_id: data1.flight_id,
                departure_time: departureDate,
                arrival_time: arrivalDate,
                status: statusInfo,
                departure_gate: departureGate,
                arrival_gate: arrivalGate,
                baggage_claim: baggageClaim
            })
        });
        if(stat.status == 200)
        {
            alert('Update successful')
        }
        else{
            alert('Update failed')
            resetData1();
        }
        setReadOnly1(!readOnly1);
    }

    const submitData2 = async () => {
        let stat = await fetch("http://localhost:5000/updateFlight2",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                flight_id: data1.flight_id,
                empty_seat: emptySeat,
                arrival_status: arrivalStatus,
                reason,
                accommodation,
                cost
            })
        });
        if(stat.status == 200)
        {
            alert('Update successful')
        }
        else{
            alert('Update failed')
            resetData2();
        }
        setReadOnly2(!readOnly2);
    }

    const submitData3 = async () => {
        let stat = await fetch("http://localhost:5000/updateFlight3",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                crew_id: crewId,
                flight_id: data1.flight_id,
                name,
                role
            })
        });
        if(stat.status == 200)
        {
            alert('Update successful')
        }
        else{
            alert('Update failed')
            resetData3()
        }
        setReadOnly3(!readOnly3);
    }

    return(
        <>
        <NavBar />
        { (showData) ? 
                <>
                <Flex
                    width="100%"
                    justifyContent="space-around"
                >
                    <FormControl 
                        id="flight_info" 
                        width="25rem"
                        padding="1rem"
                        border="1px"
                        borderColor="#EBEBEB"
                        borderRadius="5px"
                        boxShadow="10px 10px 17px -13px rgba(0,0,0,0.75)"

                    >
                        <Flex>
                        <FormHelperText> Flight Info</FormHelperText>
                         <AiTwotoneEdit 
                            fontSize="2rem"
                            cursor="pointer"
                            onClick={()=>setReadOnly1(!readOnly1)}></AiTwotoneEdit>
                        </Flex>
                        <FormLabel>Flight Number</FormLabel>
                        <Input 
                            backgroundColor="#E5E2E2" 
                            id="flight_id" 
                            value={data1.flight_id  || ''} 
                            readOnly={true}
                            
                        ></Input>
                        <FormLabel>Departure Date</FormLabel>
                        <Input value={departureDate  || ''} onChange={(event) => setDepartureDate(event.target.value)} readOnly={readOnly1}></Input>
                        <FormLabel>Arrival Date</FormLabel>
                        <Input value={arrivalDate  || ''} onChange={(event) => setArrivalDate(event.target.value)} readOnly={readOnly1}></Input>
                        <FormLabel>Status</FormLabel>
                        <Input value={statusInfo  || ''} onChange={(event) => setStatus(event.target.value)} readOnly={readOnly1}></Input>
                        <FormLabel>Departure Gate</FormLabel>
                        <Input value={departureGate  || ''} onChange={(event) => setDepartureGate(event.target.value)} readOnly={readOnly1}></Input>
                        <FormLabel>Arrival Gate</FormLabel>
                        <Input value={arrivalGate  || ''} onChange={(event) => setArrivalGate(event.target.value)} readOnly={readOnly1}></Input>
                        <FormLabel>Baggage Claim</FormLabel>
                        <Input value={baggageClaim  || ''} onChange={(event) => setBaggageClaim(event.target.value)} readOnly={readOnly1}></Input>
                        {!readOnly1 && 
                        <Flex>
                        <Button 
                            onClick={()=>resetData1()}
                            marginTop="2rem">
                            Reset
                        </Button>
                        <Button 
                            onClick={()=>submitData1()}
                            marginTop="2rem">
                            Submit
                        </Button>
                        </Flex>
                     }
                    </FormControl>
                     <FormControl id="airport_info"  
                        width="25rem"
                        padding="1rem"
                        border="1px"
                        borderColor="#EBEBEB"
                        borderRadius="5px"
                        boxShadow="10px 10px 17px -13px rgba(0,0,0,0.75)"
                     >
                         <FormHelperText> Airport Info</FormHelperText>
                        <FormLabel>Departure City</FormLabel>
                        <Input backgroundColor="#E5E2E2" value={data1.departure_city} readOnly={true}></Input>
                        <FormLabel>Arrival City</FormLabel>
                        <Input backgroundColor="#E5E2E2" value={data1.arrival_city} readOnly={true}></Input>
                        <FormLabel>Departure Timezone</FormLabel>
                        <Input backgroundColor="#E5E2E2" value={data1.departure_timezone} readOnly={true}></Input>
                        <FormLabel>Arrival Timezone</FormLabel>
                        <Input backgroundColor="#E5E2E2" value={data1.arrival_timezone} readOnly={true}></Input>
                    </FormControl>
                     
                </Flex>
                <Flex
                    width="100%"
                    justifyContent="space-around"
                >
                   <FormControl 
                        id="flight_summary" 
                        width="25rem"
                        padding="1rem"
                        border="1px"
                        margin="1rem"
                        borderColor="#EBEBEB"
                        borderRadius="5px"
                        boxShadow="10px 10px 17px -13px rgba(0,0,0,0.75)"
                    >
                        <Flex>
                        <FormHelperText> Flight Summary</FormHelperText>
                         <AiTwotoneEdit 
                            fontSize="2rem"
                            cursor="pointer"
                            onClick={()=>setReadOnly2(!readOnly2)}></AiTwotoneEdit>
                        </Flex>
                        <FormLabel>Accommodation</FormLabel>
                        <Input value={accommodation || ''} onChange={(event) => setAccommodation(event.target.value)} readOnly={readOnly2}></Input>
                        <FormLabel>Arrival Status</FormLabel>
                        <Input value={arrivalStatus  || ''} onChange={(event) => setArrivalStatus(event.target.value)} readOnly={readOnly2}></Input>
                        <FormLabel>Cost</FormLabel>
                        <Input value={cost  || ''} onChange={(event) => setCost(event.target.value)} readOnly={readOnly2}></Input>
                        <FormLabel>Food Beverage</FormLabel>
                        <Input value={foodBeverage  || ''} onChange={(event) => setFoodBeverage(event.target.value)} readOnly={readOnly2}></Input>
                        <FormLabel>Movie</FormLabel>
                        <Input value={movie  || ''} onChange={(event) => setMovie(event.target.value)} readOnly={readOnly2}></Input>
                        <FormLabel>Empty Seat</FormLabel>
                        <Input value={emptySeat || ''} onChange={(event) => setEmptySeat(event.target.value)} readOnly={readOnly2}></Input>
                        <FormLabel>Reason</FormLabel>
                        <Input value={reason || ''} onChange={(event) => setReason(event.target.value)} readOnly={readOnly2}></Input>
                        <FormLabel>Wifi Service</FormLabel>
                        <Input value={wifiService  || ''} onChange={(event) => setWifiService(event.target.value)} readOnly={readOnly2}></Input>
                        {!readOnly2 && 
                        <Flex>
                        <Button 
                            onClick={()=>resetData2()}
                            marginTop="2rem">
                            Reset
                        </Button>
                        <Button 
                            onClick={()=>submitData2()}
                            marginTop="2rem">
                            Submit
                        </Button>
                        </Flex>
                     }
                    
                    </FormControl>
                    <FormControl 
                    id="crew_member"  
                        width="25rem"
                        padding="1rem"
                        margin="1rem"
                        border="1px"
                        borderColor="#EBEBEB"
                        borderRadius="5px"
                        boxShadow="10px 10px 17px -13px rgba(0,0,0,0.75)"

                    >
                        <Flex>
                        <FormHelperText> Crew Info</FormHelperText>
                         <AiTwotoneEdit 
                            fontSize="2rem"
                            cursor="pointer"
                            onClick={()=>setReadOnly3(!readOnly3)}></AiTwotoneEdit>
                        </Flex>
                        <FormLabel>Crew Id</FormLabel>
                        <Input value={crewId  || ''} onChange={(event) => setCrewId(event.target.value)} readOnly={readOnly3}></Input>
                        <FormLabel>Name</FormLabel>
                        <Input value={name  || ''} onChange={(event) => setName(event.target.value)} readOnly={readOnly3}></Input>
                        <FormLabel>Role</FormLabel>
                        <Input value={role  || ''} onChange={(event) => setRole(event.target.value)} readOnly={readOnly3}></Input>
                        {!readOnly3 && 
                        <Flex>
                        <Button 
                            onClick={()=>resetData3()}
                            marginTop="2rem">
                            Reset
                        </Button>
                        <Button 
                            onClick={()=>submitData3()}
                            marginTop="2rem">
                            Submit
                        </Button>
                        </Flex>
                     }
                    </FormControl>
                </Flex>
                </>
            : <Box> Loading </Box>
        }
        </>
    )
}