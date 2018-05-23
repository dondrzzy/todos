import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{
    render() {
        return (
            <li className="todo-item">
                {this.props.todo.title} - {this.props.todo.body}
            </li>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object
};

export default TodoItem