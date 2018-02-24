import React, { Component } from 'react';
import SideMenu from './SideMenu';
import NavBar from './NavBar';
import MainContent from './MainContent';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {

    return (
      <div className="container-fluid">
        <NavBar/>
        <div className="row">
          <div className="col-2">
            <SideMenu/>
          </div>
          <div className="col-10">
            <MainContent/>
          </div>
        </div>  
      </div>
    );
  }
}

export default App;
