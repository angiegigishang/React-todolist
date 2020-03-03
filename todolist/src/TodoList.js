import React, { Component, Fragment } from 'react';
import './style.css';
import TodoItem from './TodoItem.js';

class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: ['math']
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">input value</label>
          <input 
            value={this.state.inputValue}
            id="insertArea"
            className='input'
            onChange={this.handleInputChange.bind(this)}/>
          <button onClick={this.handleBtnClick.bind(this)}>submit</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <TodoItem content={item} 
                          index={index} 
                          deleteItem={this.handleItemDelete.bind(this)}></TodoItem>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleItemDelete(index) {
    //immutable
    //state的值不允许我们做任何改变
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default TodoList;
