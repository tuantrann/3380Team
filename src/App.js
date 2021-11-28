import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import {Route, Routes} from 'react-router-dom';

import { PageNotFound } from './pages/PageNotFound';
import { BrowserRouter as Router } from "react-router-dom";
import { HomePage } from './pages/Home';
import { AirCraftInfo } from './pages/AircraftInfo';
import { CrewMember } from './pages/CrewMember';
import { FlightInfo } from './pages/FlightInfo';
import { FlightSummary } from './pages/FlightSummary';
import { Ticket } from './pages/Ticket';
import { AirPort } from './pages/Airport';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/aircraftinfo" element={<AirCraftInfo />} />
            <Route path="/crewmember" element={<CrewMember />} />
            <Route path="/flightinfo" element={<FlightInfo/>} />
            <Route path="/flightsummary" element={< FlightSummary/>} />
            <Route path="/ticket" element={<Ticket />} />
            <Route path="/airport" element={<AirPort />} />
            <Route path="*" element={<PageNotFound/>} />
          </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
