import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {

/**	constructor(props) {
		super(props);
}**/

	render(){
		return (
			<div>
				<ul>
					{
						this.props.todos.map((todo) => {
							return <TodoItem key={todo.id} actions={this.props.actions} todo={todo} />
							
						})
					}
				</ul>
			</div>
			)
	}
}
export default TodoList