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

    this.deleteItem = this.deleteItem.bind(this);
    this.savePost = this.savePost.bind(this);
  }

  updateData = (headText, bodyText) => { // Принять текст и записать его в стейт
    let newPostData = {
      head: headText,
      text: bodyText,
      id: this.state.noPost,
    }

    this.setState(prevState => ({
      base: [...prevState.base, newPostData],
      noPost: prevState.noPost + 1
    }))
  }

  savePost(headText, bodyText, id) { // Принять текст и сохранить
    let arr = this.state.base;
    let changedPost = {
      head: headText,
      text: bodyText,
      id: id,
    }
    arr.splice(id, 1, changedPost);
    this.setState({ base: arr });
  }

  thisPost(index) { // выбор нужного элемента
    return this.state.base.findIndex(x => x.id === index);
  }

  deleteItem(index) { // удалить элемент
    let noItem = this.thisPost(index);
    let arr = this.state.base;
    arr.splice(noItem, 1);
    this.setState({ base: arr });
  }

  render() {
    const posts = this.state.base.map((post) =>
      <Post 
        key = { post.id }
        headText = { post.head }
        bodyText = { post.text }
        indexPost = { post.id }
        deleteItem = { this.deleteItem }
        savePost = { this.savePost }
      />
    );
    return (
      <div className="App">
        <header className="header">
          <h3 className="header__logo">Project #1 - ToDo</h3>
          <span className="header__info">React.js</span>
        </header>
        <div className="container">
          <AddNew 
            updateData = { this.updateData } 
            idPost = { this.state.noPost } 
          />
          <div className="row">
            { posts }
          </div>
        </div>
      </div>
    );
  }
}

export default App;