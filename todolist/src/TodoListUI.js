import React from 'react';
import { Input,  Button, List } from 'antd';

const TodoListUI = (props) => {
    return (
        <div>
            <Input value={props.inputValue} 
                placeholder="todo info"
                onChange={props.handleInputChange} 
                style={{width: '300px', marginRight: '10px'}}/>
            <Button type="primary" onClick={props.handleBtnClick}>submit</Button>
            <List
            bordered
            style={{marginTop:'10px', width:'300px'}}
            dataSource={props.list}
            renderItem={(item, index) => (
                <List.Item onClick={() => {props.handleItemDelete(index)}}>
                {item}
                </List.Item>
            )}
            />
        </div>
    )
}

// class TodoListUI extends Component {
//     render() {
//         return (
//             <div>
//                 <Input value={this.props.inputValue} 
//                     placeholder="todo info"
//                     onChange={this.props.handleInputChange} 
//                     style={{width: '300px', marginRight: '10px'}}/>
//                 <Button type="primary" onClick={this.props.handleBtnClick}>submit</Button>
//                 <List
//                 bordered
//                 style={{marginTop:'10px', width:'300px'}}
//                 dataSource={this.props.list}
//                 renderItem={(item, index) => (
//                     <List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>
//                     {item}
//                     </List.Item>
//                 )}
//                 />
//             </div>
//         )
//     }
// }

export default TodoListUI;