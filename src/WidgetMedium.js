import React, { Component } from 'react';
import './css/Widget.css';

class WidgetMedium extends Component {  

    render(){
      return (
        <div>
          <div className="widget widget-md card mx-auto">
            <div className="card-header text-center text-primary align-middle"><h5>{this.props.name}</h5></div>
            <div className="card-body">
              <p>...</p>
            </div>
          </div>
        </div>
      );
    }
}

export default WidgetMedium;
