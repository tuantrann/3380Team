import React from "react"
import { Box, Image, Link } from "@chakra-ui/react"
import logo from "./logo.jpg";
export default function Logo(props) {
  return (
    <Box {...props}>
        <Link to='/home'>
            <Image 
            src={logo} 
            alt="Logo "
            boxSize="100px"
            objectFit="cover"    
            />
        </Link>
    </Box>
  )
}
