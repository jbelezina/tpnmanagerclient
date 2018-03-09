import React, { Component } from 'react';

class NavBar extends Component {
  render() {

    let navStyle = {
      fontFamily: "'Barlow Semi Condensed', sans-serif",
      height: '50px',
      marginTop: '5px',
      marginLeft: '15px',
      marginBottom: '10px',
    }

    let brandStyle = {
      paddingLeft: '50px',
      fontSize: '30px',
    }

    return (
        <nav className="text-white" style={navStyle}>
          <div className="navbar-brand" style={brandStyle} >TPN Manager</div>
        </nav>
    );
  }
}

export default NavBar;
