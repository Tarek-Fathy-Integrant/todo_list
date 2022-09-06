import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item,
            isEditing: false
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }
    handleDelete() {
        console.log(this.props.id);
        this.props.deleteItem(this.props.id);
    }
    handleEdit(){
        this.setState({isEditing: true});
    }
    handleSave(evt){
        evt.preventDefault();
        this.props.editItem(this.state.item);
        this.setState({
            isEditing: false
        })
    }
    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value})
    }
    render() {
        let result;
        if (this.state.isEditing) {
            result =
                <div className='TodoItem'>
                    <form  onSubmit={this.handleSave}>
                        <input type="text" name="item" value={this.state.item} onChange={this.handleChange} />
                        <button>Save</button>
                    </form>
                </div>;
        }else{
            result = 
            <div className='TodoItem'>
                <span>{this.state.item}</span>
                <i onClick={this.handleEdit} className="fa-solid fa-pen-to-square"></i>
                <i onClick={this.handleDelete} className="fa-solid fa-trash"></i>
            </div>
        }
        return (
            result
        );
    }
}

export default TodoItem;