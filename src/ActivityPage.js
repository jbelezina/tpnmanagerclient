import React, { Component } from 'react';
import ActivityTile from './ActivityTile';
import LoggedActivity from './LoggedActivity';

class ActivityPage extends Component {

  constructor(){
    super()
    this.state={
      activityTiles: [
        {
          name: 'TPN',
          category: 'Przyjęcie',
          icon: 'fas fa-tint fa-2x'
        },
        {
          name: 'Kroplówka',
          category: 'Przyjęcie',
          icon: 'fas fa-tint fa-2x'
        },
        {
          name: 'Lek',
          category: 'Przyjęcie',
          icon: 'fas fa-pills fa-2x'
        },
        {
          name: 'Kolostomia',
          category: 'Wydalenie',
          icon: 'far fa-dot-circle fa-2x'
        },
        {
          name: 'Ilestomia',
          category: 'Wydalenie',
          icon: 'far fa-dot-circle fa-2x'
        },
        {
          name: 'Mocz',
          category: 'Wydalenie',
          icon: 'fas fa-flask fa-2x'
        },
        {
          name: 'Waga',
          category: 'Pomiar',
          icon: 'fas fa-weight fa-2x'
        },
        {
          name: 'Ciśnienie',
          category: 'Pomiar',
          icon: 'fas fa-heartbeat fa-2x'
        },
        {
          name: 'Temperatura',
          category: 'Pomiar',
          icon: 'fas fa-thermometer fa-2x'
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

    let activityTiles = this.state.activityTiles.map((tile, index)=>{
      return (
        <ActivityTile data={tile}/>
      )
    })


    return (
      <div>
        <div>
          <div className="row">
            <div style={style} className="offset-lg-1 col-lg-10 text-primary">
              <div className="m-3">Dodaj aktywność</div>
              <div className="d-flex flex-wrap flex-row ">
                {activityTiles}
              </div>
            </div>
          </div>
        </div>
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
