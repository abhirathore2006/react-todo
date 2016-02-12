import React, { Component } from 'react'
import TextDisplay from './TextDisplay'

class TextInput extends Component {

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
	render(){
		return (
    			<div>
    			    <input name="inputText" type="text" onChange={this.handleChange.bind(this)} value={this.state.inputText}/>
    			    <TextDisplay text={this.state.inputText}/>
    			</div>
			);
	}
}
export default TextInput