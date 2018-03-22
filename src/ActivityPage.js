import React, { Component } from 'react';
import LoggedActivity from './LoggedActivity';
import AddActivitySection from './AddActivitySection';
import LoggedActivitySection from './LoggedActivitySection';

class ActivityPage extends Component {

  constructor(){
    super()
    this.state={
      anyTileSelected: false,
      activityTiles: [
        {
          name: 'TPN',
          category: 'Przyjęcie',
          icon: 'fas fa-tint fa-2x',
          isSelected: false,
        },
        {
          name: 'Kroplówka',
          category: 'Przyjęcie',
          icon: 'fas fa-tint fa-2x',
          isSelected: false,
        },
        {
          name: 'Lek',
          category: 'Przyjęcie',
          icon: 'fas fa-pills fa-2x',
          isSelected: false,
        },
        {
          name: 'Kolostomia',
          category: 'Wydalenie',
          icon: 'far fa-dot-circle fa-2x',
          isSelected: false,
        },
        {
          name: 'Ilestomia',
          category: 'Wydalenie',
          icon: 'far fa-dot-circle fa-2x',
          isSelected: false,
        },
        {
          name: 'Mocz',
          category: 'Wydalenie',
          icon: 'fas fa-flask fa-2x',
          isSelected: false,
        },
        {
          name: 'Waga',
          category: 'Pomiar',
          icon: 'fas fa-weight fa-2x',
          isSelected: false,
        },
        {
          name: 'Ciśnienie',
          category: 'Pomiar',
          icon: 'fas fa-heartbeat fa-2x',
          isSelected: false,
        },
        {
          name: 'Temperatura',
          category: 'Pomiar',
          icon: 'fas fa-thermometer fa-2x',
          isSelected: false,
        },
      ]
    }
    this.toggleTileSelected = this.toggleTileSelected.bind(this);
  }

  toggleTileSelected(){
    this.setState({anyTileSelected:!this.state.anyTileSelected});
  }

  render() {
    let style={
      backgroundColor: 'white',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderRadius: '5px',
      borderColor: 'lightgrey',    
      width: '100%',
      marginTop:'30px',
      paddingBottom:'20px',
      paddingTop: '15px',
      fontFamily: "'Barlow Semi Condensed', sans-serif",
      fontSize: '15px',
      fontColor: 'darkgrey',
    }

    return (
      <div>
        <AddActivitySection tiles={this.state.activityTiles} anyTileSelected={this.state.anyTileSelected} toggleTileSelected={this.toggleTileSelected}/>
        <LoggedActivitySection/>
      </div>
      
    );
  }
}

export default ActivityPage;
