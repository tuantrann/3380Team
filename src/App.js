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

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/aircraftInfo" element={<AirCraftInfo />} />
            <Route path="/crewMember" element={<CrewMember />} />
            <Route path="/flightInfo" element={<FlightInfo/>} />
            <Route path="/flightSummary" element={< FlightSummary/>} />
            <Route path="*" element={<PageNotFound/>} />
          </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
