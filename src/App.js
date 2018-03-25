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
    }
    
    let navStyle = {
      backgroundColor: 'white',
      borderBottom: '2px solid',
      borderColor: 'lightgrey',
      color: 'lightgrey',
    }

    return (
      
        <div className="container-fluid h-100" style={contentStyle}>
          <div className="row">
            <div className="col-12 m-0 p-0">
              <NavBar/>
            </div>
          </div>
          <div className="row">
            <div className="col-2 h-100 m-0 p-0">
              <SideMenu/>
            </div>
            <div className="col-10 text-white m-0 p-0 h-100" style={contentStyle}>
              <Route exact path='/' component={Panel}/>
              <Route path='/aktywnosci' component={ActivityPage}/>
            </div>
          </div>
        </div>  
    );
  }
}

export default App;
