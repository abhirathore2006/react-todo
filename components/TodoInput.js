import React, { Component } from 'react'


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
    event.preventDefault()
   this.props.addTodo(this.state.inputText)
    	//return false;
    	
    }
	render(){
		return (
    			<div>
    			    <form onSubmit={this.handleSubmit.bind(this)}>
    			    <input name="inputText" type="text" placeholder="type your todo" onChange={this.handleChange.bind(this)} value={this.state.inputText}/>
    			    <button onClick={this.handleSubmit.bind(this)}>submit</button>
    			    </form>
    			</div>
			)
	}
}
export default TodoInput