import React, {useState} from 'react';
import { NavBar } from '../components/navBar/NavBar';
import { FlightPic } from '../components/flightPic/flightPic';


const Pic = () => {
    return (
       <div>
        
       <FlightPic />
       </div> 
    )
}

export const HomePage = (props) => {

    return (
        <div>
            <NavBar />
            
        </div>
    )
}