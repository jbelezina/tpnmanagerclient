import React, { Component } from 'react';
import ActivityTile from './ActivityTile';
import LoggedActivity from './LoggedActivity';

class ActivityPage extends Component {

  render() {
    let style={
      backgroundColor: 'white',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderRadius: '5px',
      borderColor: 'lightgrey',    
      width: '100%',
      marginTop:'30px',
      paddingBottom:'20px',
      paddingTop: '15px',
      fontFamily: "'Barlow Semi Condensed', sans-serif",
      fontSize: '15px',
      fontColor: 'darkgrey',
    }
    return (
      
      <div>
        <div>
          <div className="row">
            <div style={style} className="offset-lg-1 col-lg-10 text-primary">
              <div className="m-3">Dodaj aktywność</div>
              <div className="d-flex flex-row ">
              <ActivityTile/>
              <ActivityTile/>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="row">
            <div style={style} className="offset-lg-1 col-lg-10 text-primary">
              <div className="m-3">Zalogowane aktywności</div>
              <div className="d-flex flex-row ">
              <LoggedActivity/>
              </div>
              <div className="d-flex flex-row ">
              <LoggedActivity/>
              </div>
              <div className="divider"></div>
              <div className="d-flex flex-row ">
              <LoggedActivity/>
              </div>
              <div className="d-flex flex-row ">
              <LoggedActivity/>
              </div>
              <div className="d-flex flex-row ">
              <LoggedActivity/>
              </div>
              <div className="d-flex flex-row ">
              <LoggedActivity/>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default ActivityPage;
