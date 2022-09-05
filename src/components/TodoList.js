import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoItem from './TodoItem';
import NewTodoForm from './NewTodoForm';

import './TodoList.css'


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Todos: []
        }
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    addItem(itemInfo) {
        const newTodos = [...this.state.Todos, {...itemInfo} ]
        this.setState({ Todos: newTodos });
    }
    deleteItem(key) {
        const newTodos = this.state.Todos.filter(Todo => Todo.key !== key);
        this.setState({ Todos: newTodos })
    }
    render() {
        const Todos = this.state.Todos.map((Todo) => {
            return <TodoItem key={uuidv4()} item={Todo.item} deleteItem={this.deleteItem} />
        })
        return (
            <section className='TodoList'>
                <h1>Todo List</h1>
                <div className='TodoList-Container'>
                    { Todos }
                </div>
                <NewTodoForm addItem={this.addItem} />
            </section>
        );
    }
}

export default TodoList;