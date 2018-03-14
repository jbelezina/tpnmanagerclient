import React, { Component } from 'react';
import './css/ActivityTile.css';
import 'font-awesome/css/font-awesome.css';

class ActivityTile extends Component {  

    clickEvent(){
      this.props.setActiveTile(this.props.index);
    }

    render(){

      let style;
      if (this.props.isSelected) {
        style = {
          backgroundColor: '#2C3E50',  
        }
      } else { 
        style = {
          backgroundColor: '#EEE7E7',
        }
      } 

      return (
        <div className="activityTile text-white mb-3" onClick={this.clickEvent.bind(this)} style={style}>
          <div>
            <div><i className={this.props.icon}></i></div>
            <div>{this.props.name}</div>
          </div>
        </div>
      );
    }
}

export default ActivityTile;
