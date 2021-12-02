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
import { Ticket } from './pages/Ticket';
import { FlightDetail } from './pages/FlightDetail';
import { AircraftDetail } from './pages/AircraftDetail';
import { CrewDetail } from './pages/CrewDetail';
import { TicketDetail } from './pages/TicketDetail';
import { AddNewData } from './pages/addNewData';
// import { AirPort } from './pages/Airport';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/aircraftinfo" element={<AirCraftInfo />} />
            <Route path="/crewmember" element={<CrewMember />} />
            <Route path="/flightinfo" element={<FlightInfo/>} />
            <Route path="/ticket" element={<Ticket />} />
            <Route path="/aircraftinfo/addNew" element={<AddNewData /> } />
            <Route path="/crewmember/addNew" element={<AddNewData />} />
            <Route path="/flightinfo/addNew" element={<AddNewData /> } />
            <Route path="/ticket/addnew" element={<AddNewData /> } />
            <Route path="/flightinfo/flightdetail/:id" element={<FlightDetail />} />
            <Route path="/ticket/ticketdetail/:id" element={<TicketDetail /> } /> 
            <Route path="/aircraftinfo/aircraftdetail/:id" element={<AircraftDetail /> } />
            <Route path="/crewmember/crewdetail/:id" element={<CrewDetail /> } />
            {/* <Route path="/airport" element={<AirPort />} /> */}
            <Route path="*" element={<PageNotFound/>} />
          </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
