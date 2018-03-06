import React, { Component } from 'react';
import ActivityTile from './ActivityTile'
import './css/AddActivity.css';

class AddActivity extends Component {  

    constructor(){
      super();
      this.state = {
        addingActivity: false,
        TPN: {
          name: 'TPN',
          icon: 'fas fa-utensils fa-2x'
        },
        drip: {
          name: 'kroplówka',
          icon: 'fas fa-utensils fa-2x'
        },
        food: {
          name: 'jedzenie',
          icon: 'fas fa-utensils fa-2x'
        },
        drink: {
          name: 'picie',
          icon: 'fas fa-utensils fa-2x'
        },
        drug: {
          name: 'lek',
          icon: 'fas fa-utensils fa-2x'
        },
        selectedActivityTile: false,
      }

      this.toggleAddActivity = this.toggleAddActivity.bind(this);
    }

    toggleAddActivity(){
      this.setState({addingActivity:!this.state.addingActivity});
    }

    render(){
      let content;

      if(this.state.addingActivity) { 
      content = (  
        <div className="addActivity card text-center">
          <div className="card-header">
            <button type="button" onClick={this.toggleAddActivity} class="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
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
            <ActivityTile name={this.state.TPN.name} icon={this.state.TPN.icon} />
            <ActivityTile name={this.state.drip.name} icon={this.state.drip.icon} />
            <ActivityTile name={this.state.food.name} icon={this.state.food.icon} />
            <ActivityTile name={this.state.drink.name} icon={this.state.drink.icon}/>
            <ActivityTile name={this.state.drug.name} icon={this.state.drug.icon}/>
            </div>
              <button type="button" className="btn btn-lg pull-right">Dodaj Aktywność</button>
          </div>
        </div>
      )
    } else {
      content = (
          <button onClick={this.toggleAddActivity} type="button" className="btn btn-lg pull-right">Dodaj Aktywność</button>
      )
    }

    return (
      <div className="row">
        <div className="col-12">
        {content}
        </div>
      </div>
    )     
  }
}

export default AddActivity;
