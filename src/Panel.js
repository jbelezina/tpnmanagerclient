import React, { Component } from 'react';
import WidgetSmall from './WidgetSmall';
import WidgetMedium from './WidgetMedium';
import AddActivity from './AddActivity';

class Panel extends Component {

  render() {

    return (
      <div>
        <div className="row">
          <div className="offset-lg-1 col-lg-2 ">
              <WidgetSmall/>
          </div>
          <div className="col-lg-2  ">
              <WidgetSmall/>
          </div>
          <div className="offset-lg-1 col-lg-2 ">
              <WidgetSmall/>
          </div>
          <div className="col-lg-2">
              <WidgetSmall/>
          </div>
        </div>
        <div className="row">
          <div className="offset-lg-1 col-lg-4 offset-lg-1"><WidgetMedium name='Ostatnio zalogowane' modalName='Dodaj Aktywność'><AddActivity/></WidgetMedium></div>
          <div className="offset-lg-1 col-lg-4 offset-lg-1"><WidgetMedium name='Ostatnie zadania' modalName='Dodaj Zadanie'><WidgetSmall/></WidgetMedium></div>
        </div>
        <div className="row">Row with a chart</div>
      </div>
    );
  }
}

export default Panel;
