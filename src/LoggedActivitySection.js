import React, { Component } from 'react';
import LoggedActivity from './LoggedActivity';

class LoggedActivitySection extends Component {  
    render(){
      let style={
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderRadius: '5px',
        borderColor: '#E8E8E8',
        marginLeft: '130px',
        marginRight: '50px',
        marginTop: '40px',
        marginRight: '50px',    
        width: '100%',
        fontFamily: "'Barlow Semi Condensed', sans-serif",
        fontSize: '15px',
        fontColor: 'darkgrey',
      }
    
      return (
        <div className="row">
          <div style={style} className="text-primary">
            <div className="m-3 ml-4">Zalogowane aktywności</div>
            <hr/>
            <div className="d-flex flex-row flex-wrap m-5">
              <LoggedActivity/>
              <LoggedActivity/>
              <LoggedActivity/>
              <LoggedActivity/>
              <LoggedActivity/>
              <LoggedActivity/>
            </div>
          </div>
        </div>
    )     
  }
}

export default LoggedActivitySection;
