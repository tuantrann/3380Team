import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Container, Flex } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavBar } from '../components/navBar/NavBar';
import { AiTwotoneEdit } from "react-icons/ai";
import { Button } from '@chakra-ui/button';

export const AircraftDetail = (props) => {
    
    const [data1, setData1] = useState()

    const [showData, setShowData] = useState(false)
    const [readOnly1, setReadOnly1] = useState(true)

    const [checkstatus, setCheckStatus] = useState()
    const [date, setDate] = useState()
    const [maintenance_cost, setMaintenanceCost] = useState()
    const [model, setModel] = useState()
    const [range, setRange] = useState()
    const [refuel_date, setRefuelDate] = useState()
    const [ refuel_cost, setRefuelCost] = useState()
    const [total_distance_traveled, setDistanceTravel] = useState()

    const {id} = useParams();

    const setUpData = (data1) => {
        setCheckStatus(data1.checkstatus)
        setMaintenanceCost(data1.maintenance_cost)
        setDate(data1.date)
        setModel(data1.model)
        setRange(data1.range)
        setRefuelDate(data1.refuel_date)
        setRefuelCost(data1.refuel_cost)
        setDistanceTravel(data1.total_distance_traveled)
    }


    async function getFlightInfo (){
        let flightInfo = await fetch("http://localhost:5000/selectedAircraft",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({inputData: id})
        });
        let jsonData = await flightInfo.json();
        
        //console.log(jsonData);
        setUpData(jsonData[0]);
        setData1(jsonData[0]);
        setShowData(true);
    }


    useEffect(() => {
        getFlightInfo();
    }, [])

    const resetData1 = () => {
        setUpData(data1);
    }


    const submitData1 = async () => {
        let stat = await fetch("http://localhost:5000/updateAircraft1",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                checkstatus,
                date,
                maintenance_cost,
                model,
                range,
                refuel_date,
                refuel_cost,
                total_distance_traveled,
                aircraft_code: data1.aircraft_code,
                maintenance_id: data1.maintenance_id,
                refuel_id: data1.refuel_id
            })
        });
        if(stat.status == 200)
        {
            alert('Update successful')
        }
        else{
            alert('Update failed')
            resetData1();
        }
        setReadOnly1(!readOnly1);
    }


    return(
        <>
        <NavBar />
        { (showData) ? 
                <>
                <Flex
                    width="100%"
                    justifyContent="space-around"
                >
                    <FormControl 
                        id="aircraft_info" 
                        width="25rem"
                        padding="1rem"
                        border="1px"
                        borderColor="#EBEBEB"
                        borderRadius="5px"
                        boxShadow="10px 10px 17px -13px rgba(0,0,0,0.75)"

                    >
                        <Flex>
                        <FormHelperText> Aircraft Info</FormHelperText>
                         <AiTwotoneEdit 
                            fontSize="2rem"
                            cursor="pointer"
                            onClick={()=>setReadOnly1(!readOnly1)}></AiTwotoneEdit>
                        </Flex>
                        <FormLabel>Flight Number</FormLabel>
                        <Input 
                            backgroundColor="#E5E2E2" 
                            value={data1.aircraft_code  || ''} 
                            readOnly={true}
                            
                        ></Input>
                        <FormLabel>Check Status</FormLabel>
                        <Input value={checkstatus  || ''} onChange={(event) => setCheckStatus(event.target.value)} readOnly={readOnly1}></Input>
                        <FormLabel>Maintenance Number </FormLabel>
                        <Input backgroundColor="#E5E2E2"  value={data1.maintenance_id  || ''} readOnly={true}></Input>
                        <FormLabel>Maintenance Date</FormLabel>
                        <Input value={date  || ''} onChange={(event) => setDate(event.target.value)} readOnly={readOnly1}></Input>
                        <FormLabel>Maintenance Cost</FormLabel>
                        <Input value={maintenance_cost  || ''} onChange={(event) => setMaintenanceCost(event.target.value)} readOnly={readOnly1}></Input>
                        <FormLabel>Model </FormLabel>
                        <Input value={model  || ''} onChange={(event) => setModel(event.target.value)} readOnly={readOnly1}></Input>
                        <FormLabel>Range</FormLabel>
                        <Input value={range  || ''} onChange={(event) => setRange(event.target.value)} readOnly={readOnly1}></Input>
                        
                         <FormLabel>Refuel Number </FormLabel>
                        <Input backgroundColor="#E5E2E2"  value={data1.refuel_id  || ''} readOnly={true}></Input>
                        <FormLabel>Refuel Date</FormLabel>
                        <Input value={refuel_date  || ''} onChange={(event) => setRefuelDate(event.target.value)} readOnly={readOnly1}></Input>
                        <FormLabel>Refuel Cost </FormLabel>
                        <Input value={refuel_cost  || ''} onChange={(event) => setRefuelCost(event.target.value)} readOnly={readOnly1}></Input>
                        <FormLabel>Total Distance Traveled </FormLabel>
                        <Input value={total_distance_traveled  || ''} onChange={(event) => setDistanceTravel(event.target.value)} readOnly={readOnly1}></Input>
                        
                        {!readOnly1 && 
                        <Flex>
                        <Button 
                            onClick={()=>resetData1()}
                            marginTop="2rem">
                            Reset
                        </Button>
                        <Button 
                            onClick={()=>submitData1()}
                            marginTop="2rem">
                            Submit
                        </Button>
                        </Flex>
                     }
                    </FormControl>
                </Flex>
                </>
            : <Box> Loading </Box>
        }
        </>
    )
}