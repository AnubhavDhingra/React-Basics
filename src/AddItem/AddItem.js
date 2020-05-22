import React from 'react';

const addItem = (props) => {

    // const [item, setItem] = useState('')

    // const addItemHandler = () => {
    //     setItem()
    // }


    return (
        <div>
            <button onClick={props.click}>
                + Add
            </button>
            <input type="text" onChange={props.change} value={props.item}/>
        </div>
    );
}

export default addItem;