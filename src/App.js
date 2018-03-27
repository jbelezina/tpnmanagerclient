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
      backgroundColor: '#F9F9F9',
      width: '100 vmax',
    }
    
    let navStyle = {
      backgroundColor: 'white',
      borderBottom: '2px solid',
      borderColor: 'lightgrey',
      color: 'lightgrey',
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
          </div>
        </div>  
    );
  }
}

export default App;
