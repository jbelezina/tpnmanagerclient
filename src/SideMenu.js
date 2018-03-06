import React, { Component } from 'react';
import './css/SideMenu.css';

class SideMenu extends Component {  
  render() {

    let menuItemsStyle = {
      marginTop: '30%',
    }

    return (
      <div>
        <div style={menuItemsStyle}>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link">Panel</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Aktywności</a>
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
