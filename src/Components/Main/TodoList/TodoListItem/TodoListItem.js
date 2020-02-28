import React from 'react';
import PropTypes from 'prop-types';
import './TodoListItem.css';

function TodoListItem({task}) {
    return (
        <div className="todoListItem">
            {task}
            <div className='buttons'>
                <button className="button">Delete</button>
                <button className="button">Edit</button>
            </div>
        </div>
    );
}

TodoListItem.propTypes = {
    task: PropTypes.string
};

TodoListItem.defaultProps = {
    task: 'task'
}

TodoListItem.displayName = "todoListItem"

export default TodoListItem;
