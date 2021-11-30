import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Container, Flex } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavBar } from '../components/navBar/NavBar';
import { AiTwotoneEdit } from "react-icons/ai";
import { Button } from '@chakra-ui/button';

export const CrewDetail = (props) => {
    
    const [data1, setData1] = useState()

    const [showData, setShowData] = useState(false)
    const [readOnly1, setReadOnly1] = useState(true)

    const [name, setName] = useState()
    const [address, setAddress] = useState()
    const [city, setCity] = useState()
    const [state, setState] = useState()
    const [zip, setZip] = useState()
    const [country, setCountry] = useState()
    const [contact, setContact] = useState()

    const {id} = useParams();

    const setUpData = (data1) => {
        setName(data1.name)
        setAddress(data1.address)
        setCity(data1.city)
        setState(data1.state)
        setZip(data1.zip)
        setCountry(data1.country)
        setContact(data1.contact)
    }


    async function getFlightInfo (){
        let flightInfo = await fetch("http://localhost:5000/selectedCrew",{
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
        let stat = await fetch("http://localhost:5000/updateCrew1",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                crew_id:data1.crew_id,
                name,
                address,
                city,
                state,
                zip,
                country,
                contact
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
                        id="crew_info" 
                        width="25rem"
                        padding="1rem"
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
                            onClick={()=>setReadOnly1(!readOnly1)}></AiTwotoneEdit>
                        </Flex>
                        <FormLabel>Crew Id</FormLabel>
                        <Input 
                            backgroundColor="#E5E2E2" 
                            value={data1.crew_id  || ''} 
                            readOnly={true}
                            
                        ></Input>
                        <FormLabel>Crew Name</FormLabel>
                        <Input value={name  || ''} onChange={(event) => setName(event.target.value)} readOnly={readOnly1}></Input>
                        <FormLabel>Address</FormLabel>
                        <Input value={address  || ''} onChange={(event) => setAddress(event.target.value)} readOnly={readOnly1}></Input>
                        <FormLabel>City</FormLabel>
                        <Input value={city  || ''} onChange={(event) => setCity(event.target.value)} readOnly={readOnly1}></Input>
                        <FormLabel>State </FormLabel>
                        <Input value={state  || ''} onChange={(event) => setState(event.target.value)} readOnly={readOnly1}></Input>
                        <FormLabel>Zipcode</FormLabel>
                        <Input value={zip  || ''} onChange={(event) => setZip(event.target.value)} readOnly={readOnly1}></Input>
                        
                        <FormLabel>Country</FormLabel>
                        <Input value={country  || ''} onChange={(event) => setCountry(event.target.value)} readOnly={readOnly1}></Input>
                        <FormLabel>Contact </FormLabel>
                        <Input value={contact  || ''} onChange={(event) => setContact(event.target.value)} readOnly={readOnly1}></Input>
                      
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