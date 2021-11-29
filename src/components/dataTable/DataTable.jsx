import { Button } from '@chakra-ui/button';
import { Box, Container, Flex, Text } from '@chakra-ui/layout';
import React, { useEffect, useMemo, useState } from 'react';
import { extendTheme, SimpleGrid } from "@chakra-ui/react"
import Filter from './Filter';
import Table from './tableContainer';
import { FLIGHT_COLUMNS } from './Interfaces/flightColumn';
import { CREW_COLUMNS } from './Interfaces/crewColumns';
import { TICKET_COLUMNS } from './Interfaces/ticketColumns';
import { FLIGHT_DETAIL_COLUMNS } from './Interfaces/flightdetailColumns';


export const DataTable = (props) => {

    const [selectedTechnologies, setSelectedTechnologies] = useState([]);
    const [data, setData] = useState();
    const [showTable, setShowTable] = useState(false);

    useEffect(() => {
        setData(props.data);
        setShowTable(true);
    }, [])

    const handleSelect = technology => {
        const isSelected = selectedTechnologies.includes(technology);

        const newSelection = isSelected
        ? selectedTechnologies.filter(currentTech => currentTech !== technology)
        : [...selectedTechnologies, technology];
        setSelectedTechnologies(newSelection);
    };
    const type = props.type;
    let INTERFACE;
    if(type == "flight")
    {
        INTERFACE = FLIGHT_COLUMNS;
    }
    else if(type == "flight-detail")
    {
        INTERFACE = FLIGHT_DETAIL_COLUMNS;
    }
    else if (type == "crew")
    {
        
        INTERFACE = CREW_COLUMNS;
      
    }
    // else if (type == "aircraft")
    // {
    //     
    //      
    //     
    // }
    else if (type == "ticket")
    {
      
        INTERFACE = TICKET_COLUMNS
   
    }
    const columns = useMemo(
        () => INTERFACE, []
    );
    return (
        <Flex
            width="100%"
            justifyContent="center"
            
        > 
            <Box
                width="95%"
                boxShadow="0px 9px 55px -19px rgba(0,0,0,0.8)"
                border="2px"
                borderColor="#E0DEDE"
                borderRadius="6px"
                backgroundColor="#fafafa"
            >
                
                
                <Flex>
                    {/* <Filter
                        label="Technologies" 
                        onApply={()=> alert(selectedTechnologies)}
                        children={
                            <>
                                {
                                    technologies.map((tech, index) => {
                                        const isSelected = selectedTechnologies.includes(tech);
                
                                        return (
                                            <>
                                            <label 
                                                key={index}>            
                                            </label>
                                            <input
                                                type="checkbox"
                                                checked={isSelected}
                                                onChange={()=>handleSelect(tech)}
                                            ></input>
                                            <span>
                                                {tech}
                                            </span>
                                            </>
                                        )
                                    })
                                }
                            </>
                        }
                        
                    >
                    </Filter> */}
                </Flex>
                <hr/>
                <>
                    {showTable ? <Table columns={columns} data={data} /> : null}
                </>
            </Box>
        </Flex>
    )
}