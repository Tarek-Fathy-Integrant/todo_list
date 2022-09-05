import React, { Component } from 'react';

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            isEditing: false
        }
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(){
        this.props.deleteItem(this.key);
    }
    handleEdit(){
        this.props.editItem(this.key);
    }
    render(){
        return(
            <div className='TodoItem'>
                <span>{this.props.item}</span>
                <i onClick={this.handleEdit}  className="fa-solid fa-pen-to-square"></i>
                <i onClick={this.handleDelete} className="fa-solid fa-trash"></i>
            </div>
        );
    }
}

export default TodoItem;