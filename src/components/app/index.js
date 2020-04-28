import React, { Component } from "react";
import "./app.css";
import { createTodoItem, toggleTodoItem, searchTodo, filterTodo } from '../../helpers';

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list"
import ItemAddForm from "../item-add-form"

class App extends Component {

    state = {
        todoData: [],
        term: '',
        filter: 'all' // all || done || active
    };

    deleteItem = id => {
        this.setState(({todoData}) => {
            const itemId = todoData.findIndex(el => el.id === id);
            return ({
                todoData: [...todoData.slice(0, itemId), ...todoData.slice(itemId + 1)]
            })
        });
    };

    addItem = text => {
        this.setState(({todoData}) => ({
            todoData: [...todoData, createTodoItem(text)]
        }));
    };

    toggleDoneItem = id => {
        this.setState(({todoData}) => ({
            todoData: toggleTodoItem(todoData, id, 'done')
        }))
    };
    toggleImportantItem = id => {
        this.setState(({todoData}) => ({
            todoData: toggleTodoItem(todoData, id, 'important')
        }))
    };

    changeTerm = e => {
        this.setState({term: e.target.value})
    };
    changeFilter = filter => {
        this.setState({filter})
    }
    render() {
        const { todoData, filter } = this.state;
        const doneCount = todoData.filter(item => item.done).length;
        const todoCount = todoData.length - doneCount;
        const visibleTodo = filterTodo(searchTodo(this.state.todoData, this.state.term), filter);
        return (
            <div className="app">
                <div className="app__wrapper">
                    <AppHeader todoCount={todoCount} doneCount={doneCount}/>
                    <SearchPanel changeTerm={this.changeTerm} filter={filter} changeFilter={this.changeFilter}/>
                    <TodoList
                        todos={visibleTodo}
                        deleteItem={this.deleteItem}
                        toggleDoneItem={this.toggleDoneItem}
                        toggleImportantItem={this.toggleImportantItem}
                    />
                    <ItemAddForm addItem={this.addItem}/>
                </div>
            </div>
        );
    }

}

export default App;