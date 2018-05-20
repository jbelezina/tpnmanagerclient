import React, { Component } from 'react';
import '../css/Forms.css';
import '../css/reactDateTime.css';
import Datetime from 'react-datetime';
import moment from 'moment';
import 'moment/locale/pl';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import * as styles from './formInlineStyles';

class TpnForm extends Component {  
    constructor(){
      super();
      this.state = {
        event_category: 'przyjecie',
        event_type: 'tpn',
        product: '',
        values: '',
        time_start: '',
        time_stop: '',
        comment: '',
        tpnOptions: '',
      }
      this.handleTPNSelect = this.handleTPNSelect.bind(this);
      this.handlePortion = this.handlePortion.bind(this);
      this.handleDatePicker = this.handleDatePicker.bind(this);
      this.handleTotalDuration = this.handleTotalDuration.bind(this);
      this.handleComment = this.handleComment.bind(this);
      this.logState = this.logState.bind(this);
      this.clearState = this.clearState.bind(this);
      this.handleForm = this.handleForm.bind(this);
    }
        
    componentDidMount() {
        fetch('http://localhost:3000/api/products/tpn/dropdown')
         .then(res=>res.json())
         .then(res=>{
           let options = res.map((item)=>{
             return({value:item.value, label:item.value})
           })
           this.setState({tpnOptions: options});
         })
    }

    clearState(){
      this.setState({
        event_category: 'przyjęcie',
        event_type: 'tpn',
        product: '',
        values: [],
        time_start: 'podaj łączną długość przyjmowania',
        time_stop: '',
        comment: '',
      }); 
    }

    handleForm(){
      let formValues = this.state;
      console.log('tpn form before sending', formValues);
      this.props.handleFormInput(formValues);
      this.props.selectTile(false);
      this.clearState();
    }

    logState(){
      console.log(this.state)
    }

    handleTPNSelect(selected){
      console.log(selected.value);
        if (selected){
          this.setState({product:selected.value})
        } else {
          this.setState({product:[]});
      }
    }

    handlePortion(e){
      let result = [{value: e.target.value, measure: 'ml'}]
      this.setState({values: result});
    }

    handleDatePicker(mom){
      let myString = moment(mom).toISOString(); 
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
      this.setState({stop_time:stopMoment});
      }

      handleComment(e){
        this.setState({comment:e.target.value});
      }

    render(){
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
                    <label className={styles.label}>TPN:</label>
                    <div className="col-7">
                      <Select
                          menuContainerStyle={{ zIndex: '2' }}
                          name="tpn"
                          value={this.state.product}
                          options={this.state.tpnOptions}
                          onChange={this.handleTPNSelect}
                          placeholder="Wybierz TPN"
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
                    <label className="col-sm-3 text-right col-form-label">Zakończono podawanie:</label>
                      <div className="col-7">
                      <Datetime ref='stopTime' onChange={data=>this.handleDatePicker(data)} defaultValue={moment()} locale="pl" timeFormat={true}/>
                      </div>
                  </div>
                  <div className="form-group row m-3">
                    <label className={styles.label}>Łączny czas podawania:</label>
                    <div className="col-7">
                      <input onChange={this.handleTotalDuration} ref='totalDuration' className="form-control"/>
                    </div>
                  </div>
                  <div className="form-group row m-3">
                    <label className={styles.label}>Rozpoczęto podawanie:</label>
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

export default TpnForm;
