import React, { Component } from 'react';
import './css/LoggedActivity.css';
import 'font-awesome/css/font-awesome.css';

class LoggedActivity extends Component {  

    render(){

      let style = {
        width:"100%",
      }

      let iconArea = {
        height: "110px",
        width: "100px",
        borderRightStyle: 'solid',
        borderRightWidth: 'thin',
        borderColor: 'lightgrey',
      }

      let header = {
        fontSize: '10px',
      }

      return (
        <div className="container">
          <div className="row">
            <div className="col loggedActivity pl-0 m-3">
              <div style={iconArea}>
                <div style={header}><br/>Pobranie</div>
                <div className="dropdown-divider"></div>
                <div><i className="far fa-address-book fa-2x"></i></div>
                <div>Name</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default LoggedActivity;
