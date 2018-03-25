import React, { Component } from 'react';

class NavBar extends Component {
  render() {

    let navStyle = {
      fontFamily: "'Barlow Semi Condensed', sans-serif",
      height: '50px',
      marginTop: '5px',
      marginLeft: '15px',
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

    let brandStyle = {
      padding: '100px',
    }

    return (
        <nav style={navStyle}>
          <div className="p-2 ml-4">
            TPN Manager
          </div>
        </nav>
    );
  }
}

export default NavBar;
