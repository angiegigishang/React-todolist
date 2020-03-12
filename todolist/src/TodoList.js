import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem.js';
import axios from 'axios';
import './style.css';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
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
            onChange={this.handleInputChange}/>
          <button onClick={this.handleBtnClick}>submit</button>
        </div>
        <ul>
          { this.getTodoItem() }
        </ul>
      </Fragment>
    )
  }

  componentDidMount() {
    axios.post('http://192.168.99.106:8080/user/list', {
      'HEAD': {'aaaaa':''},
      'BODY': {'aaaaa':''},
      'Content-Type':'application/json'
    })
      .then((res) => {console.log(res)})
      .catch(() => {alert('error')})
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem content={item} 
                  index={index} 
                  key={index}
                  deleteItem={this.handleItemDelete}></TodoItem>
      )
    })
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.setState(()=> ({
        inputValue: value 
    }))
    // this.setState({
    //   inputValue: e.target.value
    // })
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    })) 
  }

  handleItemDelete(index) {
    //immutable
    //state的值不允许我们做任何改变
    this.setState((prevState) =>{
      const list = [...prevState.list];
      list.splice(index, 1);
      return {list};
    })
  }
}

export default TodoList;
