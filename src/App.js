import React, { Component } from 'react';
import './css/App.css';
import AddNew from './addNew';
import Post from './post';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      base: {},
      noPost: 0,
    }

  }

  updateData = (value1, value2) => {
    console.log('work!')
    this.setState({ noPost: this.state.noPost++ })
    this.setState({ base: {
      // 1: {
        head: value1,
        text: value2,
      // }
    } })
    console.log(this.state.base.id)
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h3 className="header__logo">Project #1 - ToDo</h3>
          <span className="header__info">React.js</span>
        </header>
        <div className="container">
          <AddNew updateData={this.updateData} />
          <div className="row">
            <Post headText = { this.state.base.head } bodyText = { this.state.base.text } />
          </div>
        </div>
      </div>
    );
  }
}

export default App;