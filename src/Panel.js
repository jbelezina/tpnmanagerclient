import React, { Component } from 'react';

class Panel extends Component {

  render() {

    return (
      <div className="container-fluid">
        <div className="row">Row of small widgets</div>
        <div className="row">Row of 2 large widgets</div>
        <div className="row">Row with a chart</div>
      </div>
    );
  }
}

export default Panel;
