import { Link } from "react-router-dom";
import { SelectColumnFilter } from "../Filter";
import { BiDetail } from "react-icons/bi";
export const AIRCRAFT_COLUMNS = [

    {
        Header: "Model",
        accessor: "model",
        Filter: SelectColumnFilter,
        filter: "includes",
    },
    {
        Header: "Range",
        accessor: "range",
        Filter: SelectColumnFilter,
        filter: "includes",
    },
    {
        Header: "Distance Traveled",
        accessor: "total_distance_traveled",
        disableFilters: true,
    },
    {
        Header: "Refuel Date",
        accessor: "refuel_date",
        disableFilters: true,
    },
    {
        Header: "Maintenance Status",
        accessor: "checkstatus",
        Filter: SelectColumnFilter,
        filter: "includes",
    },
    {
        Header: "Maintenance Date",
        accessor: "date",
        disableFilters: true
    },
    {
        Header: "Detail",
        accessor: "aircraft_code",
        disableFilters: true,
        Cell: ({ cell }) => (
        <Link to={`aircraftdetail/${cell.row.values.aircraft_code}`}>
            <BiDetail></BiDetail>
        </Link>
      )
    }
]