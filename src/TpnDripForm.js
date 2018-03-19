import React, { Component } from 'react';
import './css/Forms.css';
import 'font-awesome/css/font-awesome.css';
import './css/reactDateTime.css';
import Datetime from 'react-datetime';
import moment from 'moment';
import 'moment/locale/pl';

class TpnDripForm extends Component {  

    constructor(){
      super();
      this.state = {
        stopMoment:'',
        stop: '',
        lacznie: 0,
      }

      this.handleDatePicker = this.handleDatePicker.bind(this);
      this.handleTotalDuration = this.handleTotalDuration.bind(this);
      this.logState = this.logState.bind(this);
    }

    logState(){
      console.log(this.state)
    }

    handleDatePicker(mom){
      let myString = moment(mom).format("YYYY-MM-DD HH:mm:ss"); 
      this.setState({stop:myString});
      console.log(myString);
    }

    handleTotalDuration(){
      let stop = this.state.stop;
      
      
      let enteredDuration = this.refs.totalDuration.value;
      let time = moment.duration(parseInt(enteredDuration), 'hours');
      
      console.log(time);
      console.log('date is' + stop);
      }

    render(){
      let style = {
        width:"100%",
      }

      let iconArea = {
        height: "100%",
        width: "100px",
        borderRightStyle: 'solid',
        borderRightWidth: 'thin',
        borderColor: 'lightgrey',
      }

      let innerArea = {
        height: "300px",
        width: "100%",
      }

      let header = {
        fontSize: '10px',
      }

      return (
        <div className="container">
          <div className="row loggedActivity pl-0 pr-0 m-3">
            <div className="col d-flex flex-row ">
              <div style={iconArea}>
                <div style={header}><br/>Pobranie</div>
                <div className="dropdown-divider"></div>
                <div><i className="far fa-address-book fa-2x"></i></div>
                <div>Name</div>
              </div>
              <div style={innerArea}>
                <form>
                  <div className="form-group row m-3">
                    <label className="col-sm-2 col-form-label">Produkt:</label>
                    <div className="col-sm-10">
                      <select className="form-control" id="exampleFormControlSelect1">
                        <option>Multimel</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row m-3">
                    <label className="col-sm-2 col-form-label">Porcja:</label>
                    <div className="col-5">
                      <input className="form-control"/>
                    </div>
                    <label className="col-sm-1 col-form-label text-left pl-0">ml</label>
                  </div>
                  <div className="form-group row m-3">
                    <label className="col-sm-2 col-form-label">Stop:</label>
                      <div className="col-6">
                      <Datetime ref='stopTime' onChange={data=>this.handleDatePicker(data)} defaultValue={moment()} locale="pl" timeFormat={true}/>
                      </div>
                    <label className="col-sm-2 col-form-label">Łącznie:</label>
                    <div className="col-2">
                      <input onChange={this.handleTotalDuration} ref='totalDuration' className="form-control"/>
                    </div>
                  </div>
                  <div className="form-group row m-3">
                    <label className="col-sm-2 col-form-label">Start:</label>
                    <div className="col-10">
                      <input className="form-control-plaintext" type="text" placeholder="Podaj ile trwało przyjmowanie" value={this.state.start} readOnly/>  
                    </div>
                    <button onClick={this.logState}>LOG</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div> 
      );
    }
}

export default TpnDripForm;
