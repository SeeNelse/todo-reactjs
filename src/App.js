import React, { Component } from 'react';
import './css/App.css';
import AddNew from './components/addNew';
import Post from './components/createPost';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      base: [],
      noPost: 0,
    }

  }

  updateData = (headText, bodyText) => {
    console.log('updateData')

    let newPostData = {
      head: headText,
      text: bodyText,
      id: this.state.noPost,
    }

    this.setState(prevState => ({
      base: [...prevState.base, newPostData],
      noPost: prevState.noPost + 1
    }))

    console.log(this.state.noPost)
  }

  render() {
    const posts = this.state.base.map((post) =>
      <Post key = { post.id } headText = { post.head } bodyText = { post.text } />
    );
    return (
      <div className="App">
        <header className="header">
          <h3 className="header__logo">Project #1 - ToDo</h3>
          <span className="header__info">React.js</span>
        </header>
        <div className="container">
          <AddNew updateData = {this.updateData} idPost = {this.state.noPost} />
          <div className="row">
            {posts}
          </div>
        </div>
      </div>
    );
  }
}

export default App;