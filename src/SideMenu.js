import React, { Component } from 'react';
import './css/SideMenu.css';
import { Link } from 'react-router-dom';
class SideMenu extends Component {  
  render() {

    let sideMenuStyle = {
      height: '100vh',
      width: '70px',
      padding: '0px 0px 0px 0px',
    }
    
    let menuItemsStyle = {
      position: 'fixed',
      marginTop: '30px',
      height: '100%',
      padding: '0px 0px 0px 0px',
      opacity: '1',
      textAlign: 'center',
    }

    return (
      <div style={sideMenuStyle}>
        <div style={menuItemsStyle}>
          <ul className="nav flex-column">
            <li className="nav-item">
              <span className="nav-link"><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Panel</Link></span>
            </li>
            <li className="nav-item">
              <span className="nav-link"><Link to="/aktywnosci" style={{ textDecoration: 'none', color: 'black' }}>Aktywności</Link></span>
            </li>
            <li className="nav-item">
              <a className="nav-link">Zadania</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Magazyn</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideMenu;
