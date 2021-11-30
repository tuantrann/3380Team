import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Flex } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavBar } from '../components/navBar/NavBar';
import { AiTwotoneEdit } from "react-icons/ai";
import { Button } from '@chakra-ui/button';

export const TicketDetail = (props) => {
    
    const [data1, setData1] = useState()

    const [showData, setShowData] = useState(false)
    const [readOnly1, setReadOnly1] = useState(true)

    const [checking_status, setCheckingStatus] = useState()
    const [email, setEmail] = useState()
    const [passenger_name, setPassengerName] = useState()
    const [phone, setPhone] = useState()

    const {id} = useParams();

    const setUpData = (data1) => {
        setCheckingStatus(data1.checking_status)
        setEmail(data1.email)
        setPassengerName(data1.passenger_name)
        setPhone(data1.phone)
    }


    async function getFlightInfo (){
        let flightInfo = await fetch("http://localhost:5000/selectedTicket",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({inputData: id})
        });
        let jsonData = await flightInfo.json();
        
        console.log(jsonData);
        setUpData(jsonData[0]);
        setData1(jsonData[0]);
        setShowData(true);
    }


    useEffect(() => {
        getFlightInfo();
    }, [])

    const resetData1 = () => {
        setUpData(data1);
    }


    const submitData1 = async () => {
        let stat = await fetch("http://localhost:5000/updateTicket1",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                checking_status,
                email,
                phone,
                passenger_name,
                ticket_no: data1.ticket_no
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
                        id="ticket_info" 
                        width="25rem"
                        padding="1rem"
                        border="1px"
                        borderColor="#EBEBEB"
                        borderRadius="5px"
                        boxShadow="10px 10px 17px -13px rgba(0,0,0,0.75)"

                    >
                        <Flex>
                        <FormHelperText> Ticket Info</FormHelperText>
                         <AiTwotoneEdit 
                            fontSize="2rem"
                            cursor="pointer"
                            onClick={()=>setReadOnly1(!readOnly1)}></AiTwotoneEdit>
                        </Flex>
                        <FormLabel>Ticket Number</FormLabel>
                        <Input 
                            backgroundColor="#E5E2E2" 
                            value={data1.ticket_no  || ''} 
                            readOnly={true}
                            
                        ></Input>
                        <FormLabel>Check Status</FormLabel>
                        <Input value={checking_status  || ''} onChange={(event) => setCheckingStatus(event.target.value)} readOnly={readOnly1}></Input>
                        <FormLabel> Flight Number </FormLabel>
                        <Input backgroundColor="#E5E2E2"  value={data1.flight_id  || ''} readOnly={true}></Input>
                         <FormLabel>Arrival City </FormLabel>
                        <Input backgroundColor="#E5E2E2"  value={data1.arrival_city  || ''} readOnly={true}></Input>
                         <FormLabel> Departure Date </FormLabel>
                        <Input backgroundColor="#E5E2E2"  value={data1.departure_date  || ''} readOnly={true}></Input>
                         <FormLabel> Departure Gate </FormLabel>
                        <Input backgroundColor="#E5E2E2"  value={data1.departure_gate  || ''} readOnly={true}></Input>
                        
                        <FormLabel>Passenger Name</FormLabel>
                        <Input value={passenger_name  || ''} onChange={(event) => setPassengerName(event.target.value)} readOnly={readOnly1}></Input>
                        <FormLabel>Email</FormLabel>
                        <Input value={email  || ''} onChange={(event) => setEmail(event.target.value)} readOnly={readOnly1}></Input>
                        <FormLabel>Phone </FormLabel>
                        <Input value={phone  || ''} onChange={(event) => setPhone(event.target.value)} readOnly={readOnly1}></Input>
                        
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
                </Flex>
                </>
            : <Box> Loading </Box>
        }
        </>
    )
}