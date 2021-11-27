import { Image } from '@chakra-ui/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import flight from './flight.jpg';
export const  FlightPic= (props) => {
    return(
        <Flex
            direction="column"
            align="center"
            justify="center"
            wrap="wrap"
            textAlign="center"
            w="100%"
            height="30rem"
            backgroundImage="url(https://national.janamtv.com/wp-content/uploads/2020/03/special-flight.jpg)"
            backgroundSize="100% 100%"
            backgroundRepeat="no-repeat"
        >
        
            <Text 
                color="red" 
                fontWeight="bold"
                fontSize="3rem"    
            >
            Team 5
            </Text>
             <Text 
                color="red" 
                fontWeight="bold"
                fontSize="3rem"    
            >
            Flight Management
            </Text>
        </Flex>
    )
}
