import React from 'react';
import PropTypes from 'prop-types';
import './Main.css';
import TodoList from "./TodoList/TodoList";
import plus from './plus.png'



function Main() {
    return (
        <div className="wrapper">
            <div className="addNewItem">
                <p>What shall I do today?</p>
                <img src={plus}/>
            </div>
            <TodoList />
        </div>
    );
}

export default Main;
