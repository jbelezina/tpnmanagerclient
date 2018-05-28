import React, { Component } from 'react';
import Chart from 'chart.js'
import moment from 'moment';
import 'moment/locale/pl';

class InVsOut extends Component {  

    
  componentDidMount(){

    let formattedData;

    let getInEvents = () => {
      return fetch('http://localhost:3000/api/events/inEvents')
      .then(res=>res.json());
    };

    let getOutEvents = () => {
      return fetch('http://localhost:3000/api/events/outEvents')
      .then(res=>res.json());
    };

    Promise.all([getInEvents(), getOutEvents()])
      .then((valuesArray) => {
      let allEvents = [...valuesArray[0], ...valuesArray[1]]
      allEvents.sort((a, b) => {
          if (a.time_stop < b.time_stop)
            return 1
          if (a.time_stop > b.time_stop)
            return -1
          return 0
        })
        return allEvents
      }).then((allEvents)=>{
      
      let datasetIn = [];
      let datasetOut = [];
      let totalIn = 0;
      let totalOut = 0;
      let labels = [];
      
      for (let x = 0; x<allEvents.length; x++){
        var mom = moment(allEvents[x].time_stop.toString());
        let event = {
          date : mom.format("DD MMMM"),
          value : allEvents[x].values[0]["value"],
          type: allEvents[x].event_category
        }
        if (labels.indexOf(event.date) === -1) {
          labels.push(event.date);
          if(event.type === 'przyjecie') {
            datasetIn.push(event.value);
            totalIn += event.value
            datasetOut.push(0);
          } else if (event.type === 'wydalenie') {
            datasetOut.push(event.value);
            totalOut += event.value
            datasetIn.push(0);
          }
        } else {
          if (event.type === 'przyjecie') {
            datasetIn[labels.indexOf(event.date)] += event.value;
            totalIn += event.value;
          }
          if (event.type === 'wydalenie') {
            datasetOut[labels.indexOf(event.date)] += event.value;
            totalOut += event.value
          }
        }
      }
      
      let arrToPassOn = [];
      arrToPassOn.push(labels);
      arrToPassOn.push(datasetIn);
      arrToPassOn.push(datasetOut);
      arrToPassOn.push(totalIn);
      arrToPassOn.push(totalOut);
      console.log(arrToPassOn);
      return arrToPassOn;      
      }).then((arr)=>{
        let labels = arr[0];
        let datasetIn = arr[1];
        let datasetOut = arr[2];
        let totalIn = arr[3];
        let totalOut = arr[4];
        let formattedData = {
          labels: labels,
          datasets: [{ 
              data: datasetIn,
              label: "Przyjęcia",
              borderColor: "green",
              fill: true
            },
            { 
              data: datasetOut,
              label: "Wydalenia",
              borderColor: "red",
              fill: true
            }
          ]
        }
        let formattedDataPie = {
          datasets: [{ 
            data: [totalIn,totalOut],
            backgroundColor: ["green","red"],
            fill: true
          }],
          labels: [
            'Przyjęcia',
            'Wydalenia',
          ]
        }
        let arrToPassOn = []
        arrToPassOn.push(formattedData)
        arrToPassOn.push(formattedDataPie)
        return arrToPassOn
      }).then((arr)=>{
        let lineData = arr[0];
        let pieData = arr[1];
        let canvas = this.refs.linegraph; 
        let myLineChart = new Chart(canvas, {
            type: 'line',
            data: lineData,
        });
        this.refs.canvas = canvas;
        console.log('pieData' + JSON.stringify(pieData))
        return pieData;

      }
    ).then((pieData)=>{
        let canvas = this.refs.doughnutgraph; 
        let myLineChart = new Chart(canvas, {
            type: 'doughnut',
            data: pieData,
        });

        this.refs.canvas = canvas;
     })   
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

    return (
      <div style={style}>
        <div className="text-primary">
          <div className="m-3 ml-4">Przyjęcia vs wydalenia</div>
          <div className="dropdown-divider"></div>
          <div className="row">
            <div className="col-7 p-0 pl-5 pt-5">
              <canvas ref="linegraph"/>
            </div>
            <div className="col-5 p-0 pr-5 pt-5 mt-5">
              <canvas ref="doughnutgraph"/>
            </div>
          </div>
          <div className="pt-4 pb-4"></div>
        </div>
      </div>
    )     
  }
}

export default InVsOut;
