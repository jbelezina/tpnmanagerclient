import React, { Component } from 'react';
import '../css/Forms.css';
import '../css/reactDateTime.css';
import Datetime from 'react-datetime';
import moment from 'moment';
import 'moment/locale/pl';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import * as styles from './formInlineStyles';

class DripForm extends Component {  
    constructor(){
      super();
      this.state = {
        product: '',
        values: [],
        time_stop: '',
        time_start: '',
        comment: '',
      }
      this.handleDripSelect = this.handleDripSelect.bind(this);
      this.handlePortion = this.handlePortion.bind(this);
      this.handleDatePicker = this.handleDatePicker.bind(this);
      this.handleTotalDuration = this.handleTotalDuration.bind(this);
      this.handleComment = this.handleComment.bind(this);
      this.logState = this.logState.bind(this);
      this.clearState = this.clearState.bind(this);
      this.handleForm = this.handleForm.bind(this);
    }

    clearState(){
      this.setState({
        product: '',
        values: [],
        time_stop: '',
        time_start: 'podaj łączną długość przyjmowania',
        comment: '',
      }); 
    }

    handleForm(){
      let formValues = this.state;
      formValues.event_category = 'przyjecie';
      formValues.event_type = 'drip';
      console.log('drip form values just before sending', formValues);
      this.props.handleFormInput(formValues);
      this.props.selectTile(false);
      this.clearState();
    }

    logState(){
      console.log(this.state)
    }

    handleDripSelect(selected){
      console.log(selected.value);
        if (selected){
          this.setState({product:selected.value})
        } else {
          this.setState({product:[]});
      }
    }

    handlePortion(e){
      let values = [];
      let newValue = {
        value: parseInt(e.target.value),
        measure: 'ml'
      }
      values.push(newValue);
      this.setState({values});
    }

    handleDatePicker(mom){
      let myString = moment(mom).format("YYYY-MM-DD HH:mm:ss"); 
      this.setState({time_stop:myString});
      console.log(myString);
    }

    handleTotalDuration(){      
      let enteredDuration = this.refs.totalDuration.value;
      let enteredDurationNumber = parseInt(enteredDuration, 10);
      let stop = this.state.time_stop;
      let stopMoment = moment(stop.toString());
      let startTime = stopMoment.subtract(enteredDurationNumber, 'hours');
      startTime = startTime.toISOString();
      this.setState({time_start:startTime});
      }

      handleComment(e){
        this.setState({comment:e.target.value});
      }

    render(){

      const dripOptions = [
        { value: 'NaCl', label: 'NaCl' },
        { value: 'H20', label: 'H20' },
        { value: 'WHO', label: 'WHO' },
      ];

      let startedValue;
      if (this.state.time_start) {
        startedValue = moment(this.state.time_start).format('DD-MM-YYYY, HH:mm');
      } else {
        startedValue = 'podaj czas zakończenia podawania'
      }

      return (
        <div className="container">
          <div className="row form m-5">
            <div className="col d-flex flex-row p-0">
              <div style={styles.iconArea}>
                <div style={styles.header}><br/>Przyjęcie</div>
                <div className="dropdown-divider"></div>
                <div style={styles.icon}><i className={this.props.icon}></i></div>
                <div style={styles.eventType}>{this.props.name}</div>
              </div>
              <div style={styles.innerArea}>
                <form>
                  <div className="form-group row m-3 justify-content-end">
                    <button onClick={this.props.cancelForm} type="button" className="close" aria-label="Close" style={{color:'black'}}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="form-group row m-3">
                    <label className={styles.label}>Kroplówka:</label>
                    <div className="col-7">
                      <Select
                          menuContainerStyle={{ zIndex: '2' }}
                          name="drip"
                          value={this.state.product}
                          options={dripOptions}
                          onChange={this.handleDripSelect}
                          placeholder="Wybierz kroplówkę"
                      />                    
                    </div>
                  </div>
                  <div className="form-group row m-3">
                    <label className={styles.label}>Porcja:</label>
                    <div className="col-7">
                      <input onChange={this.handlePortion} className="form-control"/>
                    </div>
                    <label className="col-sm-1 col-form-label text-left pl-0">ml</label>
                  </div>
                  <div className="form-group row m-3">
                    <label className={styles.label}>Stop:</label>
                      <div className="col-7">
                      <Datetime ref='stopTime' onChange={data=>this.handleDatePicker(data)} defaultValue={moment()} locale="pl" timeFormat={true}/>
                      </div>
                  </div>
                  <div className="form-group row m-3">
                    <label className={styles.label}>Łącznie:</label>
                    <div className="col-7">
                      <input onChange={this.handleTotalDuration} ref='totalDuration' className="form-control"/>
                    </div>
                  </div>
                  <div className="form-group row m-3">
                    <label className={styles.label}>Start:</label>
                    <div className="col-7">
                      <input className="form-control-plaintext" type="text" value={startedValue} readOnly/>  
                    </div>
                  </div>
                  <div className="form-group row m-3">
                    <label className={styles.label}>Komentarz:</label>
                    <div className="col-7">
                      <textarea onChange={this.handleComment} className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>  
                    </div>
                  </div>
                  <div className="form-group row m-3">
                    <div className="col-7 offset-3">
                      <button type="button" onClick={this.handleForm} className={styles.addButton}>Dodaj</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div> 
      );
    }
}

export default DripForm;
