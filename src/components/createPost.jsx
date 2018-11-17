import React, { Component } from 'react';

class Post extends Component {
  constructor (props) {
    super(props);
    this.state = {
      editMode: false,
      editHead: this.props.headText,
      editText: this.props.bodyText,
    }

    this.remove = this.remove.bind(this);
    this.editSave = this.editSave.bind(this);
    this.editHeadFunc = this.editHeadFunc.bind(this);
    this.editTextFunc = this.editTextFunc.bind(this);
  }

  remove() {
    this.props.deleteItem(this.props.indexPost);
  }

  editSave() {
    this.setState({ editMode: !this.state.editMode, });
    if (this.state.editMode) {
      this.props.savePost(this.state.editHead, this.state.editText, this.props.indexPost)
    }
  }
  editHeadFunc(event) {
    this.setState({ editHead: event.target.value })
  }
  editTextFunc(event) {
    this.setState({ editText: event.target.value })
  }


  render() {
    return (
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              { 
                this.state.editMode ? 
                <input type="text" className="form-control form__head" value = { this.state.editHead } onChange={ this.editHeadFunc } placeholder="Заголовок" /> : 
                this.props.headText ? 
                  <h5 className="card-title">{ this.props.headText }</h5> : 
                  null 
              }
              { 
                this.state.editMode ? 
                <textarea className="form-control form__text" value = { this.state.editText } onChange={ this.editTextFunc } rows="2" placeholder="Текст (обязательно)"></textarea> : 
                <p className="card-text">{ this.props.bodyText }</p> 
              }
              { 
                this.state.editMode ? 
                <button type="button" className="btn btn-dark" onClick = { this.editSave } >Сохранить</button> : 
                null 
              }
              <img src="delete.png" alt="" onClick = { this.remove } className="card__delete"/>
              { 
                this.state.editMode ? 
                null : 
                <img src="edit.png" alt="" onClick = { this.editSave } className="card__edit"/> 
              }
            </div>
          </div>
        </div>
    );
  }
}

export default Post;