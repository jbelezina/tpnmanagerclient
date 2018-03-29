import React, { Component } from 'react';

class NavBar extends Component {
  render() {

    let navStyle = {
      fontFamily: "'Barlow Semi Condensed', sans-serif",
      position: 'fixed',
      zIndex: '2',
      height: '50px',
      width: '100%',
      marginTop: '5px',
      marginBottom: '10px',
      fontSize: '20px',
      color: 'black',
      padding: '0px 0px 0px 0px',
      margin: '0px 0px 0px 0px',
      backgroundColor: '#FFFFFF',
      borderBottom: 'solid 2px',
      borderColor: '#E8E8E8',
      color: '#000000',
    }

    let line = {
      position: 'fixed',
      width: '65px',
      height: '100%',
      borderRight: 'solid 2px #E8E8E8',
      paddingRight: '10px',
    }

    return (
        <nav style={navStyle}>
          <div style={line}></div>
          <div style={{display:'inline', float:'left', marginLeft: '125px', marginTop:'5px'}}>
            TPN Manager
          </div>
        </nav>
    );
  }
}

export default NavBar;
