import React, { Component } from 'react';
import './css/ActivityTile.css';
import 'font-awesome/css/font-awesome.css';

class ActivityTile extends Component {  

    constructor(){
      super();
      this.selectTile = this.selectTile.bind(this);
    }

    selectTile(){
      this.props.selectTile(this.props.index); 
    }

    render(){
      
      let header = {
        fontSize: '10px',
      }

      return (
        <div className="activityTile" onClick={this.selectTile}>
          <div>
            <div style={header}><br/>{this.props.data.category}</div>
            <div className="dropdown-divider"></div>
            <div><i className={this.props.data.icon}></i></div>
            <div>{this.props.data.name}</div>
          </div>
        </div>
      );
    }
}

export default ActivityTile;
