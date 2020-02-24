import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';
import TodoListItem from './TodoListItem/TodoListItem'
import filter from './filter.png'


const tasks = [
    {id: 1, task: "click on item to complete1"},
    {id: 2, task: "click on item to complete2"},
    {id: 3, task: "click on item to complete3"},
    {id: 4, task: "click on item to complete4"},
    {id: 5, task: "click on item to complete5"},
    {id: 6, task: "click on item to complete6"},
    {id: 7, task: "click on item to complete7"},
    {id: 8, task: "click on item to complete8"}
]
const taskElements = tasks.map(t => <TodoListItem key={t.id} task={t.task}/>)

function TodoList() {
    return (
        <>
            <img className="filter" src={filter}/>
            <div className="todoList_header">
                <p><b>Tasks</b></p>
                <p><b>Actions</b></p>
            </div>
            {taskElements}
        </>
    );
}

export default TodoList;



