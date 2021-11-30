import React, {useEffect, useState, useMemo} from 'react';
import { DataTable } from '../components/dataTable/DataTable';
import Table from '../components/dataTable/tableContainer';
import { FlightPic } from '../components/flightPic/flightPic';
import { Icons } from '../components/flightPic/Icon';
import { NavBar } from '../components/navBar/NavBar';
import { SearchBar } from '../components/searchFunction/searchBar';

export const FlightInfo = (props) => {

    const [flightData, setFlightData] = useState([]);
    const [showData, setShowData] = useState(false);

    async function getData(){
        const response = await fetch("http://localhost:5000/allFlight")
        const jsonData = await response.json();
        console.log(jsonData)
        setFlightData(jsonData);
        setShowData(true);
    }

    useEffect( () => {
        getData()
    }, [])


    return (
        <div>
            <NavBar />
            <FlightPic home={false}/>
            <Icons />
            <SearchBar type="flight"/>

            <div>
                {showData ? (<DataTable type="flight" data={flightData}/>) : null}
            </div>
        </div>
    )
}