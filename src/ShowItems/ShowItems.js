import React from 'react';

const showItems = (props) => {
    
    const listItems = props.listItems.map((item,index)=> {
        return <p key={index}>{item}</p>
    });
    
    return(
        <div>
           {listItems} 
        </div>
    );
}

export default showItems;