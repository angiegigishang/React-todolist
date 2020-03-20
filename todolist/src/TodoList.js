import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoList extends Component {

    render() {
        return (
            <div>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.changeInputValue}/>
                    <button onClick={this.props.handleClick}>submit</button>
                </div>
                <ul>
                    {
                        this.props.list.map((item, index) => {
                            return <li onClick={this.props.handleDeleteItem(index)} key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

//props.dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
        },

        handleClick() {
            const action = {
                type: 'add_item'
            }
            dispatch(action)
        },

        handleDeleteItem(index) {
            console.log('index', index)
            // const action = {
            //     type: 'delete_item',
            //     index: index
            // }
            // dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);