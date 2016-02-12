import React, { Component } from 'react'


class TextDisplay extends Component {

	constructor(props) {
		super(props);
}
	render(){
		return (
			<div>task will be  { this.props.text}</div>
			);
	}
}
export default TextDisplay