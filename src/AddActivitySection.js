import React, { Component } from 'react';
import ActivityTile from './ActivityTile';
import TpnForm from './forms/TpnForm';
import DripForm from './forms/DripForm';
import FoodDrinkForm from './forms/FoodDrinkForm';
import OstomyForm from './forms/OstomyForm';
import DrugForm from './forms/DrugForm';
import UrineForm from './forms/UrineForm';
import PressureForm from './forms/PressureForm';
import GenericMeasurementForm from './forms/GenericMeasurmentForm';

class AddActivitySection extends Component {  
    
    constructor(){
      super();
      this.state = {
          event_type: 'tpn',
          time_start: 'dupa',
          time_stop: 'dupa',
          comment: 'Hola',
          values: [1,2,3],
          product_id: 123,
          patient_id: 234,  
      }
      this.handleFormInput = this.handleFormInput.bind(this);
    }

    componentDidMount(){
      console.log('selected tile index:' + this.props.selectedTileIndex)
    }

    handleFormInput(){

      let formValues = this.state;
      formValues.time_start = Date.now();
      formValues.time_stop = Date.now();
      console.log(formValues);

      fetch('http://localhost:3000/api/events', {
        method: 'post',
        body: JSON.stringify(formValues)
      }).then(function(response) {
        return response.json();
      });
    }

    render(){

    let style={
      backgroundColor: 'white',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderRadius: '5px',
      borderColor: '#E8E8E8',
      marginLeft: '130px',
      marginTop: '85px',
      marginRight: '50px',    
      width: '90vw',
      fontFamily: "'Barlow Semi Condensed', sans-serif",
      fontSize: '15px',
      fontColor: 'darkgrey',
    }
    
    let activityTiles = this.props.tiles.map((tile, index)=>{
      return (
        <ActivityTile key={index} index={index} 
                      data={tile} 
                      selectTile={this.props.selectTile}/>
      )
    })

    let content; 

    if (this.props.selectedTileIndex === 0){
      content =  <FoodDrinkForm cancelForm={this.props.cancelForm}
                             name={this.props.tiles[this.props.selectedTileIndex]['name']}
                             icon={this.props.tiles[this.props.selectedTileIndex]['icon']}
                             />
    } else if (this.props.selectedTileIndex === 1) {
      content =  <TpnForm cancelForm={this.props.cancelForm}
                             name={this.props.tiles[this.props.selectedTileIndex]['name']}
                             icon={this.props.tiles[this.props.selectedTileIndex]['icon']}
                             />
    } else if (this.props.selectedTileIndex === 2) {
      content =  <DripForm cancelForm={this.props.cancelForm}
                             name={this.props.tiles[this.props.selectedTileIndex]['name']}
                             icon={this.props.tiles[this.props.selectedTileIndex]['icon']}
                             />
    } else if (this.props.selectedTileIndex === 3){
      content =  <DrugForm cancelForm={this.props.cancelForm}
                           name={this.props.tiles[this.props.selectedTileIndex]['name']}
                           icon={this.props.tiles[this.props.selectedTileIndex]['icon']}
                             />
    } else if (this.props.selectedTileIndex === 4 || this.props.selectedTileIndex === 5 ){
      content =  <OstomyForm cancelForm={this.props.cancelForm}
                           name={this.props.tiles[this.props.selectedTileIndex]['name']}
                           icon={this.props.tiles[this.props.selectedTileIndex]['icon']}
                             />
    } else if (this.props.selectedTileIndex === 4 || this.props.selectedTileIndex === 6 ){
      content =  <UrineForm cancelForm={this.props.cancelForm}
                           name={this.props.tiles[this.props.selectedTileIndex]['name']}
                           icon={this.props.tiles[this.props.selectedTileIndex]['icon']}
                             />
    } else if (this.props.selectedTileIndex === 4 || this.props.selectedTileIndex === 7 ){
      content =  <PressureForm cancelForm={this.props.cancelForm}
                           name={this.props.tiles[this.props.selectedTileIndex]['name']}
                           icon={this.props.tiles[this.props.selectedTileIndex]['icon']}
                             />
    } else if (this.props.selectedTileIndex === 4 || this.props.selectedTileIndex === 8 ){
      content =  <GenericMeasurementForm cancelForm={this.props.cancelForm}
                           name={this.props.tiles[this.props.selectedTileIndex]['name']}
                           icon={this.props.tiles[this.props.selectedTileIndex]['icon']}
                           measurementType='Waga'
                           measurementMetric='kg'
                             />
    } else if (this.props.selectedTileIndex === 4 || this.props.selectedTileIndex === 9 ){
      content = <GenericMeasurementForm cancelForm={this.props.cancelForm}
                           name={this.props.tiles[this.props.selectedTileIndex]['name']}
                           icon={this.props.tiles[this.props.selectedTileIndex]['icon']}
                           measurementType='Temperatura'
                           measurementMetric='C'
                             />
    } else {
      content = <div className="d-flex flex-wrap flex-row m-5">{activityTiles}</div>
    }

    return (
      <div className="row">
        <div style={style} className="text-primary">
          <div className="m-3 ml-4">Dodaj aktywność</div>
          <button onClick={this.handleFormInput}>Form input</button>
          <hr/>
              {content}
          </div>
      </div>
    )     
  }
}

export default AddActivitySection;
