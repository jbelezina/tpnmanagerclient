import React, { Component } from 'react';
import ActivityTile from './ActivityTile'
import './css/AddActivity.css';

class AddActivity extends Component {  

    render(){

      let style = {
        maxWidth: '18rem'
      }

      return (
        <div className="addActivityWidget">
          <div className="card text-center">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Przyjęcia</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Wydalenia</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pomiary</a>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <div className="row d-flex justify-content-start">
              <ActivityTile/>
              <ActivityTile/>
              <ActivityTile/>
              <ActivityTile/>
              </div>
              <a href="#" className="btn btn-lrg btn-success">DODAJ AKTYWNOŚĆ</a>
            </div>
          </div>
        </div>
      );
    }
}

export default AddActivity;
