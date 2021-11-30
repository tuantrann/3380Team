import { Button } from '@chakra-ui/button';
import { Box, Container, Flex, Text } from '@chakra-ui/layout';
import React, { useEffect, useMemo, useState } from 'react';
import Table from './tableContainer';
import { FLIGHT_COLUMNS } from './Interfaces/flightColumn';
import { CREW_COLUMNS } from './Interfaces/crewColumns';
import { TICKET_COLUMNS } from './Interfaces/ticketColumns';
import { FLIGHT_DETAIL_COLUMNS } from './Interfaces/flightdetailColumns';
import { AIRCRAFT_COLUMNS } from './Interfaces/aircraftColumns';
import { AIRCRAFT_DETAIL_COLUMNS } from './Interfaces/aircraftdetailColumns';
import { CREW_DETAIL_COLUMNS } from './Interfaces/crewdetailColumns';
import { TICKET_DETAIL_COLUMNS } from './Interfaces/ticketdetailColumns';
import TableDetail from './tabledetailContainer';
import { Styles } from './styles';


export const DataFilter = (props) => {

    const [selectedTechnologies, setSelectedTechnologies] = useState([]);
    const [data, setData] = useState();
    const [showTable, setShowTable] = useState(false);

    useEffect(() => {
        setData(props.data);
        setShowTable(true);
    }, [])
    const type = props.type;
    let INTERFACE;
    if(type == "flight")
    {
        INTERFACE = FLIGHT_DETAIL_COLUMNS;
    }
    else if (type == "crew")
    {
        INTERFACE = CREW_DETAIL_COLUMNS;
    }
    else if (type == "aircraft")
    {
        
        INTERFACE = AIRCRAFT_DETAIL_COLUMNS;
        
    }
    else if (type == "ticket")
    {
      
        INTERFACE = TICKET_DETAIL_COLUMNS;
   
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
                <hr/>
                <>
                    {showTable ? 
                    <Styles>
                    <TableDetail columns={columns} data={data} /> 
                    </Styles>
                    : null}
                </>
            </Box>
        </Flex>
    )
}