import React, { Component, Fragment } from 'react';
import Header from './Components/Header';
import List from './Components/List';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            listItems: ['Hit the gym', 'Pay bills', 'Meet George', 'Buy eggs', 'Read a book', 'Organize office'],
            inputValue: ''
        }
    }

    onInputChange = inputValue => {
        this.setState({inputValue})
    }

    removeItem = item => {
        const {listItems} = this.state;
        listItems.splice(listItems.indexOf(item), 1);
        this.setState({listItems})
    }

    addItem = item => {
        const {listItems} = this.state;
        if(item && !listItems.includes(item)) {
            listItems.push(item);
            this.setState({listItems: listItems,
                           inputValue: ''})
        }
    }


  render() {
    return (
        <Fragment>
            <Header onInputChange={this.onInputChange} addItem={this.addItem} value={this.state.inputValue} />
            <List listItems={this.state.listItems} removeItem={this.removeItem} />
        </Fragment>
    );
  }
}

export default App;
