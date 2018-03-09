import React, { Component } from 'react';
import ActivityTile from './ActivityTile';
import AddActivityItem from './AddActivityItem';

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
          options: [
          {
            category: 'TPN',
            name: 'Multimel',
            defaultLength: 14,
          },
          {
            category: 'Kroplowka',
            name: 'NaCl',
            defaultLength: 1,
          },
          {
            category: 'Kroplowka',
            name: 'NaCl2',
            defaultLength: 1,
          },
          ]
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

    let btn = {
      width:'100%',
    }

    let AddActivityItems = this.state.tilesState.map((tile)=>{
      
      let rows = []
      
            if (tile.isSelected) {
              tile.options.map((option)=>{
                console.log(option.category)
                rows.push((<AddActivityItem category={option.category} name={option.name}/>));
              })
            }
      return rows;
    });

    let activityTiles = this.state.tilesState.map((tile, index)=>{
      return (
        <ActivityTile name={tile.name} icon={tile.icon} isSelected={tile.isSelected} />
      )
    });

    

    return (
      <div className="style card text-center">
          <div className="card-body">
          <div className="btn-group btn-group-toggle" data-toggle="buttons" style={btn}>
            <label className="btn btn-secondary active" style={btn}>
              <input type="radio" name="options" id="Przyjecia" autoComplete="off" checked=""/> Przyjęcia
            </label>
            <label className="btn btn-secondary" style={btn}>
              <input type="radio" name="options" id="Wydalenia" autoComplete="off"/> Wydalenia 
            </label>
            <label className="btn btn-secondary" style={btn}>
              <input type="radio" name="options" id="Pomiary" autoComplete="off"/> Pomiary 
            </label>
          </div>      
            <div className="row d-flex justify-content-center">
            {activityTiles}
            </div>
            <div className="row text-primary">
              <div className="d-flex flex-column">
                {AddActivityItems}
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <button type="button" className="btn btn-lg" style={btn}>Dodaj Aktywność</button>
            </div>
          </div>
      </div>
    )     
  }
}

export default AddActivity;
