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
          <div className="card-body">
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-primary active">
              <input type="radio" name="options" id="Przyjecia" autocomplete="off" checked=""/> Przyjęcia
            </label>
            <label className="btn btn-primary">
              <input type="radio" name="options" id="Wydalenia" autocomplete="off"/> Wydalenia 
            </label>
            <label className="btn btn-primary">
              <input type="radio" name="options" id="Pomiary" autocomplete="off"/> Pomiary 
            </label>
          </div>      
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
