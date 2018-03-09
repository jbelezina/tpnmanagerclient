import React, { Component } from 'react';
import SideMenu from './SideMenu';
import NavBar from './NavBar';
import MainContainer from './MainContainer';
import Panel from './Panel';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


class App extends Component {
  
  render() {
    
    let sideMenuStyle = {
      height: '100vh',
      padding: '0px 0px 0px 0px',
    }
    
    let contentStyle = {
      padding: '0px 0px 0px 0px',
    } 

    return (
      <div className="container-fluid">
        <div className="row bg-secondary">
        <NavBar/>
        </div>
        <div className="row">
          <div className="col-2 bg-primary text-white" style={sideMenuStyle}>
            <SideMenu/>
          </div>
          <div className="col-10 bg-light text-white" style={contentStyle}>
            <MainContainer>
              <Panel/>
            </MainContainer>
          </div>
        </div>  
      </div>
    );
  }
}

export default App;
