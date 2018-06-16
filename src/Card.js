import React, { Component } from 'react';
import ActivityTile from './ActivityTile';

class Card extends Component {
  render() {

    let activityTiles = this.props.tiles.map((tile, index)=>{
      return (
        <ActivityTile key={index} index={index} 
                      data={tile} 
                      selectTile={this.props.selectTile}/>
      )
    })

    return (
      <div className="card m-3" style={{width: "25vw"}}>
        <div className="card-header">
          {this.props.title}
        </div>
        <div className="card-body bg-light d-flex flex-row justify-content-around">
          {activityTiles}
        </div>
      </div>
    );
  }
}

export default Card;
