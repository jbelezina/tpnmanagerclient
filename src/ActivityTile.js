import React, { Component } from 'react';
import './css/ActivityTile.css';

class ActivityTile extends Component {  

    render(){

      return (
        <div className="activityTile text-white mb-3 bg-primary">
          <div>
            <div><i className="fal fa-bullseye"></i></div>
            <div>Nazwa</div>
          </div>
        </div>
      );
    }
}

export default ActivityTile;
