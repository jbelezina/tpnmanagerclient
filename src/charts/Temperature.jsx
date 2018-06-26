import React, { Component } from 'react';
import Chart from 'chart.js'
import moment from 'moment';
import 'moment/locale/pl';

class Temperature extends Component {  

    componentDidMount(){

      let formattedData;
      let data = [];
      let labels = [];

      fetch('http://localhost:3000/api/events/temperature?limit=5')
       .then(res=>res.json())
       .then(res=>{
        for (let x = 0; x<res.length; x++){
          data.push(res[x].values[0]["value"])
          var mom = moment(res[x].time_stop.toString());
          var label = mom.format("DD MMMM");
          labels.push(label)
        }  
       })
       .then(()=>{
          formattedData = {
            labels: labels,
            datasets: [{ 
                data: data,
                label: "Temperatura C",
                borderColor: "#3e95cd",
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
              label: "temperatura"
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
        height: '45vh',
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
          <div className="m-3 ml-4">Temperatura - ostatnie 5 pomiarów</div>
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

export default Temperature;
