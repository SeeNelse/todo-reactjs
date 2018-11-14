import React, { Component } from 'react';

class AddNew extends Component {
  constructor (props) {
    super(props);
    this.state = {
      head: '',
      text: '123',
      id: '',
    }


    this.addItem = this.addItem.bind(this);
    this.addHead = this.addHead.bind(this);
    this.addText = this.addText.bind(this);
  }

  addItem(event) {
    this.props.updateData(this.state.head, this.state.text)
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
            <input type="text" className="form-control form__head" onChange={ this.addHead } placeholder="Заголовок" />
            <textarea className="form-control form__text" rows="3" onChange={ this.addText } placeholder="Новая задача (обязательно)"></textarea>
            <button type="button" className="btn btn-dark" onClick={ this.addItem } >Запостить!</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddNew;