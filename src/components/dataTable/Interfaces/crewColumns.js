import { BiDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
import { SelectColumnFilter } from "../Filter";

export const CREW_COLUMNS = [

    {
        Header: "Name",
        accessor: "name",
        Filter: SelectColumnFilter,
        filter: "includes",
    },
    {
        Header: "Address",
        accessor: "address",
        disableFilters: true, 
    },
    {
        Header: "City",
        accessor: "city",
        Filter: SelectColumnFilter,
        filter: "includes",
    },
    {
        Header: "State",
        accessor: "state",
        Filter: SelectColumnFilter,
        filter: "includes",
    },
    {
        Header: "Zipcode",
        accessor: "zip",
        Filter: SelectColumnFilter,
        filter: "includes",
    },
    {
        Header: "Country",
        accessor: "country",
        Filter: SelectColumnFilter,
        filter: "includes",
      
    },
    {
        Header: "Contact",
        accessor: "contact",
        disableFilters: true,
 
    },
    {
        Header: "Detail",
        accessor: "crew_id",
        disableFilters: true,
        Cell: ({ cell }) => (
        <Link to={`crewdetail/${cell.row.values.crew_id}`}>
            <BiDetail></BiDetail>
        </Link>
      )
    }

        
]