import React, { forwardRef } from "react";
import {DialogContent, DialogOverlay} from "@reach/dialog";
import "./filterModal.css";
import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";

export const FilterModal = forwardRef(
    ({children, onApply, onDismiss}, ref)=>{
        return(
            <DialogOverlay    
                className="filter-modal"
            >
                <DialogContent
                    ref={ref}
                    className="filter-modal__wrapper"
                    aria-label="modal window"
                >
                    <div
                        className="filter-modal__header"
                    >
                        <button onClick={onDismiss}>
                        X
                        </button>
                    </div>
                    <div classname="filter-modal__content">
                        {children}
                    </div>
                    <div className="filter-modal__actions">
                        <button onClick={onApply}>
                            Apply
                        </button>
                    </div>

                </DialogContent>
            </DialogOverlay>

        
            )   
    }
);