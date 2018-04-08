import React, { Component } from 'react';
import './css/LoggedActivity.css';
import 'font-awesome/css/font-awesome.css';
import moment from 'moment';

class LoggedActivity extends Component {  

    render(){

      let categoryIcon;

      switch (this.props.data.event_type) {
        case 'tpn':
            categoryIcon = "fas fa-tint fa-2x";
            break;
      }

      let iconArea = {
        minHeight: "110px",
        width: "100px",
        borderRightStyle: 'solid',
        borderRightWidth: 'thin',
        borderColor: '#E8E8E8',
      }

      let innerArea = {
        height: "110px",
        width: "33%",
        borderRightStyle: 'solid',
        borderRightWidth: 'thin',
        borderColor: '#E8E8E8',
      }

      let header = {
        fontSize: '10px',
      }

      let iconHeader = {
        marginTop: '-15px'
      }

      let theWholeThing = {
        width: '100%',
        marginTop: '10px',
        marginBottom: '10px',
      }

      let comment;
      if (this.props.data.comment) {
        comment = (
          <div>
            <i className="fas fa-comments"></i>
            <span className="m-2">
              {this.props.data.comment}
            </span> 
          </div>
        ) 
      }
      
      return (
        <div style={theWholeThing} className="ml-4 mr-4">
          <div className="row">
            <div className="col d-flex flex-row loggedActivity pl-0 pr-0">
              <div style={iconArea}>
                <div style={header}><br/>{this.props.data.event_category}</div>
                <div className="dropdown-divider"></div>
                <div><i className={categoryIcon}></i></div>
                <div>{this.props.data.event_type}</div>
              </div>
              <div style={innerArea}>
                <div style={iconHeader}><br/><i className="far fa-clock"></i></div>
                <div className="dropdown-divider"></div>
                <div>Start:{moment(this.props.data.time_start).format('DD-MM-YYYY, HH:mm')}</div>
                <div>Stop:{moment(this.props.data.time_stop).format('DD-MM-YYYY, HH:mm')}</div>
              </div>
              <div style={innerArea}>
                <div style={iconHeader}><br/><i className="far fa-question-circle"></i></div>
                <div className="dropdown-divider"></div>
                <div>{this.props.data.product}</div>
                {comment}
              </div>
              <div style={innerArea}>
                <div style={iconHeader}><br/><i className="far fas fa-tachometer-alt"></i></div>
                <div className="dropdown-divider"></div>
                <div>Ilość:{this.props.data.values[0]}</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default LoggedActivity;
