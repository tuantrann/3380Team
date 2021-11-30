import styled from 'styled-components';
export const Styles = styled.div`
 table {
   border-spacing: 0;
   border: 1px solid black;
    width: 100%;
   tr {
     :last-child {
       td {
         border-bottom: 0;
       }
     }
   }

   th,
   td {
     padding: 1rem;
    

     :last-child {
       border-right: 0;
     }
   }
  
   th {
     background:  #f4f6f6 ;
     border: 1px;
     border-color: white;
     color:   #7b7d7d      ;
     fontWeight: bold;
   }
 }
`