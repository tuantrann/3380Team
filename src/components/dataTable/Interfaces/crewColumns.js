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

        
]