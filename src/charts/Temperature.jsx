import React, { Component } from 'react';
import Chart from 'chart.js'

class Weight extends Component {  

    constructor(){
        super();
        this.state = {
            data: {
                labels: ['24 sty', '25 sty', '26 sty', '27 sty', '28 sty', '29 sty', '30 sty'],

                datasets: [{ 
                    data: [36.6,36.7,38.0,37,36.6,36.6,36.6],
                    label: "Temperatura - ostatnie 7 dni",
                    borderColor: "#3e95cd",
                    fill: false
                  }
                ]
              },
              options: {
                title: {
                  display: true,
                  text: 'Temperatura - ostatnie 7 dni'
                }
              }
        }
    }

    componentDidMount(){
        let canvas = this.refs.graph; 
        let myLineChart = new Chart(canvas, {
            type: 'line',
            data: this.state.data,
            label: "dupa"
        });
        this.refs.canvas = canvas;
    }

    render(){
        let style={
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderRadius: '5px',
        borderColor: '#E8E8E8',    
        width: '80%',
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
          <div className="m-3 ml-4">Temperatura</div>
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
