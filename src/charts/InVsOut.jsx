import React, { Component } from 'react';
import Chart from 'chart.js'
import moment from 'moment';
import 'moment/locale/pl';

class InVsOut extends Component {  

    
  componentDidMount(){

    let formattedData;
    let inEvents = [];
    let labels = [];

    fetch('http://localhost:3000/api/events/inEvents')
     .then(res=>res.json())
     .then(res=>{
      for (let x = 0; x<res.length; x++){
          var mom = moment(res[x].time_stop.toString());
          var label = mom.format("DD MMMM");
          if(labels.indexOf(label) !== -1) {
            let index = labels.indexOf(label);
            console.log('przed:' + inEvents[index])
            inEvents[index] += res[x].values[0]["value"]
            console.log('po:' + inEvents[index]) 
          } else {
            inEvents.push(res[x].values[0]["value"]);
            labels.push(label);
          }
        }
      
      })  
     .then(()=>{
        formattedData = {
          labels: labels,
          datasets: [{ 
              data: inEvents,
              label: "Przyjęcia",
              borderColor: "red",
              fill: false
            }
          ]
        }
      }
     )
     .then(()=>{
        let canvas = this.refs.graph; 
        let myLineChart = new Chart(canvas, {
            type: 'line',
            data: formattedData,
            label: "Przyjęcia vs Wydalenia"
        });
        this.refs.canvas = canvas;
      }
     )   
  }

    render(){
        let style={
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderRadius: '5px',
        borderColor: '#E8E8E8',  
        width: '100%',
        fontFamily: "'Barlow Semi Condensed', sans-serif",
        fontSize: '15px',
        fontColor: 'darkgrey',
        }

    let graphStyle = {
        margin: '10px 10px 10px 10px',
    }

    return (
      <div style={style}>
        <div className="text-primary">
          <div className="m-3 ml-4">Przyjęcia vs wydalenia</div>
          <div className="dropdown-divider"></div>
          <div style={graphStyle}>
            <canvas ref="graph"/>
          </div>
          <div className="pt-4 pb-4">
          </div>
        </div>
      </div>
    )     
  }
}

export default InVsOut;
