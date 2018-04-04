import React, { Component } from 'react';
import ManageProductsSection from './ManageProductsSection';

class SettingsPage extends Component {

  render() {
  
    let style = {
      width: '100vw',
      height: '100vh',
    }

    return (
      <div style={style}>
        <ManageProductsSection/>
      </div>
    )
  }
}

export default SettingsPage;
