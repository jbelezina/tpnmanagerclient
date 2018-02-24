import React, { Component } from 'react';


class SideMenu extends Component {
  
  

  render() {

    let menuItemsStyle = {
      marginTop: '20%'
    }

    return (
      <div>
        <div style={menuItemsStyle}>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="#">Active</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideMenu;
