import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Box, Container, Flex } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { DataFilter } from '../dataTable/DataFilter';

export const SearchBar = ({type}) => {
    const [placeHolder, setPlaceHolder] = useState();
    const [data, setData] = useState([]);
    const [showData, setShowData] = useState(false);
    const [inputData, setInputData] = useState('');
    const [dataType, setDataType] = useState('');
    useEffect( () => {
        if (type == "flight"){
            setPlaceHolder("Enter flight number")
        }
        else if(type == "crew"){
            setPlaceHolder("Enter crew id")
        }
        else if(type == "aircraft"){
            setPlaceHolder("Enter aircraft id")
        }
        else if(type == "ticket"){
            setPlaceHolder("Enter ticket id")
        }
    }, [])

    const handleChange = async () => {
        if (type == "flight"){
            const response = await fetch("http://localhost:5000/selectedFlight",{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({inputData})
            });
            const jsonData = await response.json();
            console.log(jsonData)
            setData(jsonData);
            setDataType("flight")
            setShowData(true);
            
        }
        else if(type == "crew"){
            const response = await fetch("http://localhost:5000/selectedCrew",{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({inputData})
            });
            const jsonData = await response.json();
            console.log(jsonData)
            setData(jsonData);
            setDataType("crew")
            setShowData(true);
            
        }
        else if(type == "aircraft"){
            const response = await fetch("http://localhost:5000/selectedAircraft",{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({inputData})
            });
            const jsonData = await response.json();
            console.log(jsonData)
            setData(jsonData);
            setDataType("aircraft")
            setShowData(true);
        }
        else if(type == "ticket"){
            const response = await fetch("http://localhost:5000/selectedTicket",{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({inputData})
            });
            const jsonData = await response.json();
            console.log(jsonData)
            setData(jsonData);
            setDataType("ticket");
            setShowData(true);
        }

        
        
    }

    handleChange.bind(this)
    return (
        <>
        <Flex
            justifyContent="space-around"
            alignItems="center"
            backgroundColor="#E75B18"
            height="5rem"

        >  
            <Input
                value={inputData}
                onChange={(event)=>setInputData(event.target.value)}
                borderRadius="10px"
                placeholder={placeHolder}
                backgroundColor="white"
                width="80%"
                padding="1.5rem"
                fontSize="1.5rem"
            >
            </Input>
            <Button
                onClick={() => handleChange()}
                padding="1.5rem"
                backgroundColor="#E75B18"
                border="2px solid"
                _hover={{
                    backgroundColor: "#FA7537"
                }}
            >
                Search 
            </Button>
            <Button
                onClick={() => {setShowData(false); setInputData('');}}
                padding="1.5rem"
                backgroundColor="#E75B18"
                border="2px solid"
                _hover={{
                    backgroundColor: "#FA7537"
                }}
            >
                Clear 
            </Button>
           
        </Flex>
         <Flex marginBottom="4rem">
            {showData ? (<DataFilter type={dataType} data={data}/>) : null}
        </Flex>
        </>
    )
}