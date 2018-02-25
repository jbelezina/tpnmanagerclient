import React, { Component } from 'react';
import './css/WidgetSmall.css';

class WidgetSmall extends Component {  

    render(){

      let style = {
        maxWidth: '18rem'
      }

      let classes = "widget card text-white bg-primary mb-3";

      return (
        <div className={classes} style={style}>
          <div className="card-body">
            <h5 className="card-title">Success card title</h5>
            <p className="card-text">2</p>
          </div>
        </div>
      );
    }
}

export default WidgetSmall;
