import React, { Component } from 'react';
import './css/WidgetSmall.css';

class WidgetSmall extends Component {  

    render(){

      let style = {
        maxWidth: '18rem'
      }

      return (
        <div className="widget card" style={style}>
          <div class="card-header text-center align-middle"><h5>Success card title</h5></div>
          <div className="card-body">
            <p className="card-text">2 <span><i class="fas fa-exclamation"></i></span></p>
          </div>
        </div>
      );
    }
}

export default WidgetSmall;
