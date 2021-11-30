import { BiDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
import { SelectColumnFilter } from "../Filter";

export const CREW_DETAIL_COLUMNS = [

    {
        Header: "Name",
        accessor: "name",
        disableFilters: true,
    },
    {
        Header: "Address",
        accessor: "address",
        disableFilters: true, 
    },
    {
        Header: "City",
        accessor: "city",
        disableFilters: true,
    },
    {
        Header: "State",
        accessor: "state",
        disableFilters: true,
    },
    {
        Header: "Zipcode",
        accessor: "zip",
        disableFilters: true,
    },
    {
        Header: "Country",
        accessor: "country",
        disableFilters: true,
      
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