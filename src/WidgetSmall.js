import React, { Component } from 'react';
import './css/Widget.css';

class WidgetSmall extends Component {  

    render(){
      return (
        <div className="widget widget-sml card mx-auto text-primary">
          <div class="card-header text-center align-middle"><h5>Success card title</h5></div>
          <div className="card-body">
            <p className="card-text">2 <span><i class="fas fa-exclamation"></i></span></p>
          </div>
        </div>
      );
    }
}

export default WidgetSmall;
