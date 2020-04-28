import React, {Component} from 'react';
import './item-add-form.css';

class ItemAddForm extends Component {
    state = {
        value: ''
    };
    inputHandler = e => {
        this.setState({value: e.target.value})
    };
    onSubmitForm = e => {
        e.preventDefault();
        this.props.addItem(this.state.value);
        this.setState({value: ''})
    }
    render() {
        return (
            <form className='item-add-form d-flex' onSubmit={this.onSubmitForm}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="What do you wont make?"
                    value={this.state.value}
                    onChange={this.inputHandler}
                />
                <button
                    className='btn btn-outline-secondary'
                    type="submit"
                >
                    Add
                </button>
            </form>
        );
    }
}

export default ItemAddForm;