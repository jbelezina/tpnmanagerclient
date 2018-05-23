import React, { Component } from 'react';
import './css/LoggedActivity.css';
import 'font-awesome/css/font-awesome.css';
import moment from 'moment';

class LoggedActivity extends Component {  

    render(){

      let categoryIcon;
      let eventType;
      switch (this.props.loggedEvent.event_type) {
        case 'tpn':
            categoryIcon = "fas fa-tint fa-2x";
            eventType = 'TPN';
            break;
        case 'drip':
            categoryIcon = "fas fa-tint fa-2x";
            eventType = 'Kroplówka';
            break;
        case 'drug':
            categoryIcon = "fas fa-pills fa-2x";
            eventType = "Leki";
            break;
        case 'colostomy':
            categoryIcon = 'far fa-dot-circle fa-2x',
            eventType = "Kolostomia";
            break;
        case 'ilestomy':
            categoryIcon = 'far fa-dot-circle fa-2x',
            eventType = "Ilestomia";
            break;
        case 'urine':
            categoryIcon = 'fas fa-flask fa-2x',
            eventType = "Mocz";
            break;    
      }
      

      let iconArea = {
        minHeight: "110px",
        width: "110px",
        borderRightStyle: 'solid',
        borderRightWidth: 'thin',
        borderColor: '#E8E8E8',
        fontSize: '12px',
      }

      let innerArea = {
        height: "110px",
        width: "33%",
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
      if (this.props.loggedEvent.comment) {
        comment = (
          <div>
            <span className="m-3 p-2" style={{fontSize:'12px'}}>
              komentarz: {this.props.loggedEvent.comment}
            </span> 
          </div>
        ) 
      }

      let time_start;
      if (this.props.loggedEvent.time_start) {
        time_start = <div>Start: {moment(this.props.loggedEvent.time_start).format('DD-MM-YYYY, HH:mm')}</div>
      } else {
        time_start = <div></div>
      }
      
      return (
        <div style={theWholeThing} className="ml-4 mr-4">
          <div className="row">
            <div className="col d-flex flex-row loggedActivity pl-0 pr-0">
              <div style={iconArea}>
                <div style={header}><br/>{eventType}</div>
                <div className="dropdown-divider"></div>
                <div><i style={{marginTop:'10px'}} className={categoryIcon}></i></div>
                <div>{eventType}</div>
              </div>
              <div style={innerArea}>
                <div style={iconHeader}><br/><i className="far fa-clock"></i></div>
                <div className="dropdown-divider"></div>
                {time_start}
                <div>Stop: {moment(this.props.loggedEvent.time_stop).format('DD-MM-YYYY, HH:mm')}</div>
              </div>
              <div style={innerArea}>
                <div style={iconHeader}><br/><i className="far fa-question-circle"></i></div>
                <div className="dropdown-divider"></div>
                <div>{this.props.loggedEvent.product}</div>
                {comment}
              </div>
              <div style={innerArea}>
                <div style={iconHeader}><br/><i className="far fas fa-tachometer-alt"></i></div>
                <div className="dropdown-divider"></div>
                <div>Ilość: {this.props.loggedEvent.values[0]["value"]} {this.props.loggedEvent.values[0]["measure"]}</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default LoggedActivity;
