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
      backgroundColor: '#556C8E',
      height: '100vh',
      padding: '0px 0px 0px 0px',
    }
    
    let contentStyle = {
      backgroundColor: '#f1f1f1',
      padding: '0px 0px 0px 0px',
    }

    return (
      <div className="container-fluid">
        <NavBar/>
        <div className="row">
          <div className="col-2" style={sideMenuStyle} >
            <SideMenu/>
          </div>
          <div className="col-10" style={contentStyle}>
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
