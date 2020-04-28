import {v4 as uuidv4} from "uuid";

export const createTodoItem = label => ({
    label,
    important: false,
    done: false,
    id: uuidv4()
});

export const toggleTodoItem = (todoList, id, propNames) => {
    const indexTargetItem = todoList.findIndex(item => item.id === id);
    const newItem = {...todoList[indexTargetItem]};
    newItem[propNames] =!newItem[propNames];
    return [...todoList.slice(0, indexTargetItem), newItem, ...todoList.slice(indexTargetItem + 1)];
};

export const searchTodo = (todoList, term) => {
    if (!term.length) {
        return todoList;
    }
    return todoList.filter(todo => todo.label.toLowerCase().indexOf(term.toLowerCase()) >= 0)
};

export const filterTodo = (todoList, filter) => {
    switch (filter) {
        case 'all' :
            return todoList;
        case 'active' :
            return todoList.filter(({done}) => !done);
        case 'done' :
            return todoList.filter(({done}) => done);
        default :
            return todoList;
    }
};