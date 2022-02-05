import React , {Component } from 'react'
import TodoItem from './TodoItem';
class TodoList extends Component {
    
    render() {
        const {todos} = this.props;
        return (
            <ul>
                {todos.map((val,i) => <li key={i}><TodoItem title={val}/></li>)}
            </ul>
        );
    }
}

export default TodoList