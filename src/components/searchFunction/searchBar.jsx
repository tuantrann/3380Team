import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Container, Flex } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';

export const SearchBar = ({type}) => {
    const [placeHolder, setPlaceHolder] = useState()
    
    useEffect(() => {
        if (type == "flight"){
            setPlaceHolder("Enter flight number")
        }
    }, [])

    return (
        <Flex
            justifyContent="space-around"
            alignItems="center"
            backgroundColor="#E75B18"
            height="5rem"

        >
            <Input
                borderRadius="10px"
                placeholder={placeHolder}
                backgroundColor="white"
                width="80%"
                padding="1.5rem"
                fontSize="1.5rem"
            >
            </Input>
            <Button
                padding="1.5rem"
                backgroundColor="#E75B18"
                border="2px solid"
                _hover={{
                    backgroundColor: "#FA7537"
                }}
            >
                Search All Flight
            </Button>
        </Flex>
    )
}