import React, { Component } from 'react';
import './css/ActivityTile.css';
import 'font-awesome/css/font-awesome.css';

class ActivityTile extends Component {  

    render(){

      return (
        <div className="activityTile text-white mb-3">
          <div>
            <div><i class={this.props.icon}></i></div>
            <div>{this.props.name}</div>
          </div>
        </div>
      );
    }
}

export default ActivityTile;
