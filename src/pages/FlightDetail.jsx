import React, { useEffect } from 'react';

export const FlightDetail = (props) => {
    
    const [data, setData] = useState()
    const [showData, setShowData] = useState()

    useEffect(() => {
        const response = await fetch("http://localhost:5000/allFlight")
        const jsonData = await response.json();
        console.log(jsonData)
        setFlightData(jsonData);
        setShowData(true);
    }, [])

    return(
        <>
        </>
    )
}