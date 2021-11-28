import React, {useState} from 'react';
import { DataTable } from '../components/dataTable/DataTable';
import { FlightPic } from '../components/flightPic/flightPic';
import { Icons } from '../components/flightPic/Icon';
import { NavBar } from '../components/navBar/NavBar';
import { SearchBar } from '../components/searchFunction/searchBar';


export const FlightInfo = (props) => {

    return (
        <div>
            <NavBar />
            <FlightPic home={false}/>
            <SearchBar type="flight"/>
            <Icons />
            <DataTable />
        </div>
    )
}