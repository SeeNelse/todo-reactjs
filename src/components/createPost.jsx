import React, { Component } from 'react';

class CreatePost extends Component {
  constructor (props) {
    super(props);
    this.state = {
      
    }
  }


  render() {
    return (
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{ this.props.headText }</h5>
              <p className="card-text">{ this.props.bodyText }</p>
            </div>
          </div>
        </div>
    );
  }
}

export default CreatePost;