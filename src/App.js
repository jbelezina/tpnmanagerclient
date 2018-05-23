import React, { Component } from 'react';
import SideMenu from './SideMenu';
import NavBar from './NavBar';
import ActivityPage from './ActivityPage';
import SettingsPage from './SettingsPage';
import Panel from './Panel';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Route } from 'react-router-dom';

class App extends Component {
  
  render() {
    let contentStyle = {
      backgroundColor: '#F9F9F9',
    }

    return (
      
        <div className="container-fluid h-100 w-100 p-0" style={contentStyle}>
          <div className="row m-0 p-0">
            <div className="col-12 m-0 p-0">
              <NavBar/>
            </div>
          </div>
          <div className="row">
              <SideMenu/>
              <Route exact path='/' component={Panel}/>
              <Route path='/aktywnosci' component={ActivityPage}/>
              <Route path='/ustawienia' component={SettingsPage}/>
          </div>
        </div>  
    );
  }
}

export default App;
