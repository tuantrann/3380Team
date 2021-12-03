import { Box, Flex, Text } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { Label } from 'reactstrap';
import { NavBar } from '../components/navBar/NavBar';

export const SQLPage = () => {
    
    const [data, setData] = useState()
    const [data1, setData1] = useState()
    const [showData, setShowData] = useState()
    const fetchData = async () => {
        let flightInfo = await fetch("http://localhost:5000/getSQLData");
        let jsonData = await flightInfo.json();

        console.log(jsonData);

        let splitData = jsonData[0].split(';');
        setData(splitData);
 
        splitData = jsonData[1].split(';');
        setData1(splitData);
        setShowData(true);
    }

    useEffect(() => {
        fetchData();
    }, []);
    return(
        <>
        <div>
        {showData && 
        <>
        <NavBar />
        <Flex
            width="100%"
            justifyContent="space-evenly"
        >
            <Box
                width="100%"
            >
                <Text
                    fontWeight="bold"
                    fontSize="2rem"
                >
                    Queries
                </Text>
                
                {
                    data.map(splitData => {
                        return (
                            <>
                            <Text
                                fontWeight="bold"
                            >
                                {splitData}
                            </Text>
                            <br/>
                            </>
                        )
                    })
                }
                
            </Box>
            <Box
                width="100%"
            >
                 <Text
                    fontWeight="bold"
                    fontSize="2rem"
                >
                    Transactions
                    </Text>
                <Box
                >
                    {
                    data1.map(splitData => {
                        return (
                            <>
                            <Text
                                fontWeight="bold"
                            >
                                {splitData}
                            </Text>
                            <br/>
                            </>
                        )
                    })
                }
                </Box>
            </Box>
        </Flex>
        </>
        }
        </div>
        </>
    )
}