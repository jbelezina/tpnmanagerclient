import React, { Component } from 'react';

class AddActivityItem extends Component {  

    render(){

    let style = {
      margin: '10px 10px 10px 10px'
    }

    let divider = {
      borderRight: '1px solid #EEE7E7',
      paddingLeft: '10px',
      paddingRight: '10px',
    }

    return (
    <div className="card pull-left" style={style}>
      <div className="card-body">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
          <label className="form-check-label">
            <div className="d-flex flex-row">
              <span style={divider}>{this.props.category}</span>
              <span style={divider}>{this.props.name}</span>
            </div>
          </label>
        </div>
      </div>
    </div>
    )     
  }
}

export default AddActivityItem;
