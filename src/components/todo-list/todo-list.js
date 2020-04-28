import React from 'react';
import './todo-list.css';

import TodoListItem from "../todo-list-item";

const TodoList = ({todos, deleteItem, toggleImportantItem, toggleDoneItem}) => {
    return (
        <ul className="list-group todo-list">
            { todos.map(({id, ...todo}) => (
                <li key={id} className="list-group-item">
                    <TodoListItem
                        {...todo}
                        deleteItem={() => deleteItem(id)}
                        toggleImportantItem={() => toggleImportantItem(id)}
                        toggleDoneItem={() => toggleDoneItem(id)}
                    />
                </li>
            )) }
        </ul>
    );
};

export default TodoList;