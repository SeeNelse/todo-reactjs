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

  componentWillMount() {
    if (localStorage.getItem('toDos') === null || localStorage.getItem('noPost') === null) {
      return;
    }
    this.getDataFromStorage();
  }

  setToLocalStorage() {
    localStorage.setItem("toDos", JSON.stringify(this.state.base));
    localStorage.setItem("noPost", this.state.noPost);
  }

  getDataFromStorage() {
    this.setState({
      base: JSON.parse(localStorage.getItem('toDos')),
      noPost: +localStorage.getItem('noPost'),
    });
  }

  newData = (headText, bodyText) => { // Принять текст и записать его в стейт
    let newPostData = {
      head: headText,
      text: bodyText,
      id: this.state.noPost,
    }

    this.setState(prevState => ({
      base: [...prevState.base, newPostData],
      noPost: prevState.noPost + 1
    }), () => {
      this.setToLocalStorage();
    });
    
  }

  savePost(headText, bodyText, id) { // Принять текст и сохранить
    let thisPost = this.chosenPost(id)
    let arr = this.state.base;
    let changedPost = {
      head: headText,
      text: bodyText,
      id: id,
    }
    arr.splice(thisPost, 1, changedPost);
    this.setState({ base: arr }, () => {
      this.setToLocalStorage();
    });
  }

  chosenPost(index) { // выбор нужного элемента
    return this.state.base.findIndex(x => x.id === index);
  }

  deleteItem(index) { // удалить элемент
    let noItem = this.chosenPost(index);
    let arr = this.state.base;
    arr.splice(noItem, 1);
    this.setState({ base: arr }, () => {
      this.setToLocalStorage();
    });
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
            newData = { this.newData } 
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