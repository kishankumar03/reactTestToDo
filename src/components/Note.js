import React, { Component } from 'react';

class Note extends Component {

    render() {
      return(
        <div className="note" onClick= {this.props.selectMethod}>
          {this.props.text} <div className="btn" onClick={this.props.deleteMethod}>x</div>
        </div>
    );
  }
}

export default Note;
