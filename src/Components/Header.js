import React, { Component } from 'react';


class Header extends Component {

    handleChange= (e) => {
        const value = e.target.value;
        this.props.onInputChange(value);
    }

    handleClick = (e) =>{
        const itemToAdd = this.props.value;
        this.props.addItem(itemToAdd);
    }
    render() {

        return (
            <div className="header">
                <h2>My To Do List</h2>
                <input type="text" placeholder="Title..." value={this.props.value} onChange={this.handleChange}/>
                <span className='addButton' onClick={this.handleClick}>Add</span>
            </div>
        );
    }
}

export default Header;
