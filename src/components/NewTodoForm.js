import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css'

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addItem({...this.state, id: uuidv4(), isCompleted: false});
        this.setState({ item: "" });
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    render() {
        return (
            <div>
                <form className='NewTodoForm'>
                    <input
                        type="text"
                        name="item"
                        id="item"
                        value={this.state.item}
                        placeholder="Add a New Todo Item"
                        onChange={this.handleChange} />

                    <button
                        onClick={this.handleSubmit}>
                        Save
                    </button>
                </form>
            </div>
        );
    }
}

export default NewTodoForm;