import React, { Component } from 'react';
import Chart from 'chart.js'

class InVsOut extends Component {  

    constructor(){
        super();
        this.state = {
            data: {
                labels: ['1 sty', '2 sty', '3 sty', '4 sty', '5 sty', '6 sty', '7 sty',
                         '8 sty', '9 sty', '10 sty', '11 sty', '12 sty', '13 sty', '14 sty',
                         '15 sty', '16 sty', '17 sty', '18 sty', '19 sty', '20 sty', '21 sty',
                         '22 sty', '23 sty', '24 sty', '25 sty', '26 sty', '27 sty', '28 sty',
                         '29 sty', '30 sty'],

                datasets: [{ 
                    data: [5,8,6,5,5,8,6,5,5,8,6,5,5,8,6,5,5,8,6,5,5,8,6,5,5,8,6,5,4,3],
                    label: "Przyjęcia",
                    borderColor: "#3e95cd",
                    fill: false
                  }, { 
                    data: [1,2,3,8,5,4,3,4,5,6,7,6,5,4,3,2,3,4,5,6,7,8,9,0,9,8,7,6,5,4],
                    label: "Wydalenia",
                    borderColor: "#8e5ea2",
                    fill: false
                  }
                ]
              },
              options: {
                title: {
                  display: true,
                  text: 'Przyjęcia vs wydalenia'
                }
              }
        }
    }

    componentDidMount(){
        let canvas = this.refs.graph; 
        let myLineChart = new Chart(canvas, {
            type: 'line',
            data: this.state.data,
            label: "chart"
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
