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
            w="100%"
        >
            <Text color="red">
            Team 5
            <br/>
            Flight Management
            </Text>
        </Flex>
    )
}
