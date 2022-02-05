import React,{Component} from 'react'

class TodoItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            done: false,
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle(){
        this.setState((state) =>({
            done: !state.done
        }))
    }

    render() {
        const {done} = this.state;
        const {title} = this.props;
        return (
            <div>
                <input type="checkbox" value={done} onClick={this.toggle}/>   
                <span>{done ? `[Done]${title}` : title}</span>
            </div>
        )
    }
}

export default TodoItem