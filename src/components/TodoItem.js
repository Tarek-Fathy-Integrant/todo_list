import React, { Component } from 'react';

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(){
        this.props.deleteItem(this.props.key);
    }
    handleEdit(){
        this.props.editItem(this.props.key);
    }
    render(){
        return(
            <div className='TodoItem'>
                <span>{this.props.item}</span>
                <i onClick={this.handleEdit}  class="fa-solid fa-pen-to-square"></i>
                <i onClick={this.handleDelete} class="fa-solid fa-trash"></i>
            </div>
        );
    }
}

export default TodoItem;