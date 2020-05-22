import React, { Component } from 'react';
import AddItem from './AddItem/AddItem';
import ShowItems from './ShowItems/ShowItems';

import './App.css';

class App extends Component {
  state ={
    item : '',
    listItems: []
  };
  render() {
    
    const addItemHandler = () =>{
      console.log(this.state.listItems, 'check click');
      const itemList = this.state.listItems;
      itemList.push(this.state.item)
      this.setState({
        item: '',
        listItems: itemList
      })
    };

    const changeInputHandler = (event) => {
      console.log(event.target.value);
      this.setState({
        item: event.target.value
      });
    };
    

    return (
      <div className="App">
        <AddItem click={addItemHandler}
          change={(event)=>{changeInputHandler(event)}}
          item={this.state.item}
         ></AddItem>

         <ShowItems listItems={this.state.listItems}>

         </ShowItems>
      </div>
    );
  }
}

export default App;
