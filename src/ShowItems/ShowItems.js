import React from 'react';
import './ShowItem.css';

const showItems = (props) => {
    
    return(
        <div onClick={props.click} className="Card">
           {props.listItem} 
        </div>
    );
}

export default showItems;