import React, { Component } from 'react';
import AddActivitySection from './AddActivitySection';
import LoggedActivitySection from './LoggedActivitySection';
import SnackBar from './SnackBar';

class ActivityPage extends Component {

  constructor(){
    super()
    this.state={
      showSnackBar:false,
      loggedEvents: '',
      selectedTileIndex: false,
      activityTiles: [
        {
          name: 'Jedzenie i Picie',
          category: 'Przyjęcie',
          icon: 'fas fas fa-utensils fa-2x',
          isSelected: false,
        },
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
          name: 'Ciśnienie',
          category: 'Pomiar',
          icon: 'fas fa-heartbeat fa-2x',
          isSelected: false,
        },
        {
          name: 'Waga',
          category: 'Pomiar',
          icon: 'fas fa-weight fa-2x',
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
    this.cancelForm = this.cancelForm.bind(this);
    this.selectTile = this.selectTile.bind(this);
    this.hideSnackbar = this.hideSnackbar.bind(this);
    this.showSnackbar = this.showSnackbar.bind(this);
  }

  async componentDidMount() {
    const res = await fetch('http://localhost:3000/api/events')
    const loggedEvents = await res.json()
    this.setState({loggedEvents:loggedEvents});
  }

  /*
  async componentDidUpdate() {
    const res = await fetch('http://localhost:3000/api/events')
    const loggedEvents = await res.json()
    this.setState({loggedEvents:loggedEvents});
  }*/

  hideSnackbar(){
    this.setState({showSnackBar:false})
  }

  showSnackbar(message){
    this.setState({showSnackBar:true})
  }

  cancelForm(){
    this.setState({selectedTileIndex: false});
  }

  selectTile(index){
    this.setState({selectedTileIndex: index});
  }

  render() {
    
    let snackbar;
    if (this.state.showSnackBar){
      snackbar = (
        <SnackBar message="Dodano aktywność" hideSnackbar={this.hideSnackbar}/>
      )
    }
    
    return (
      <div>
        <AddActivitySection tiles={this.state.activityTiles} 
                            selectTile={this.selectTile}
                            selectedTileIndex={this.state.selectedTileIndex} 
                            cancelForm={this.cancelForm}
                            showSnackbar={this.showSnackbar}
                            />

        <LoggedActivitySection loggedEvents={this.state.loggedEvents}/>
        {snackbar}
      </div>
      
    );
  }
}

export default ActivityPage;
