import React from 'react';
import './AddItem.css'

const addItem = (props) => {

    return (
        <div>
            <button onClick={props.click} className="button">
                + Add
            </button>
            <input type="text" className="input" onChange={props.change} value={props.item}/>
        </div>
    );
}

export default addItem;