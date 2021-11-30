import React, {useState, useEffect} from 'react';
import { DataTable } from '../components/dataTable/DataTable';
import { FlightPic } from '../components/flightPic/flightPic';
import { Icons } from '../components/flightPic/Icon';
import { NavBar } from '../components/navBar/NavBar';
import { SearchBar } from '../components/searchFunction/searchBar';


export const AirCraftInfo = (props) => {

    const [flightData, setFlightData] = useState([]);
    const [showData, setShowData] = useState(false);

    async function getData(){
        const response = await fetch("http://localhost:5000/allAircraft")
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
            <SearchBar type="aircraft"/>
            {showData ? <DataTable type="aircraft" data={flightData} /> : <div>Loading</div>}
        </div>
    )
}