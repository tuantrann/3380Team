import { BiDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

export const FLIGHT_DETAIL_COLUMNS = [

    {
        Header: "Departure City",
        accessor: "departure_city",
        disableFilters: true,
    },
    {
        Header: "Arrival City",
        accessor: "arrival_city",
        disableFilters: true,
    },
    {
        Header: "Departure Date",
        accessor: "departure_date",
        disableFilters: true,
    },
    {
        Header: "Arrival Date",
        accessor: "arrival_date",
        disableFilters: true,
    },
    {
        Header: "Status",
        accessor: "status",
        disableFilters: true,
    },
    {
        Header: "Departure Gate",
        accessor: "departure_gate",
        disableFilters: true,
      
    },
    {
        Header: "Arrival Gate",
        accessor: "arrival_gate",
        disableFilters: true,
 
    },
    {
        Header: "Baggage",
        accessor: "baggage_claim",
        disableFilters: true,

    },
    {
        Header: "Detail",
        accessor: "flight_id",
        disableFilters: true,
        Cell: ({ cell }) => (
        <Link to={`flightdetail/${cell.row.values.flight_id}`}>
            <BiDetail></BiDetail>
        </Link>
      )
    }
        
]