import React, {useEffect, useState} from 'react';
import { DataTable } from '../components/dataTable/DataTable';
import { FlightPic } from '../components/flightPic/flightPic';
import { Icons } from '../components/flightPic/Icon';
import { NavBar } from '../components/navBar/NavBar';
import { SearchBar } from '../components/searchFunction/searchBar';


export const Ticket = (props) => {
    const [ticketData, setTicketData] = useState([]);
    const [showData, setShowData] = useState(false);

    async function getData() {
        const response = await fetch("http://localhost:5000/allTicket")
        const jsonData = await response.json();
        console.log(jsonData)
        setTicketData(jsonData);
        setShowData(true);
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            <NavBar />
            <FlightPic home={false}/>
            <Icons />
            <SearchBar type="ticket"/>
            <div>
                {showData ? (<DataTable type="ticket" data={ticketData}/>) : null}
            </div>
        </div>
    )
}