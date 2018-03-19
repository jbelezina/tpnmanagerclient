import React, { Component } from 'react';
import ActivityTile from './ActivityTile';
import TpnDripForm from './TpnDripForm';

class AddActivitySection extends Component {  

    constructor(){
      super();
      this.state = {
        anyTileSelected: false,
      }
      this.toggleTileSelected = this.toggleTileSelected.bind(this);
    }
    
    toggleTileSelected(){
      this.setState({anyTileSelected:!this.state.anyTileSelected});
    }
  
    render(){

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
    
    let activityTiles = this.props.tiles.map((tile, index)=>{
      return (
        <ActivityTile key={index} data={tile} selectTile={this.toggleTileSelected}/>
      )
    })


    let content; 

    if (this.state.anyTileSelected) {
      content = <TpnDripForm/>
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