import React from "react"
import { Box, Image } from "@chakra-ui/react"
import logo from "./logo.jpg";
export default function Logo(props) {
  return (
    <Box {...props}>
        <Image 
        src={logo} 
        alt="Logo "
        boxSize="150px"
        objectFit="cover"    
    />
    </Box>
  )
}
