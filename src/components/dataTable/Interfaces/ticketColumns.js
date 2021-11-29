import { SelectColumnFilter } from "../Filter";

export const TICKET_COLUMNS = [

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
        Filter: SelectColumnFilter,
        filter: "includes",
    },
    {
        Header: "Departure Date",
        accessor: "departure_date",
        disableFilters: true,
    },
    {
        Header: "Checking Status",
        accessor: "checking_status",
        Filter: SelectColumnFilter,
        filter: "includes"
    },
     {
        Header: "Departure Gate",
        accessor: "departure_gate",
        Filter: SelectColumnFilter,
        filter: "includes"
      
    },

        
]