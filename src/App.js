import React, { Component } from 'react';
import SideMenu from './SideMenu';
import NavBar from './NavBar';
import MainContainer from './MainContainer';
import Panel from './Panel';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  
  render() {

    let menustyle = {
      backgroundColor: '#556C8E',
      height: '100vh',
    }
    
    let contentStyle = {
      backgroundColor: '#DAD0CB',
      color: 'white'
    }

    return (
      <div className="container-fluid">
        <NavBar/>
        <div className="row">
          <div className="col-2" style={menustyle} >
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
