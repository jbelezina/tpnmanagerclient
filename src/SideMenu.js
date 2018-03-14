import React, { Component } from 'react';
import './css/SideMenu.css';
import { Link } from 'react-router-dom';
class SideMenu extends Component {  
  render() {

    let menuItemsStyle = {
      marginTop: '30px',
      padding: '0px 0px 0px 0px',
      opacity: '1',
      textAlign: 'center',
    }

    return (
      <div>
        <div style={menuItemsStyle}>
          <ul className="nav flex-column">
            <li className="nav-item">
              <span className="nav-link"><Link to="/">Panel</Link></span>
            </li>
            <li className="nav-item">
              <span className="nav-link"><Link to="/aktywnosci">Aktywności</Link></span>
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
