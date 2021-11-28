import { Button } from '@chakra-ui/button';
import { Box, Container, Flex, Text } from '@chakra-ui/layout';
import React, { useState } from 'react';
import { extendTheme } from "@chakra-ui/react"
import Filter from './Filter';

const getAllFlight = () => {

}

export const DataTable = () => {

    const [departure, setDeparture] = useState(true)
   
    return (
        <Flex
            marginTop="2rem"
            width="100%"
            minHeight="20rem"
            justifyContent="center"
            
        > 
            <Box
                width="95%"
                boxShadow="0px 9px 55px -19px rgba(0,0,0,0.8)"
                border="2px"
                borderColor="#E0DEDE"
                borderRadius="6px"
                backgroundColor="#fafafa"
            >
                <Flex
                    padding="1rem"
                >
                    <Box
                        marginRight="2rem"
                        onClick={()=>setDeparture(true)}
                        color="#F23232"
                        cursor="pointer"
                        sx={
                            {fontWeight: (departure == true) ? "bold" : "normal"}
                        }
                        backgroundColor="#fafafa"
                    >
                        Departures   
                    </Box>
                    <Box
                        backgroundColor="#fafafa"
                        cursor="pointer"
                        color="#F23232"
                         onClick={()=>setDeparture(false)}
                        sx={
                            {fontWeight: (departure == false) ? "bold" : "normal"}
                        }

                    >
                        Arrivals
                    </Box>
                </Flex>
                <hr/>
                <Flex>
                    <Filter />
                </Flex>
            </Box>
        </Flex>
    )
}