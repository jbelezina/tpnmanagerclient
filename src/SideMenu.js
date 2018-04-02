import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/SideMenu.css';
class SideMenu extends Component {  
  render() {
    
    let menuItemsStyle = {
      width: '80px',
      height: '100vh',
      backgroundColor: 'white',
      borderRight: '2px solid',
      borderColor: '#E8E8E8',
      color: 'lightgrey',
      position: 'fixed',
      opacity: '1',
      textAlign: 'center',
      fontSize: '8px',
    }

    let icon = {
      align: 'left',
      width: '100%',
      margin: '0px 0px 0px 0px',
      padding: '10px 0px 10px 0px',
      alignContent:'center',
    }

    return (
      <div style={menuItemsStyle}>
        <div style={{marginTop:'141px'}}>
          <div className="sideMenuItem">
            <Link to="/">
              <hr/>
                <div style={icon}>
                  <div style={{marginLeft:'18px', color:'teal'}}><i className="fas fa-chart-line fa-2x"></i></div>
                  <div style={{fontFamily: "'Barlow Semi Condensed', sans-serif",
      fontSize: '12px', paddingLeft:'17px', textDecoration: 'none', color: 'black'}}>Panel</div>
                </div>
              <hr/>
            </Link>
          </div>
          <div className="sideMenuItem">
            <Link to="/aktywnosci">
              <hr/>
                <div style={icon}>
                  <div style={{marginLeft:'18px', color:'teal'}}><i className="fas fa-play-circle fa-2x"></i></div>
                  <div style={{fontFamily: "'Barlow Semi Condensed', sans-serif",
      fontSize: '12px', paddingLeft:'13px', textDecoration: 'none', color: 'black' }}>Aktywności</div>
                </div>
              <hr/> 
            </Link>
          </div> 
        </div>
      </div>
    );
  }
}

export default SideMenu;
