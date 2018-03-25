import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class SideMenu extends Component {  
  render() {
    
    let menuItemsStyle = {
      height: '100%',
      backgroundColor: 'white',
      borderRight: '2px solid',
      borderColor: '#E8E8E8',
      color: 'lightgrey',
      position: 'fixed',
      marginTop: '30px',
      padding: '0px 0px 0px 0px',
      opacity: '1',
      textAlign: 'center',
    }

    return (
      <div style={menuItemsStyle} className="m-0 p-3">
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
    );
  }
}

export default SideMenu;
