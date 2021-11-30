import { BiDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
import { SelectColumnFilter } from "../Filter";

export const TICKET_DETAIL_COLUMNS = [

    {
        Header: "Name",
        accessor: "passenger_name",
        disableFilters: true,
    },
    {
        Header: "Email",
        accessor: "email",
        disableFilters: true,
    },
    {
        Header: "Phone",
        accessor: "phone",
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
        Header: "Checking Status",
        accessor: "checking_status",
        disableFilters: true,
    },
     {
        Header: "Departure Gate",
        accessor: "departure_gate",
        disableFilters: true,
      
    },
    {
        Header: "Detail",
        accessor: "ticket_no",
        disableFilters: true,
        Cell: ({ cell }) => (
        <Link to={`ticketdetail/${cell.row.values.ticket_no}`}>
            <BiDetail></BiDetail>
        </Link>
      )
    }


        
]