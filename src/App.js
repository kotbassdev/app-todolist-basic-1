import React,{Component} from 'react'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      todos : []
    }
    this.hdlAdd = this.hdlAdd.bind(this)
  }

  hdlAdd(val){
    this.setState((prev) => ({
      todos : prev.todos.concat([val])
    }))
  }

  render(){
    let {todos} = this.state;
    return (
      <React.Fragment>
        <TodoInput onAddClick={this.hdlAdd}/>
        <TodoList todos={todos}/>
      </React.Fragment>
    );
  }
}

export default App;