import React, { Component } from 'react';
import SideMenu from './SideMenu';
import NavBar from './NavBar';
import ActivityPage from './ActivityPage';
import Panel from './Panel';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Route } from 'react-router-dom';

class App extends Component {
  
  render() {
    let contentStyle = {
      padding: '0px 0px 0px 0px',
    } 

    return (
      
        <div className="container-fluid h-100">
          <div className="row bg-secondary">
              <NavBar/>
          </div>
          <div className="row">
            
              <SideMenu/>
            
            <div className="col-10 bg-white text-white h-100" style={contentStyle}>
              <Route exact path='/' component={Panel}/>
              <Route path='/aktywnosci' component={ActivityPage}/>
            </div>
          </div>
        </div>  
    );
  }
}

export default App;
