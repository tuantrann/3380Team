import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import React, { useEffect, useRef, useState } from "react";

export default function Filter(props) {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(undefined)
    const buttonRef = useRef(undefined)
    const modalRef = useRef(undefined)

    useEffect(() => {
        const handleClickOutside = event => {
            const isDropdownClick = dropdownRef.current && dropdownRef.current.contains(event.target)
            const isButtonClick = buttonRef.current && buttonRef.current.contains(event.target)
            const isModalClick = modalRef.current && modalRef.current.contains(event.target)
            if (isDropdownClick || isButtonClick || isModalClick){
                return
            }
            setIsOpen(false);
            document.addEventListener("mousedown", handleClickOutside)
            document.addEventListener("touchstart", handleClickOutside)

            return () => {
                document.removeEventListener("mousedown", handleClickOutside)
                document.removeEventListener("touchstart", handleClickOutside)
            };
        }
       
    }, [dropdownRef, buttonRef, modalRef])

    const handleApply = event => {
        setIsOpen(false);
        onApply(false);
    }

    return (
        <Box
            position="relative"
            display="inline-block"
        >
            <Button
                borderRadius="0.125rem"
                padding="0.5rem 1rem"
                backgroundColor="#2b7de9"
                border="transparent"
                color="white"
                fontWeight="600"
                fontSize="16px"
                lineHeight="1.5"
                _hover={{backgroundColor: "#176dde"}}
                _focus={{
                    outline:"1px dotted",
                    outline:"1px auto --webkit-focus-ring-color"
                }}
                onClick={() => setIsOpen(!isOpen)}
            >
                Airport
            </Button>
            {
                isOpen && (
                    <Box
                        

                    >
                    </Box>
                )
            }
            
        </Box>
    )
}