import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

class Todo extends Component{

    render() {
        let todoItems;
        if(this.props.todos){
            todoItems = this.props.todos.map(todo => {
                return (
                    <TodoItem key={todo.title} todo={todo} />
                )
            })
            
        }
        return (
            <div className="todos">
                <h3>Latest Todos</h3>
                {todoItems}
            </div>
        )
    }
}

Todo.propTypes = {
    todos: PropTypes.array
}

export default Todo