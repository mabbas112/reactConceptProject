import React from "react"; 
// We will not simply import like css file, so we import something from it.
import classes from './Card.module.css'

function Card(props){


    return(
        // Accepting props which holds something where styles are applyied 
        // Injecting something dynamically by dollar sign
        <div className={`${classes.Card} ${props.className}`}> 
           {props.children}  
        </div>
    ); 
}

export default Card;