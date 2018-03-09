import React, { Component } from 'react';
import './css/Widget.css';
import AddActivity from './AddActivity';

class WidgetMedium extends Component {  

    render(){
      return (
        <div>
          <div className="modal fade bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">{this.props.modalName}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  {this.props.children}
                </div>
              </div>
            </div>
        </div>
          
          
          
          
          
          <div className="widget widget-md card mx-auto">
            <div class="card-header text-center text-primary align-middle"><h5>{this.props.name}</h5></div>
            <div className="card-body">
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
              {this.props.modalName}
            </button>
            </div>
          </div>
        </div>
      );
    }
}

export default WidgetMedium;
