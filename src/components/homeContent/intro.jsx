import { Image } from '@chakra-ui/image';
import { Box, Container, Flex, Text } from '@chakra-ui/layout';
import React from 'react';

export const Intro = () => {

    return (
        <Flex
            justifyContent="center"
        >
            <Flex
            justifyContent="center"
            flexDirection="column"
            margin="3rem"
            width="40%"
        >
            <Text
                fontSize="0.8rem"
                color="grey"
            >
                FEATURES
            </Text>
            <Text
                fontWeight="bold"
                fontSize="2rem"
            >
                Travel With Confidence
            </Text>
            <br/>

            <Text
                fontSize="1.2rem"
                color="grey"
            >
                Avoid cost and frustration.
                Get up to date date of flight, aircraft, crew, ticket and airport info. 
                Easy to use, keep track of your flight.
                No sign up and fee required.

            </Text>
            <Image
                objectFit="cover"
                src="http://www.pngmart.com/files/4/Travel-PNG-Clipart.png"
                alt="Travel"
                marginTop="3rem"
                marginBottom="3rem"
            >

            </Image>
            <Text
                fontSize="0.8rem"
                color="grey"
            >
                TEAMS
            </Text>
            <Text
                fontWeight="bold"
                fontSize="2rem"
            >
                Built From The Best Team
            </Text>
            <br/>

            <Text
                fontSize="1.2rem"
                color="grey"
            >
                We are a group of 4 students from University of Houston.
                We pride ourselves in always being at the forefront of implementing innovative technology.
                We provide one another with a supportive, enjoyable working environment where we can learn, grow, and succeed both personally and professionally. 

            </Text>
            <Image
                src="http://www.pngall.com/wp-content/uploads/2/Travel-PNG-HD-Image.png"
                alt="Travel 2"
                marginTop="3rem"
                marginBottom="3rem"
            ></Image>
        </Flex>
        </Flex>
    )
}