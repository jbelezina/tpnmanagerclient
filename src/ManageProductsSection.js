import React, { Component } from 'react';
import ManageTpn from './ManageTpn';

class ManageProductsSection extends Component {  
    
    constructor(){
      super();
      this.state = {
      }
    }
    
    handleTabSelection(){

    }
    
    render(){
    let style={
      backgroundColor: 'white',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderRadius: '5px',
      borderColor: '#E8E8E8',
      marginLeft: '130px',
      marginTop: '85px',
      marginRight: '50px',    
      width: '90vw',
      fontFamily: "'Barlow Semi Condensed', sans-serif",
      fontSize: '15px',
      fontColor: 'darkgrey',
    }

    let content = (
      <ManageTpn/>
    )
      
    return (
      <div className="row">
        <div style={style} className="text-primary">
          <div className="m-3 ml-4">Zarządzaj produktami</div>
          
                <hr/>
                  <div className="d-flex flex-wrap flex-row m-5">
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">TPN</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Kroplówki</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Leki</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Jedzenie</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Picie</a>
                      </li>
                    </ul>
                  </div>
            {content}
          </div>
      </div>
    )     
  }
}

export default ManageProductsSection;
