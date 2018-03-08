import React, { Component } from 'react';
import './css/ActivityTile.css';
import 'font-awesome/css/font-awesome.css';

class ActivityTile extends Component {  

    render(){

      let style;
      if (this.props.isSelected) {
        style = {
          backgroundColor: '#556C8E',  
        }
      } else { 
        style = {
          backgroundColor: '#EEE7E7',
        }
      }

      return (
        <div className="activityTile text-white mb-3" style={style}>
          <div>
            <div><i class={this.props.icon}></i></div>
            <div>{this.props.name}</div>
          </div>
        </div>
      );
    }
}

export default ActivityTile;
