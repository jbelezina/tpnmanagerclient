import React, { Component } from 'react';
import Chart from 'chart.js'
import moment from 'moment';
import 'moment/locale/pl';

class Weight extends Component {  

    componentDidMount(){

      let formattedData;
      let data = [];
      let labels = [];

      fetch('http://localhost:3000/api/events/weight?limit=5')
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
                label: "Waga w kg",
                borderColor: "darkblue",
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
              label: "waga"
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
        height: '50vh',
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
          <div className="m-3 ml-4">Waga - ostatnie 5 pomiarów</div>
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

export default Weight;
