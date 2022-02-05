import React,{Component} from 'react'

class TodoInput extends Component {
    constructor(props){
        super(props)
        this.state = {text:''}
        this.hdlTextChange = this.hdlTextChange.bind(this)
        this.hdlButtonAddClick = this.hdlButtonAddClick.bind(this)
    }

    hdlTextChange(val){
        this.setState({text:val})
    }

    hdlButtonAddClick(){
        this.props.onAddClick(this.state.text)
        this.setState({text:''})
    }

    render(){
        const {text} = this.state
        return (
            <React.Fragment>
                <input type="text" value={text} onChange={(e) => this.hdlTextChange(e.target.value)}/>
                <button onClick={this.hdlButtonAddClick}>add</button>
            </React.Fragment>
        );
    }
}

export default TodoInput;