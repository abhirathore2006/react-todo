import React, { Component } from 'react'


class TodoItem extends Component {

/**	constructor(props) {
		super(props);
}**/

    handleDeleteTodo(event){
        event.preventDefault()
        this.props.actions.completeTodo(this.props.todo.id)
    }
    
    handleCompleteTodo(event){
        event.preventDefault()
        this.props.actions.deleteTodo(this.props.todo.id)
    }
       
	render(){
		return (
			<li>
				<div>
				<p>{this.props.todo.text}</p>
				<button onClick={this.handleDeleteTodo.bind(this)}>mark complete</button>
				<button onClick={this.handleCompleteTodo.bind(this)}> delete </button>
				</div>
				
			</li>
			)
	}
}
export default TodoItem