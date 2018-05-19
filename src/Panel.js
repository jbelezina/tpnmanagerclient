import React, { Component } from 'react';
import InVsOut from './charts/InVsOut';
import Temperature from './charts/Temperature';
import Pressure from './charts/Pressure';
import Weight from './charts/Weight';

class Panel extends Component {

  render() {
    return (
      <div style={{marginLeft:'130px', marginTop:'60px', display:'fixed', width:'86%'}}>
        <div className="row">
          <div className="col-4 d-flex flex-row justify-content-center p-4 pt-0">
            <Temperature />
          </div>
          <div className="col-4 d-flex flex-row justify-content-center p-4">
            <Pressure />
          </div>
          <div className="col-4 d-flex flex-row justify-content-center p-4">
            <Weight />
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex flex-row justify-content-center p-4"> 
            <InVsOut />
          </div>
        </div>
      </div>
    );
  }
}

export default Panel;
