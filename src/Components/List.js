import React, { Component } from 'react';
import ListItem from './ListItem';


class List extends Component {
    handleClick = (e)=> {
        e.target.classList.toggle('checked');
    }

    render() {
        const {listItems} = this.props;
        return (
            <ul id="myUL" onClick={this.handleClick}>
                {listItems.map((listItem, i) => <ListItem key={listItem + i} listItem = {listItem}  removeItem={this.props.removeItem}/>)}
            </ul>
        );
    }
}

export default List;