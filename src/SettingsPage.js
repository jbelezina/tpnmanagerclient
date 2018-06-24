import React, { Component } from 'react';
import ManageProductsSection from './ManageProductsSection';
import ManageAlertsSection from './ManageAlertsSection';

class SettingsPage extends Component {

  constructor(){
    super();
    this.state = {
      tab: 0,
      navlinkActive: 0,
    }
    this.activateManageAlerts = this.activateManageAlerts.bind(this);
    this.activateManageProducts = this.activateManageProducts.bind(this);
  }

  activateManageAlerts(){
    this.setState({navlinkActive:1});
  }

  activateManageProducts(){
    this.setState({navlinkActive:0});
  }
  
  render() {

    let style={
      backgroundColor: 'white',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderRadius: '5px',
      borderColor: '#E8E8E8',
      marginLeft: '150px',
      marginTop: '85px',
      marginRight: '50px',    
      width: '100%',
      fontFamily: "'Barlow Semi Condensed', sans-serif",
      fontSize: '15px',
      fontColor: 'darkgrey'
    }

    let navlink1;
    let navlink2;
    let content;
    
    switch(this.state.navlinkActive){
      case 0:
          navlink1 = 'nav-link active text-dark'
          navlink2 = 'nav-link text-muted'
          content = <ManageProductsSection/>
          break;
      case 1:
          navlink1 = 'nav-link text-muted'
          navlink2 = 'nav-link active text-dark'
          content = <ManageAlertsSection/>
          break;
      default:
          navlink1 = 'nav-link active'
          navlink2 = 'nav-link'
          content = <ManageProductsSection/>
  }

    return (

      <div style={style} className="row">
        <div  className="text-primary">
          <div className="m-3 ml-4">
            <ul className="nav nav-tabs">
              <li onClick={this.activateManageProducts} className="nav-item">
                <a className={navlink1} style={{textDecoration:'none'}} href="#">Zarządzaj Produktami</a>
              </li>
              <li onClick={this.activateManageAlerts} className="nav-item">
                <a className={navlink2} style={{textDecoration:'none'}} href="#">Zarządzaj Alarmami</a>
              </li>
            </ul>          
          </div>
          <div className="dropdown-divider"></div>
          <div style={{width:"86vw"}}>
            {content}
          </div>
        </div>
      </div>
    )
  }
}

export default SettingsPage;
