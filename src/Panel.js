import React, { Component } from 'react';
import InVsOut from './charts/InVsOut';
import Temperature from './charts/Temperature';
import Pressure from './charts/Pressure';
import Weight from './charts/Weight';

class Panel extends Component {

  render() {
    return (
      <div style={{marginLeft:'40px', marginTop:'80px'}}>
        <div className="row">
          <div className="col-4 d-flex flex-row justify-content-end p-0">
            <Temperature />
          </div>
          <div className="col-4 d-flex flex-row justify-content-center p-0">
            <Pressure />
          </div>
          <div className="col-4 d-flex flex-row justify-content-start p-0">
            <Weight />
          </div>
        </div>
        <div className="row">
        <div className="col-4 d-flex flex-row justify-content-end p-0"> 
            <InVsOut />
          </div>
        </div>
      </div>
    );
  }
}

export default Panel;
