import React, { Component } from 'react';
import ActivityTile from './ActivityTile';
import TpnForm from './TpnForm';
import DripForm from './DripForm';
import FoodDrinkForm from './FoodDrinkForm';
import OstomyForm from './OstomyForm';
import DrugForm from './DrugForm';
import UrineForm from './UrineForm';
import PressureForm from './PressureForm';
import GenericMeasurementForm from './GenericMeasurmentForm';

class AddActivitySection extends Component {  
    
    componentDidMount(){
      console.log('selected tile index:' + this.props.selectedTileIndex)
    }

    render(){

    let style={
      backgroundColor: 'white',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderRadius: '5px',
      borderColor: '#E8E8E8',    
      width: '100%',
      marginTop:'30px',
      paddingBottom:'20px',
      paddingTop: '15px',
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
      content =  <GenericMeasurementForm cancelForm={this.props.cancelForm}
                           name={this.props.tiles[this.props.selectedTileIndex]['name']}
                           icon={this.props.tiles[this.props.selectedTileIndex]['icon']}
                           measurementType='Temperatura'
                           measurementMetric='C'
                             />
    } else {
      content = <div className="d-flex flex-wrap flex-row ">{activityTiles}</div>
    }

    return (
    <div>
      <div className="row">
        <div style={style} className="offset-lg-1 col-lg-10 text-primary">
          <div className="m-3">Dodaj aktywność</div>
            {content}
          </div>
      </div>
    </div>
    )     
  }
}

export default AddActivitySection;
