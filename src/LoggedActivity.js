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
        borderColor: '#E8E8E8',
      }

      let innerArea = {
        height: "110px",
        width: "20%",
        borderRightStyle: 'solid',
        borderRightWidth: 'thin',
        borderColor: '#E8E8E8',
      }

      let header = {
        fontSize: '10px',
      }

      let iconHeader = {
        fontSize: '0px',
        marginTop: '0px',
      }

      let theWholeThing = {
        width: '100%',
        display: 'block',
        marginTop: '10px',
        marginBottom: '10px',
      }

      return (
        <div style={theWholeThing} className="ml-4 mr-4">
          <div className="row">
            <div className="col d-flex flex-row loggedActivity pl-0 pr-0">
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
