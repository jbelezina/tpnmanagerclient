import React, { Component } from 'react';

class NavBar extends Component {
  render() {

    let navStyle = {
      fontFamily: "'Barlow Semi Condensed', sans-serif",
      fontSize: '30px',
      height: '10vh',
      color: '#556C8E',
      marginTop: '25px',
      marginLeft: '15px',
    }

    return (
        <nav style={navStyle}>
          <p>TPN Manager</p>
        </nav>
    );
  }
}

export default NavBar;
