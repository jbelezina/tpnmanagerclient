import React, { Component } from 'react';

class InVsOut extends Component {  

    render(){

    let style={
      backgroundColor: 'white',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderRadius: '5px',
      borderColor: '#E8E8E8',
      marginLeft: '150px',
      marginTop: '85px',
      marginRight: '50px',    
      width: '90vw',
      fontFamily: "'Barlow Semi Condensed', sans-serif",
      fontSize: '15px',
      fontColor: 'darkgrey',
    }
    
    
    return (
      <div className="row">
        <div style={style} className="text-primary">
          <div className="m-3 ml-4">Przyjęcia vs wydalenia</div>
          <div className="dropdown-divider"></div>
          <div className="pt-4 pb-4">
              Content
          </div>
        </div>
      </div>
    )     
  }
}

export default InVsOut;
