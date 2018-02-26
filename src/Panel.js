import React, { Component } from 'react';
import WidgetSmall from './WidgetSmall';
import AddActivity from './AddActivity';

class Panel extends Component {

  render() {

    let addActivityButtonStyle = {
      padding: '20px 20px 20px 20px',
      margin: '30px 40px 30px 40px',
      backgroundColor: '#04a05d',
      color: '#EEE7E7',
      fontFamily: "'Barlow Semi Condensed', sans-serif",
    }

    return (
      <div className="container-fluid">
        <div className="col-12">
          <AddActivity/>
        </div>
        <div className="row d-flex justify-content-around">
          <WidgetSmall/>
          <WidgetSmall/>
          <WidgetSmall/>
          <WidgetSmall/>
        </div>
        <div className="row">Row of 2 large widgets</div>
        <div className="row">Row with a chart</div>
      </div>
    );
  }
}

export default Panel;
