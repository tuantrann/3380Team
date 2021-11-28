import React, {useState} from 'react';

import { FlightPic } from '../components/flightPic/flightPic';
import { NavBar } from '../components/navBar/NavBar';
import { Intro } from '../components/homeContent/intro';
import { Icons } from '../components/flightPic/Icon';

const Pic = ({...rest}) => {
    return (
       <div>
       <FlightPic {...rest} />
       </div> 
    )
}



export const HomePage = (props) => {

    return (
        <div>
            <NavBar />
            <Pic home={true}/>
            <Icons />
            <Intro />
        </div>
    )
}