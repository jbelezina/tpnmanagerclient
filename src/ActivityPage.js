import React, { Component } from 'react';
import LoggedActivity from './LoggedActivity';
import AddActivitySection from './AddActivitySection';

class ActivityPage extends Component {

  constructor(){
    super()
    this.state={
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
        <AddActivitySection tiles={this.state.activityTiles}/>
        <div>
          <div className="row">
            <div style={style} className="offset-lg-1 col-lg-10 text-primary">
              <div className="m-3">Zalogowane aktywności</div>
              <div className="d-flex flex-row ">
              <LoggedActivity/>
              </div>
              <div className="d-flex flex-row ">
              <LoggedActivity/>
              </div>
              <div className="divider"></div>
              <div className="d-flex flex-row ">
              <LoggedActivity/>
              </div>
              <div className="d-flex flex-row ">
              <LoggedActivity/>
              </div>
              <div className="d-flex flex-row ">
              <LoggedActivity/>
              </div>
              <div className="d-flex flex-row ">
              <LoggedActivity/>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default ActivityPage;
