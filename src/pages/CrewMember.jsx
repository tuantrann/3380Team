import React, {useEffect, useState} from 'react';
import { DataTable } from '../components/dataTable/DataTable';
import { FlightPic } from '../components/flightPic/flightPic';
import { Icons } from '../components/flightPic/Icon';
import { NavBar } from '../components/navBar/NavBar';
import { SearchBar } from '../components/searchFunction/searchBar';


export const CrewMember = (props) => {
    const [crewData, setCrewData] = useState([]);
    const [showData, setShowData] = useState(false);

    async function getData(){
        const response = await fetch("http://localhost:5000/allCrew")
        const jsonData = await response.json();
        setCrewData(jsonData);
        setShowData(true);
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <NavBar />
            <FlightPic home={false}/>
            <Icons />
            <SearchBar type="crew"/>
            {showData ? (<DataTable type="crew" data={crewData}/>) : null}
        </div>
    )
}