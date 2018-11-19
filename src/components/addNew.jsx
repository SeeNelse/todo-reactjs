import React, { Component } from 'react';

class AddNew extends Component {
  constructor (props) {
    super(props);
    this.state = {
      head: '',
      text: '',
    }


    this.addItem = this.addItem.bind(this);
    this.addHead = this.addHead.bind(this);
    this.addText = this.addText.bind(this);
  }

  addItem(event) {
    if (this.state.text) { // проверка на наличие текста в текстареа
      event.target.previousElementSibling.classList.remove('is-invalid');
      this.props.newData(this.state.head, this.state.text)
      this.setState({ head: '', text: '' })
    } else {
      event.target.previousElementSibling.classList.add('is-invalid');
    }
  }

  addHead(event) {
    this.setState({ head: event.target.value })
  }

  addText(event) {
    this.setState({ text: event.target.value })
  }

  render() {
    return (
      <div className="row justify-content-md-center">
        <form className="form col-lg-6">
          <div className="form-group">
            <input type="text" className="form-control form__head" value = { this.state.head } onChange={ this.addHead } placeholder="Заголовок" />
            <textarea className="form-control form__text" rows="3" value = { this.state.text } onChange={ this.addText } placeholder="Текст (обязательно)"></textarea>
            <button type="button" className="btn btn-dark" onClick={ this.addItem } >Новая задача</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddNew;