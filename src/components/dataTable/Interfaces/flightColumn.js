import { Button } from "@chakra-ui/button";
import { Link } from "react-router-dom";
import { SelectColumnFilter } from "../Filter";
import { BiDetail } from "react-icons/bi";
export const FLIGHT_COLUMNS = [

    {
        Header: "Departure City",
        accessor: "departure_city",
        Filter: SelectColumnFilter,
        filter: "includes",
    },
    {
        Header: "Arrival City",
        accessor: "arrival_city",
        Filter: SelectColumnFilter,
        filter: "includes",
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
        Filter: SelectColumnFilter,
        filter: "includes",
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