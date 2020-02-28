import React from 'react';
import './Main.css';
import TodoList from "./TodoList/TodoList";
import plus from './plus.png'
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";


function Main() {
    return (
        <div className="wrapper">
            <div className="addNewItem">
                <p>What shall I do today?</p>
                <img src={plus} alt="addButton"/>
            </div>
            <ErrorBoundary>
                <TodoList />
            </ErrorBoundary>
        </div>
    );
}

export default Main;
