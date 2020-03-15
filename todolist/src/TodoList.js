import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input,  Button, List } from 'antd';
import store from './store';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    console.log(store.getState());
  }

  render() {
    return (
      <div>
        <Input value={this.state.inputValue} placeholder="todo info" style={{width: '300px', marginRight: '10px'}}/>
        <Button type="primary">submit</Button>
        <List
          bordered
          style={{marginTop:'10px', width:'300px'}}
          dataSource={this.state.list}
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default TodoList;