import React, { Component } from 'react';
import './css/ActivityTile.css';
import 'font-awesome/css/font-awesome.css';

class ActivityTile extends Component {  

    render(){
      
      let header = {
        fontSize: '10px',
      }

      return (
        <div className="activityTile">
          <div>
            <div style={header}><br/>Pobranie</div>
            <div className="dropdown-divider"></div>
            <div><i className="far fa-address-book fa-2x"></i></div>
            <div>Name</div>
          </div>
        </div>
      );
    }
}

export default ActivityTile;
