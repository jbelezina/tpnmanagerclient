import React, { Component } from 'react';
import WidgetSmall from './WidgetSmall';
import WidgetMedium from './WidgetMedium';
import AddActivity from './AddActivity';

class Panel extends Component {

  render() {

    let style = {
      marginTop : '30px',
    }
    return (
      <div>
        <div className="row">
          <div className="offset-lg-1 col-lg-9">
            <button style={ style } className="btn btn-primary btn-lg btn-block">Dodaj aktywność</button>
          </div>
        </div>
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
