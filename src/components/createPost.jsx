import React, { Component } from 'react';

class CreatePost extends Component {
  constructor (props) {
    super(props);
    this.state = {
      
    }

    this.remove = this.remove.bind(this);
  }

  remove() {
    this.props.deleteItem(this.props.indexPost);
  }

  render() {
    return (
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              { this.props.headText ? <h5 className="card-title">{ this.props.headText }</h5> : null }
              <p className="card-text">{ this.props.bodyText }</p>
              <img src="delete.png" alt="" onClick = { this.remove } className="card__delete"/>
            </div>
          </div>
        </div>
    );
  }
}

export default CreatePost;