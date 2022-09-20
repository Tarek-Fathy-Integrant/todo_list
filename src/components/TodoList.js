import React, { Component } from 'react';

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
        this.editItem = this.editItem.bind(this);
    }
    addItem(itemInfo) {
        const newTodos = [...this.state.Todos, {...itemInfo} ]
        this.setState({ Todos: newTodos });
    }
    deleteItem(id) {
        this.setState({ 
            Todos: this.state.Todos.filter(Todo => Todo.id !== id) 
        })
    }
    editItem(id, itemInfo){
        const updatedTodos = this.state.Todos.map((Todo) => {
            if(Todo.id === id){
                return {...Todo, item: itemInfo}
            }
            return Todo
        });
        this.setState({Todos: updatedTodos});
    }
    render() {
        const Todos = this.state.Todos.map((Todo) => {
            return <TodoItem 
            key={Todo.id} 
            id={Todo.id}
            item={Todo.item} 
            editItem = {this.editItem}
            deleteItem = {this.deleteItem} />
        })
        return (
            <section className='TodoList'>
                <h1>Todo List<span>A Simple React App</span></h1>
                <div className='TodoList-Container'>
                    { Todos }
                </div>
                <NewTodoForm addItem={this.addItem} />
            </section>
        );
    }
}

export default TodoList;