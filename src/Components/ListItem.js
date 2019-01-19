import React, { Component } from 'react';


class ListItem extends Component {
    handleClick =(e)=>{
       let itemToRemove = this.props.listItem;
       this.props.removeItem(itemToRemove);
    }
    render() {
        return (
            <li>{this.props.listItem}<span className='close' onClick={this.handleClick}>x</span></li>
        );
    }
}

export default ListItem;