import React, { Component } from 'react';

class Alert extends Component {

    render(){

    let style= {
    width: '100%',
    fontFamily: "'Barlow Semi Condensed', sans-serif",
    fontColor: 'white',
    paddingBottom: '0px',
    }

    let icon;
    let backgroundColor;

    if (this.props.data.actual >= this.props.data.max) {
      icon= (
        <div className="p-3" style={{fontSize:"20px"}}>
          <i class="fas fa-exclamation-circle fa-5x"></i>
        </div>
            );
      backgroundColor = "alert alert-danger";
    } else {
      icon= (
        <div className="p-3" style={{fontSize:"20px"}}>
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
        <div className="p-2 pt-2 pl-5">
          <p className="mb-0">Wartość maksymalna:</p><h4>{this.props.data.max} {this.props.data.measure}</h4>
          <p className="mb-0">Wartość faktyczna:</p><h4>{this.props.data.actual} {this.props.data.measure}</h4>
        </div>
      </div>
    </div>
    )     
  }
}

export default Alert;
