import React, { Component } from 'react';
import ActivityTile from './ActivityTile';
import AddActivityItem from './AddActivityItem';

class AddActivity extends Component {  

    constructor(){
      super();
      this.state = {
        addingActivity: true,
        wydalenia: [],
        pomiary: [],
        przyjecia: [
        {
          name: 'Dożylne',
          icon: 'fas fa-syringe fa-2x',
          isSelected: false,
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
          isSelected: true,
          options: [
            {
              category: 'Jedzenie',
              name: 'Makaron z serem',
            },
            {
              category: 'Jedzenie',
              name: 'Groch z kapustą',
            },
            {
              category: 'Picie',
              name: 'Sok marchwiowy',
            },
            {
              category: 'Picie',
              name: 'Sok z buraka',
            },
            ]
        },
        ],
      } // end of this.state
      this.setActiveTile = this.setActiveTile.bind(this);
    } // end of constructor

    setActiveTile(i){
      let przyjecia = this.state.przyjecia
      let newState = przyjecia.map((option, index)=>{
        if (i === index) {
          option.isSelected = true;
        } else {
           option.isSelected = false; 
        }
      }
      );
      this.setState({Przyjecia:newState})
      console.log('hello from set activity tile')
      console.log(this.state.przyjecia)
      this.forceUpdate();
    }

    render(){

    let btn = {
      width:'100%',
    }

    let AddActivityItems = this.state.przyjecia.map((tile)=>{
      let rows = []
            if (tile.isSelected) {
              tile.options.map((option)=>{
                console.log(option.category)
                rows.push((<AddActivityItem key={option.name} category={option.category} name={option.name}/>));
              })
            }
      return rows;
    });

    let activityTiles = this.state.przyjecia.map((tile, index)=>{
      return (
        <ActivityTile key={index} index={index} name={tile.name} icon={tile.icon} isSelected={tile.isSelected} setActiveTile={this.setActiveTile}/>
      )
    });

    

    return (
      <div className="style card text-center">
          <div className="card-body">
          <div className="btn-group btn-group-toggle" data-toggle="buttons" style={btn}>
            <label className="btn btn-secondary active" style={btn}>
              <input type="radio" name="options" id="Przyjecia" checked=""/> Przyjęcia
            </label>
            <label className="btn btn-secondary" style={btn}>
              <input type="radio" name="options" id="Wydalenia"/> Wydalenia 
            </label>
            <label className="btn btn-secondary" style={btn}>
              <input type="radio" name="options" id="Pomiary"/> Pomiary 
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
