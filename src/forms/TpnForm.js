import React, { Component } from 'react';
import '../css/Forms.css';
import '../css/reactDateTime.css';
import Datetime from 'react-datetime';
import moment from 'moment';
import 'moment/locale/pl';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class TpnForm extends Component {  
    constructor(){
      super();
      this.state = {
        tpn: '',
        portion: '',
        stop: '',
        start: 'podaj łączną długość przyjmowania',
        comment: '',
      }
      this.handleTPNSelect = this.handleTPNSelect.bind(this);
      this.handlePortion = this.handlePortion.bind(this);
      this.handleDatePicker = this.handleDatePicker.bind(this);
      this.handleTotalDuration = this.handleTotalDuration.bind(this);
      this.handleComment = this.handleComment.bind(this);
      this.logState = this.logState.bind(this);
    }

    logState(){
      console.log(this.state)
    }

    handleTPNSelect(selected){
      console.log(selected.value);
        if (selected){
          this.setState({tpn:selected.value})
        } else {
          this.setState({tpn:[]});
      }
    }

    handlePortion(e){
      this.setState({portion:e.target.value});
    }

    handleDatePicker(mom){
      let myString = moment(mom).format("YYYY-MM-DD HH:mm:ss"); 
      this.setState({stop:myString});
      console.log(myString);
    }

    handleTotalDuration(){      
      let enteredDuration = this.refs.totalDuration.value;
      let enteredDurationNumber = parseInt(enteredDuration, 10);
      let stop = this.state.stop;
      let stopMoment = moment(stop.toString());
      let startTime = stopMoment.subtract(enteredDurationNumber, 'hours');
      startTime = startTime.format("DD.MM.YYYY HH:mm");
      this.setState({start:startTime});
      }

      handleComment(e){
        this.setState({comment:e.target.value});
      }

    render(){

      const tpnOptions = [
        { value: 'Multimel', label: 'Multimel' },
      ];

      let iconArea = {
        height: "100%",
        width: "100px",
        borderRightStyle: 'solid',
        borderRightWidth: 'thin',
        borderColor: 'lightgrey',
      }

      let innerArea = {
        width: "100%",
      }

      let header = {
        fontSize: '10px',
      }

      return (
        <div className="container">
          <div className="row form pl-0 pr-0 m-3">
            <div className="col d-flex flex-row ">
              <div style={iconArea}>
                <div style={header}><br/>Przyjęcie</div>
                <div className="dropdown-divider"></div>
                <div><i className={this.props.icon}></i></div>
                <div>{this.props.name}</div>
              </div>
              <div style={innerArea}>
                <form>
                  <div className="form-group row m-3 justify-content-end">
                    <button onClick={this.props.cancelForm} type="button" className="close" aria-label="Close" style={{color:'black'}}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="form-group row m-3">
                    <label className="col-sm-2 col-form-label">TPN:</label>
                    <div className="col-sm-10">
                      <Select
                          menuContainerStyle={{ zIndex: '2' }}
                          name="tpn"
                          value={this.state.tpn}
                          options={tpnOptions}
                          onChange={this.handleTPNSelect}
                          placeholder="Wybierz TPN"
                      />                    
                    </div>
                  </div>
                  <div className="form-group row m-3">
                    <label className="col-sm-2 col-form-label">Porcja:</label>
                    <div className="col-4">
                      <input onChange={this.handlePortion} className="form-control"/>
                    </div>
                    <label className="col-sm-1 col-form-label text-left pl-0">ml</label>
                  </div>
                  <div className="form-group row m-3">
                    <label className="col-sm-2 col-form-label">Stop:</label>
                      <div className="col-4">
                      <Datetime ref='stopTime' onChange={data=>this.handleDatePicker(data)} defaultValue={moment()} locale="pl" timeFormat={true}/>
                      </div>
                  </div>
                  <div className="form-group row m-3">
                    <label className="col-sm-2 col-form-label">Łącznie:</label>
                    <div className="col-4">
                      <input onChange={this.handleTotalDuration} ref='totalDuration' className="form-control"/>
                    </div>
                  </div>
                  <div className="form-group row m-3">
                    <label className="col-sm-2 col-form-label">Start:</label>
                    <div className="col-10">
                      <input className="form-control-plaintext" type="text" value={this.state.start} readOnly/>  
                    </div>
                  </div>
                  <div className="form-group row m-3">
                    <label className="col-sm-2 col-form-label">Komentarz:</label>
                    <div className="col-10">
                      <textarea onChange={this.handleComment} className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>  
                    </div>
                  </div>
                  <div className="form-group row m-3">
                    <button type="button" onClick={this.logState} className="pr-3 mt-3 col-12 btn btn-dark">Dodaj</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div> 
      );
    }
}

export default TpnForm;
