import React, {useState} from 'react';
import { IoIosAirplane, IoIosPeople, IoIosSettings } from 'react-icons/io';
import { TiTicket } from "react-icons/ti";
import { FlightPic } from '../components/flightPic/flightPic';
import { NavBar } from '../components/navBar/NavBar';
import { Box, Flex, SimpleGrid } from '@chakra-ui/layout';

const Pic = () => {
    return (
       <div>
       <FlightPic />
       </div> 
    )
}

const IconContainer = ({children,...rest}) => {

    return (
        <Box 
        border="2px solid"
        {...rest} 
        >{children}</Box>
    )
}

const Icons = () => {
    return (
        <>
        <SimpleGrid minChildWidth="30rem" spacing="3rem">
            <IconContainer children={<IoIosAirplane/>} />
            <IconContainer children={<IoIosSettings/>} />
            <IconContainer children={<IoIosPeople/>} />
            <IconContainer children={<TiTicket/>} />
        </SimpleGrid>
        </>
    )
}

export const HomePage = (props) => {

    return (
        <div>
            <NavBar />
            <Pic />
            <Icons />
        </div>
    )
}