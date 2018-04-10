import React, { Component } from 'react';
import './css/Snackbar.css'

class Snackbar extends Component {

  componentDidMount(){
    setTimeout(()=>{this.props.hideSnackbar()}, 3000);
  }
  
  render() {
    return (
        <div className='show' id='snackbar'>{this.props.message}</div>
    );
  }
}

export default Snackbar;
