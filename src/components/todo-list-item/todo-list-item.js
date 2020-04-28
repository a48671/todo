import React from 'react';

import "./todo-list-item.css";

const TodoListItem = ({label, deleteItem, done, important, toggleDoneItem, toggleImportantItem}) => {

    let classNames = 'todo-list-item';
    if (done) {
        classNames += ' done';
    }
    if (important) {
        classNames += ' important';
    }

    return (
        <div className={classNames}>
            <span
                className="todo-list-item__text"
                onClick={toggleDoneItem}
            >
                {label}
            </span>
            <button
                type="button"
                className="btn btn-outline-success btn-small todo-list-item__btn"
                onClick={toggleImportantItem}
            >
                <i className="fa fa-exclamation"/>
            </button>
            <button
                type="button"
                className="btn btn-outline-danger btn-small todo-list-item__btn"
                onClick={deleteItem}
            >
                <i className="fa fa-trash-alt"/>
            </button>
        </div>
    );
}

export default TodoListItem;