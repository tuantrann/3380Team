import { Button } from "@chakra-ui/button";
import { Box, Flex } from "@chakra-ui/layout";
import { React } from "react";
import { Link } from "react-router-dom";
import { useTable, useFilters, useGlobalFilter } from "react-table";
import { GlobalFilter, DefaultFilterForColumn } from "./Filter";


export default function Table({ columns, data }) {
  const {
   getTableProps,
   getTableBodyProps,
   headerGroups,
   rows,
   state,
   visibleColumns,
   prepareRow,
   setGlobalFilter,
   preGlobalFilteredRows,
 } = useTable(
   {
     columns,
     data,
     defaultColumn: { Filter: DefaultFilterForColumn },
   },
   useFilters,
   useGlobalFilter
 );
 
 return (
   <table {...getTableProps()}>
     <thead>
       <tr>
         <th
           colSpan={visibleColumns.length}
           style={{
             textAlign: "center",
           }}
         >
            <Flex
                justifyContent="center"
                alignItems="center"
            >
           {/* Rendering Global Filter */}
           <GlobalFilter
             preGlobalFilteredRows={preGlobalFilteredRows}
             globalFilter={state.globalFilter}
             setGlobalFilter={setGlobalFilter}
           />
           <Button
            color=" #7b7d7d"
            backgroundColor="#D1D1D1"
            fontWeight="bold"
         
           > <Link to={`addNew`}>
               Add New
            </Link></Button>
           </Flex>
         </th>
       </tr>
       {headerGroups.map((headerGroup) => (
         <tr {...headerGroup.getHeaderGroupProps()}>
           {headerGroup.headers.map((column) => (
             <th {...column.getHeaderProps()}>
               {column.render("Header")}
               {/* Rendering Default Column Filter */}
               <div>
                 {column.canFilter ? column.render("Filter") 
                  :<br/>}
               </div>
             </th>
           ))}
         </tr>
       ))}
     </thead>
     <tbody {...getTableBodyProps()}>
       {rows.map((row, i) => {
         prepareRow(row);
         return (
           <tr {...row.getRowProps()}>
             {row.cells.map((cell) => {
               return <td {...cell.getCellProps()}>
           {cell.render("Cell")}
         </td>;
             })}
           </tr>
         );
       })}
     </tbody>
   </table>
 );
}