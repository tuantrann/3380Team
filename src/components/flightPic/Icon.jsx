import React from 'react';
import { IoIosAirplane, IoIosPeople, IoIosSettings } from 'react-icons/io';
import { TiTicket } from "react-icons/ti";
import { MdFlightTakeoff } from "react-icons/md";
import { Box, Flex, Link, SimpleGrid } from '@chakra-ui/layout';

const IconContainer = ({children,where, ...rest}) => {

    return (
        <Flex 
        justifyContent="center"
        border="1px"
        borderColor="grey"
        alignSelf="center"
        padding="1rem"
        {...rest} 
        >
            <Link
                href={where}
                cursor="pointer"
                _hover={{
                    transform:"scale(1.2)",
                    color:"#FC434F"
                }}
            >
            {children}
            </Link>
        </Flex>
    )
}

export const Icons = () => {
    return (
        <>
        <SimpleGrid columns={4} >
            <IconContainer where="/flightinfo" children={<MdFlightTakeoff size={50} />} />
            <IconContainer where="/aircraftinfo" children={<IoIosSettings size={50}/>} />
            <IconContainer where="/crewmember" children={<IoIosPeople size={50}/>} />
            <IconContainer where="/ticket" children={<TiTicket size={50}/>} />
            {/* <IconContainer where="/airport" children={<IoIosAirplane size={50} />} /> */}
        </SimpleGrid>
        </>
    )
}