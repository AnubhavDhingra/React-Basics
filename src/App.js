import React, { Component } from 'react';
import AddItem from './AddItem/AddItem';
import ShowItems from './ShowItems/ShowItems';

import './App.css';

class App extends Component {
  state = {
    item: '',
    listItems: []
  };
  render() {

    const addItemHandler = () => {
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

    const deleteHandler = (index) => {
      const itemList = this.state.listItems;
      itemList.splice(index, 1);
      this.setState({
        listItems: itemList
      });
    }

    const listItems = this.state.listItems.map((item, index) => {
      return <div>
        <ShowItems key={index}
          click={() => deleteHandler(index)}
          listItem={item}></ShowItems>
      </div>
    });

    return (
      <div className="App">
      <h1>To Do List</h1>
        <div className="addCard">
          <AddItem click={addItemHandler}
            change={(event) => { changeInputHandler(event) }}
            item={this.state.item}

          ></AddItem>
        </div>
        {listItems}
      </div>
    );
  }
}

export default App;
