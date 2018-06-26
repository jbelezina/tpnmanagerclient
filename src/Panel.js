import React, { Component } from 'react';
import InVsOut from './charts/InVsOut';
import Temperature from './charts/Temperature';
import Pressure from './charts/Pressure';
import Weight from './charts/Weight';
import Alert from './Alert';

class Panel extends Component {

  constructor(){
    super();
    this.state = {
      maxWeeklyTpn: null,
      maxDailyFood: null,
      maxDailyDrink: null,
    }
  }

  componentDidMount(){

      let formattedData;
      let data = [];
      let labels = [];

      fetch('http://localhost:3000/api/alerts/maxWeeklyTpn')
       .then(res=>res.json())
       .then(maxWeeklyTpn=>{
         this.setState({maxWeeklyTpn});
       })

       fetch('http://localhost:3000/api/alerts/maxDailyFood')
       .then(res=>res.json())
       .then(maxDailyFood=>{
         this.setState({maxDailyFood});
       })

       fetch('http://localhost:3000/api/alerts/maxDailyDrink')
       .then(res=>res.json())
       .then(maxDailyDrink=>{
         this.setState({maxDailyDrink});
       })
       
  }

  render() {

    let maxWeeklyTpn;
    if (this.state.maxWeeklyTpn){
      maxWeeklyTpn = <Alert data={this.state.maxWeeklyTpn} />
    } else {
      maxWeeklyTpn = <p>Trwa pobieranie danych</p>
    }

    let maxDailyFood;
    if (this.state.maxDailyFood){
      maxDailyFood = <Alert data={this.state.maxDailyFood} />
    } else {
      maxDailyFood = <p>Trwa pobieranie danych</p>
    }

    let maxDailyDrink;
    if (this.state.maxDailyDrink){
      maxDailyDrink = <Alert data={this.state.maxDailyDrink} />
    } else {
      maxDailyDrink = <p>Trwa pobieranie danych</p>
    }

    return (
      <div style={{marginLeft:'130px', marginTop:'60px', display:'fixed', width:'86%'}}>
        <div className="row">
          <div className="col-4 d-flex flex-row justify-content-center pt-4 pr-4 pl-4">
            {maxWeeklyTpn}       
          </div>
          <div className="col-4 d-flex flex-row justify-content-center pt-4 pr-4 pl-4">
            {maxDailyFood}
          </div>
          <div className="col-4 d-flex flex-row justify-content-center pt-4 pr-4 pl-4">
            {maxDailyDrink}
          </div>
        </div>
        <div className="row">
          <div className="col-4 d-flex flex-row justify-content-center p-4">
            <Temperature />
          </div>
          <div className="col-4 d-flex flex-row justify-content-center p-4">
            <Pressure />
          </div>
          <div className="col-4 d-flex flex-row justify-content-center p-4">
            <Weight />
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex flex-row justify-content-center p-4"> 
            <InVsOut />
          </div>
        </div>
      </div>
    );
  }
}

export default Panel;
