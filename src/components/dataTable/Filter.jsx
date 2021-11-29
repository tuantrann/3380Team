// import { Button } from "@chakra-ui/button";
// import { Box } from "@chakra-ui/layout";
// import React, { useEffect, useRef, useState } from "react";
// import "./filter.css";
// import {FilterModal} from "./FilterModal";

// export default function Filter({children, onApply, label}) {

//     const [isOpen, setIsOpen] = useState(false);
//     const dropdownRef = useRef(undefined)
//     const buttonRef = useRef(undefined)
//     const modalRef = useRef(undefined)

//     useEffect(() => {
//         const handleClickOutside = event => {
//             const isDropdownClick = dropdownRef.current && dropdownRef.current.contains(event.target)
//             const isButtonClick = buttonRef.current && buttonRef.current.contains(event.target)
//             const isModalClick = modalRef.current && modalRef.current.contains(event.target)
//             if (isDropdownClick || isButtonClick || isModalClick){
//                 return
//             }
//             setIsOpen(false);
//         }
//         document.addEventListener("mousedown", handleClickOutside)
//         document.addEventListener("touchstart", handleClickOutside)

//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside)
//             document.removeEventListener("touchstart", handleClickOutside)
//         };
        
       
//     }, [dropdownRef, buttonRef, modalRef])

//     const handleApply = event => {
//         setIsOpen(false);
//         onApply(false);
//     }

//     return (
//         <div
//             className="filter"
//         >
//             <button
//                 ref={buttonRef}
//                 className="filter__button"
//                 onClick={() => setIsOpen(!isOpen)}
//             >
//                 {label}
//             </button>
//             {
//                 isOpen && (
//                     <>
//                     <div
//                         ref={dropdownRef}
//                         className="filter__dropdown"
//                     >
//                         <Box
//                             paddingTop="2rem"
//                             paddingBottom="2rem"
//                         >
//                             {children}
//                         </Box>
//                         <div
//                             className="filter__dropdown__actions"
                        
//                         >
//                             <button 
//                                 onClick={handleApply}
//                                 className="button"
//                             >
//                                 Apply
//                             </button>
//                         </div>
//                     </div>
                    
//                     </>
//                 )
//             }
//             {
//                 isOpen && (
//                     <>
//                     <FilterModal
//                         ref={modalRef}
//                         onApply={handleApply}
//                         onDisMiss={()=>setIsOpen(false)}
//                     >
//                         {children}
//                     </FilterModal>
//                     </>
//                 )
//             }
            
//         </div>
//     )
// }