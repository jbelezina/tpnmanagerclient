import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/SideMenu.css';
class SideMenu extends Component {  
  
  constructor(){
    super();
    this.state = {
      selected: [1,0,0]
    }
  }

  componentDidMount() {
    if (window.location.href === "http://localhost:3000/ustawienia") {
      this.setState({selected: [0,0,1]});
    } else if (window.location.href === "http://localhost:3000/aktywnosci") {
      this.setState({selected: [0,1,0]});
    } else if (window.location.href === "http://localhost:3000/") {
      this.setState({selected: [1,0,0]});
    }
  }

  selectFirst = () => {
    this.setState({selected:[1,0,0]});
  }

  selectSecond = () => {
    this.setState({selected: [0,1,0]});
  }

  selectThird = () => {
    this.setState({selected: [0,0,1]});
  }


  render() {
    
    let menuItemsStyle = {
      position: "absolute",
      width: '100px',
      height: '100vh',
      borderTop: 'solid 2px white',
      borderBotton: 'solid 2px white',
      backgroundColor: '#212121',
      position: 'fixed',
      color: '#E8E8E8',
      opacity: '1',
      textAlign: 'center',
      zIndex: '2'
    }

    let icon = {
      align: 'center',
      width: '100%',
      margin: '0px',
      padding: '0px',
      alignContent:'center',
    }

    let extendedMenu = {
      width: '200px',
      height: '100vh',
      marginTop: '49px',
      marginLeft: '80px',
      borderRight: 'solid 2px #E8E8E8',
      position: 'fixed',
      backgroundColor: 'white',
      visibility: 'hidden',
    }

    let styleOne;
    let styleTwo;
    let styleThree;
    
    if(this.state.selected[0] === 1){
      styleOne = "activeSideMenuItem";
      styleTwo = "sideMenuItem";
      styleThree = "sideMenuItem";
    }

    if(this.state.selected[1] === 1){
      styleOne = "sideMenuItem";
      styleTwo = "activeSideMenuItem";
      styleThree = "sideMenuItem";
    }

    if(this.state.selected[2] === 1){
      styleOne = "sideMenuItem";
      styleTwo = "sideMenuItem";
      styleThree = "activeSideMenuItem";
    }
    

    return (
      <div>
      <div style={extendedMenu}>
      Hello
      </div>
      <div style={menuItemsStyle}>
        <div style={{marginTop:'141px'}}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className={styleOne} onClick={this.selectFirst}>
              <i className=" fas fa-chart-line fa-2x"></i>
            <div style={{marginLeft:'0px'}}>Panel</div>
          </div>
        </Link>
        <Link to="/aktywnosci" style={{ textDecoration: 'none' }}>
          <div className={styleTwo} onClick={this.selectSecond}>
            <div style={{textAlign:"center"}}>
              <i className="fas fa-play-circle fa-2x"></i>
            </div> 
            <div>Aktywności</div>
          </div>
        </Link>
        <Link to="/ustawienia" onClick={this.selectThird} style={{ textDecoration: 'none' }}>
          <div className={styleThree}>
            <div style={{textAlign:"center"}}>
              <i className="fas fa-cog fa-2x"></i>
            </div>
            <div>Ustawienia</div>
          </div> 
        </Link>
        </div>
      </div>
      </div>
    );
  }
}

export default SideMenu;
