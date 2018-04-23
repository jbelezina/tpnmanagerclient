import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/SideMenu.css';
class SideMenu extends Component {  
  
  constructor(){
    super();
    this.state = {
      selected: 2,
    }
  }

  render() {
    
    let menuItemsStyle = {
      width: '80px',
      height: '100vh',
      backgroundColor: '#212121',
      borderRight: '2px solid',
      borderColor: '#E8E8E8',
      position: 'fixed',
      color: 'white',
      opacity: '1',
      textAlign: 'center',
      fontSize: '8px',
      zIndex: '2'
    }

    let icon = {
      align: 'left',
      width: '100%',
      margin: '0px 0px 0px 0px',
      padding: '10px 0px 10px 0px',
      alignContent:'center',
    }

    let topline = {
      width: '80px',
      height: '49px',
      borderBottom: 'solid 2px #E8E8E8',
      position: 'fixed',
      backgroundColor: "#5fa6bf",
    }

    let extendedMenu = {
      width: '200px',
      height: '100vh',
      marginTop: '49px',
      marginLeft: '80px',
      borderRight: 'solid 2px #E8E8E8',
      position: 'fixed',
      backgroundColor: 'white',
      visibility: 'hidden',
    }

    return (
      <div>
      <div style={extendedMenu}>
      Hello
      </div>
      <div style={menuItemsStyle}>
        <div style={topline}></div>
        <div style={{marginTop:'141px'}}>
        <Link to="/">
          <div className="sideMenuItem">
              <hr/>
                <div style={icon}>
                  <div style={{marginLeft:'18px', color:'gray'}}><i className="fas fa-chart-line fa-2x"></i></div>
                  <div style={{fontFamily: "'Barlow Semi Condensed', sans-serif",
      fontSize: '11px', paddingLeft:'17px', textDecoration: 'none', color: 'gray'}}>Panel</div>
                </div>
              <hr/>
          </div>
        </Link>
          <div className="sideMenuItem">
            <Link to="/aktywnosci">
              <hr/>
                <div style={icon}>
                  <div style={{marginLeft:'18px', color:'gray'}}><i className="fas fa-play-circle fa-2x"></i></div>
                  <div style={{fontFamily: "'Barlow Semi Condensed', sans-serif",
      fontSize: '11px', paddingLeft:'13px', textDecoration: 'none', color: 'gray' }}>Aktywności</div>
                </div>
              <hr/> 
            </Link>
          </div>
          <div className="sideMenuItem">
            <Link to="/ustawienia">
              <hr/>
                <div style={icon}>
                  <div style={{marginLeft:'18px', color:'gray'}}><i className="fas fa-cog fa-2x"></i></div>
                  <div style={{fontFamily: "'Barlow Semi Condensed', sans-serif",
      fontSize: '11px', paddingLeft:'13px', textDecoration: 'none', color: 'gray' }}>Ustawienia</div>
                </div>
              <hr/> 
            </Link>
          </div> 
        </div>
      </div>
      </div>
    );
  }
}

export default SideMenu;
