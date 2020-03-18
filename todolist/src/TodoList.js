import React, { Component } from 'react';
import store from './store';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
    }

    render() {
        return (
            <div>
                <div>
                    <input value={this.state.inputValue}/>
                    <button>submit</button>
                </div>
                <ul>
                    <li>dell</li>
                </ul>
            </div>
            
        )
    }
}

export default TodoList;