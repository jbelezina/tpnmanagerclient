import React, { Component } from 'react';

class Alert extends Component {

    render(){

    let style= {
    width: '100%',
    fontFamily: "'Barlow Semi Condensed', sans-serif",
    fontColor: 'white',
    }

    let icon;
    let backgroundColor;

    if (this.props.data.actual >= this.props.data.max) {
      icon= (
        <div className="p-5" style={{fontSize:"26px"}}>
          <i class="fas fa-exclamation-circle fa-5x"></i>
        </div>
            );
      backgroundColor = "alert alert-danger";
    } else {
      icon= (
        <div className="p-5" style={{fontSize:"26px"}}>
          <i class="fa fa-thumbs-o-up fa-5x" aria-hidden="true"></i>
        </div>
            );
      backgroundColor = "alert alert-success";
    }

    return (
    <div class={backgroundColor} style={style} role="alert">
      <h4 class="alert-heading">{this.props.data.description}</h4>
      <hr/>
      <div className="d-flex flex-row">
        <div className="d-flex flex-column justify-content-center">
          {icon}
        </div>
        <div className="p-3 pt-4 text-center">
          <p class="mb-0">Wartość maksymalna:</p><h2>{this.props.data.max} {this.props.data.measure}</h2>
          <p class="mb-0">Wartość faktyczna:</p><h2>{this.props.data.actual}</h2>
        </div>
      </div>
    </div>
    )     
  }
}

export default Alert;
