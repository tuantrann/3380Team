import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Flex, Link, Text } from '@chakra-ui/layout';
import { transform } from '@chakra-ui/styled-system';
import React from 'react';
import flight from './flight.jpg';
export const  FlightPic= ({home}) => {
    return(
        <Flex
            direction="column"
            justify="center"
            wrap="wrap"
            w="100%"
            height="23rem"
            padding="1rem"
            margin="0rem"
            backgroundImage="url(https://national.janamtv.com/wp-content/uploads/2020/03/special-flight.jpg)"
            backgroundSize="100% 100%"
            backgroundRepeat="no-repeat"
        >
            <Box
                w="50%"
            >
                <Text 
                    color="#F94C59" 
                    fontWeight="bold"
                    fontSize="3rem"    
                >
                Flight Management
                </Text>
                <Text 
                    color="#F94C59" 
                    fontWeight="bold"
                    fontSize="1rem"    
                >
                Team 5 COSC 3380 Prof. Ordonez
                
               
                </Text>
                <a href="https://www.youtube.com/watch?v=l6UZULK_6Ig">
                    <Text>
                     https://www.youtube.com/watch?v=l6UZULK_6Ig
                     </Text>
                </a>
                <br/>
                {home && (<Button
                    borderRadius="5px"
                    height="2rem"
                    backgroundColor="#3AB104"
                    color="white"
                    _hover={{
                        backgroundColor:"#4FDC14",
                        transform:"scale(1.02)"
                    }}
                >
                    <Link href="/flightinfo">
                        Find Flight
                    </Link>
                </Button>)}
            </Box>
        </Flex>
    )
}
