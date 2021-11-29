import React, {useState} from 'react';
import { FlightPic } from '../components/flightPic/flightPic';
import { Icons } from '../components/flightPic/Icon';
import { NavBar } from '../components/navBar/NavBar';
import { SearchBar } from '../components/searchFunction/searchBar';


export const AirCraftInfo = (props) => {

    return (
        <div>
            <NavBar />
            <FlightPic home={false}/>
            <Icons />
            <SearchBar type="aircraft"/>
        </div>
    )
}