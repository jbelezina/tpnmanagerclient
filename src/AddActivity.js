import React, { Component } from 'react';
import ActivityTile from './ActivityTile'

class AddActivity extends Component {  

    constructor(){
      super();
      this.state = {
        addingActivity: false,
        tilesState: [
        {
          name: 'Dożylne',
          icon: 'fas fa-syringe fa-2x',
          isSelected: true,
        },
        {
          name: 'Jedzenie i Picie',
          icon: 'fas fa-utensils fa-2x',
          isSelected: false,
        },
        ],
        selectedActivityTile: false,
      }
    }

    render(){

    let activityTiles = this.state.tilesState.map((tile, index)=>{
      return (
        <ActivityTile name={tile.name} icon={tile.icon} isSelected={tile.isSelected} />
      )
    });

    return (
      <div className="style card text-center">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <a className="nav-link active">Przyjęcia</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Wydalenia</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Pomiary</a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <div className="row d-flex justify-content-center">
            {activityTiles}
            </div>
              <button type="button" className="btn btn-lg pull-right">Dodaj Aktywność</button>
          </div>
      </div>
    )     
  }
}

export default AddActivity;
