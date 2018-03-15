import React, { Component } from 'react';
import './css/LoggedActivity.css';
import 'font-awesome/css/font-awesome.css';

class LoggedActivity extends Component {  

    render(){
      let iconArea = {
        height: "110px",
        width: "100px",
        borderRightStyle: 'solid',
        borderRightWidth: 'thin',
        borderColor: 'lightgrey',
      }

      let innerArea = {
        height: "110px",
        width: "35%",
        borderRightStyle: 'solid',
        borderRightWidth: 'thin',
        borderColor: 'lightgrey',
      }

      let header = {
        fontSize: '10px',
      }

      let iconHeader = {
        fontSize: '15px',
        marginTop: '-15px',
      }

      return (
        <div className="container">
          <div className="row">
            <div className="col d-flex flex-row loggedActivity pl-0 pr-0 m-3">
              <div style={iconArea}>
                <div style={header}><br/>Pobranie</div>
                <div className="dropdown-divider"></div>
                <div><i className="far fa-address-book fa-2x"></i></div>
                <div>Name</div>
              </div>
              <div style={innerArea}>
                <div style={iconHeader}><br/><i className="far fa-clock"></i></div>
                <div className="dropdown-divider"></div>
                <div>blablabla</div>
              </div>
              <div style={innerArea}>
                <div style={iconHeader}><br/><i className="far fa-clock"></i></div>
                <div className="dropdown-divider"></div>
                <div>blablabla</div>
              </div>
              <div style={innerArea}>
                <div style={iconHeader}><br/><i className="far fa-clock"></i></div>
                <div className="dropdown-divider"></div>
                <div>blablabla</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default LoggedActivity;
