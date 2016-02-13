import React, { Component } from 'react'
import actions from '../redux/actions'

class TodoInput extends Component {

	constructor(props) {
		super(props);
		this.state ={
		    inputText : ""
		}
}

    handleChange(event){
        console.log(event);
        
        this.setState({
            inputText: event.target.value
        });
    }
    
    handleSubmit(event) {
    	//event.preventDefault()
    	this.props.dispatch(actions.addTodo(this.state.inputText))
    	//return false;
    	
    }
	render(){
		return (
    			<div>
    			
    			    <input name="inputText" type="text" onChange={this.handleChange.bind(this)} value={this.state.inputText}/>
    			    <button onClick={this.handleSubmit.bind(this)}>submit</button>
    			    
    			</div>
			)
	}
}
export default TodoInput