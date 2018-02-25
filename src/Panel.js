import React, { Component } from 'react';
import WidgetSmall from './WidgetSmall';
import AddActivity from './AddActivity';

class Panel extends Component {

  render() {

    return (
      <div className="container-fluid">
        <div className="row d-flex justify-content-around">
          <WidgetSmall/>
          <WidgetSmall/>
          <WidgetSmall/>
          <WidgetSmall/>
        </div>
        <div className="row d-flex justify-content-around">
          <AddActivity/>
        </div>
        <div className="row">Row of 2 large widgets</div>
        <div className="row">Row with a chart</div>
      </div>
    );
  }
}

export default Panel;
