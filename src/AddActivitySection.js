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
import Card from './Card';

class AddActivitySection extends Component {  

    constructor(){
      super();
      this.state = {
        in: [
          {
            name: 'Jedzenie i Picie',
            icon: 'fas fa-utensils fa-2x',
            isSelected: false,
          },
          {
            name: 'TPN',
            icon: 'fas fa-tint fa-2x',
            isSelected: false,
          },
          {
            name: 'Kroplówka',
            icon: 'fas fa-tint fa-2x',
            isSelected: false,
          },
          {
            name: 'Lek',
            icon: 'fas fa-pills fa-2x',
            isSelected: false,
          }
        ],
        out: [
          {
            name: 'Kolostomia',
            icon: 'far fa-dot-circle fa-2x',
            isSelected: false,
          },
          {
            name: 'Ilestomia',
            icon: 'far fa-dot-circle fa-2x',
            isSelected: false,
          },
          {
            name: 'Mocz',
            icon: 'fas fa-prescription-bottle fa-2x',
            isSelected: false,
          },
        ],
        measure: [
          {
            name: 'Ciśnienie',
            icon: 'fas fa-heartbeat fa-2x',
            isSelected: false,
          },
          {
            name: 'Waga',
            icon: 'fas fa-weight fa-2x',
            isSelected: false,
          },
          {
            name: 'Temperatura',
            icon: 'fas fa-thermometer fa-2x',
            isSelected: false,
          }
        ]
      }
    }
    
    render(){
    let style={
      backgroundColor: 'white',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderRadius: '5px',
      borderColor: '#E8E8E8',
      marginLeft: '150px',
      marginTop: '85px',
      marginRight: '50px',    
      width: '83%',
      fontFamily: "'Barlow Semi Condensed', sans-serif",
      fontSize: '15px',
      fontColor: 'darkgrey',
    }

    let content; 

    if (this.props.selectedTile === this.state.in[0]["name"]){
      let index = 0;
      content =  <FoodDrinkForm cancelForm={this.props.cancelForm}
                             name={this.state.in[index]["name"]}
                             icon={this.state.in[index]["icon"]}
                             handleFormInput={this.props.handleFormInput}
                             selectTile={this.props.selectTile}
                             showSnackbar={this.props.showSnackbar}
                             />
    } else if (this.props.selectedTile === this.state.in[1]["name"]) {
      let index = 1;
      content =  <TpnForm cancelForm={this.props.cancelForm}
                            name={this.state.in[index]["name"]}
                            icon={this.state.in[index]["icon"]}
                            handleFormInput={this.props.handleFormInput}
                            selectTile={this.props.selectTile}
                            showSnackbar={this.props.showSnackbar}
                             />

    } else if (this.props.selectedTile === this.state.in[2]["name"]) {
      let index = 2;
      content =  <DripForm cancelForm={this.props.cancelForm}
                            name={this.state.in[index]["name"]}
                            icon={this.state.in[index]["icon"]}
                            handleFormInput={this.props.handleFormInput}
                            selectTile={this.props.selectTile}
                            showSnackbar={this.props.showSnackbar}
                             />
    } else if (this.props.selectedTile === this.state.in[3]["name"]){
      let index = 3;
      content =  <DrugForm cancelForm={this.props.cancelForm}
                            name={this.state.in[index]["name"]}
                            icon={this.state.in[index]["icon"]}
                            handleFormInput={this.props.handleFormInput}
                            selectTile={this.props.selectTile}
                            showSnackbar={this.props.showSnackbar}
                             />
    } else if (this.props.selectedTile === this.state.out[0]["name"] || 
                this.props.selectedTile === this.state.out[1]["name"]
              ){
      let index;
      (this.props.selectedTile === "Kolostomia") ? index = 0 : index = 1; 
      content =  <OstomyForm cancelForm={this.props.cancelForm}
                          name={this.state.out[index]["name"]}
                          icon={this.state.out[index]["icon"]}
                          handleFormInput={this.props.handleFormInput}
                          selectTile={this.props.selectTile}
                          showSnackbar={this.props.showSnackbar}
                             />
    } else if (this.props.selectedTile === this.state.out[2]["name"]){
      let index = 2;
      content =  <UrineForm cancelForm={this.props.cancelForm}
                          name={this.state.out[index]["name"]}
                          icon={this.state.out[index]["icon"]}
                          handleFormInput={this.props.handleFormInput}
                          selectTile={this.props.selectTile}
                          showSnackbar={this.props.showSnackbar}
                             />
    } else if (this.props.selectedTile === this.state.measure[0]["name"]){
      let index = 0;
      content =  <PressureForm cancelForm={this.props.cancelForm}
                          name={this.state.measure[index]["name"]}
                          icon={this.state.measure[index]["icon"]}
                          handleFormInput={this.props.handleFormInput}
                          selectTile={this.props.selectTile}
                          showSnackbar={this.props.showSnackbar}
                             />
    } else if (this.props.selectedTile === this.state.measure[1]["name"]){
      let index = 1;
      content =  <GenericMeasurementForm cancelForm={this.props.cancelForm}
                          name={this.state.measure[index]["name"]}
                          icon={this.state.measure[index]["icon"]}
                          measurementType='Waga'
                          measurementMetric='kg'
                          handleFormInput={this.props.handleFormInput}
                          selectTile={this.props.selectTile}
                          showSnackbar={this.props.showSnackbar}
                             />
    } else if (this.props.selectedTile === this.state.measure[2]["name"]){
      let index = 2;
      content = <GenericMeasurementForm cancelForm={this.props.cancelForm}
                          name={this.state.measure[index]["name"]}
                          icon={this.state.measure[index]["icon"]}
                          measurementType='Temperatura'
                          measurementMetric='C'
                          handleFormInput={this.props.handleFormInput}
                          selectTile={this.props.selectTile}
                          showSnackbar={this.props.showSnackbar}
                             />
    } else {
      content = 
      <div className="d-flex flex-row justify-content-around">
          <Card tiles={this.state.in} title="Przyjęcia" selectTile={this.props.selectTile}/>
          <Card tiles={this.state.out} title="Wydalenia" selectTile={this.props.selectTile}/>
          <Card tiles={this.state.measure} title="Pomiary" selectTile={this.props.selectTile}/>
      </div>
    }

    return (
      <div className="row">
        <div style={style} className="text-primary">
          <div className="m-3 ml-4">Dodaj aktywność</div>
          <div className="dropdown-divider"></div>
          <div className="pt-5 pb-5 pl-5 pr-5">
              {content}
          </div>
        </div>
      </div>
    )     
  }
}

export default AddActivitySection;
