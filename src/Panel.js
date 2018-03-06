import React, { Component } from 'react';
import WidgetSmall from './WidgetSmall';
import WidgetMedium from './WidgetMedium';
import AddActivity from './AddActivity';

class Panel extends Component {

  render() {

    return (
      <div className="container-fluid">
          <AddActivity/>
        <div className="row d-flex justify-content-around">
          <div className="col">
            <div className="row">
              <WidgetSmall/>
              <WidgetSmall/>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <WidgetSmall/>
              <WidgetSmall/>
            </div>
          </div>
        </div>
        <div className="flex-row d-flex justify-content-around">
          <div className="col"><WidgetMedium/></div>
          <div className="col"><WidgetMedium/></div>
        </div>
        <div className="row">Row with a chart</div>
      </div>
    );
  }
}

export default Panel;
