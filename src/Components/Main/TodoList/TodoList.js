import React, {useCallback, useEffect, useState} from 'react';
import './TodoList.css';
import TodoListItem from './TodoListItem/TodoListItem'
import filter from './filter.png'

function TodoList() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    if (error) throw error;

    useEffect(() => {
        fetch("http://localhost:3000/tasks")
            .then(res => setData(res.json()))
            .catch(e => {
                setError(e);
            });
    }, []);

    return (
        <>
            <img className="filter" src={filter} alt="filterButton"/>
            <div className="todoList_header">
                <p><b>Tasks</b></p>
                <p><b>Actions</b></p>
            </div>
            {data.map(t => (
                <TodoListItem key={t.id} task={t.task} />
                ))}
        </>
    );
}
export default TodoList;


