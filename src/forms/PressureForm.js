import React, { Component } from 'react';
import '../css/Forms.css';
import '../css/reactDateTime.css';
import Datetime from 'react-datetime';
import moment from 'moment';
import 'moment/locale/pl';
import * as styles from './formInlineStyles';

class PressureForm extends Component {  
    constructor(){
      super();
      this.state = {
        values: [],
        time_stop: '',
        comment: '',
      }
      
      this.handlePressureOne = this.handlePressureOne.bind(this);
      this.handlePressureTwo = this.handlePressureTwo.bind(this);
      this.handlePulse = this.handlePulse.bind(this);
      this.handleDatePicker = this.handleDatePicker.bind(this);
      this.handleComment = this.handleComment.bind(this);
      this.clearState = this.clearState.bind(this);
      this.handleForm = this.handleForm.bind(this)
    }

    clearState(){
      this.setState({
        values: [],
        time_stop: '',
        comment: '',
      }); 
    }

    handleForm(){
      let formValues = this.state;
      formValues.event_category = 'pomiar';
      formValues.event_type = 'pressure';
      console.log('pressure form before sending', formValues);
      this.props.handleFormInput(formValues);
      this.props.showSnackbar();
      this.props.selectTile(false);
      this.clearState();
    }

    handlePressureOne(e){
      let values = this.state.values.slice(0);       
      values[0] = {
        value: e.target.value,
        measure: 'mmHg'
      }  
      this.setState({values})
    }

    handlePressureTwo(e){
      let values = this.state.values.slice(0);
      values[1] = {
        value: e.target.value,
        measure: 'mmHg'
      }  
      this.setState({values})
    }

    handlePulse(e){
      let values = this.state.values.slice(0);
      values[2] = {
        value: e.target.value,
        measure: 'uderzeń/min'
      }  
      this.setState({values})    
    }

    handleDatePicker(mom){
      let myString = moment(mom).toISOString(); 
      this.setState({time_stop:myString});
      console.log(myString);
    }

    handleComment(e){
      this.setState({comment:e.target.value});
    }

    render(){

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
          <div className="row form m-5">
            <div className="col d-flex flex-row p-0">
              <div style={styles.iconArea}>
                <div style={styles.header}><br/>Pomiar</div>
                <div className="dropdown-divider"></div>
                <div style={styles.icon}><i className={this.props.icon}></i></div>
                <div style={styles.eventType}>{this.props.name}</div>
              </div>
              <div style={innerArea}>
                <form>
                  <div className="form-group row m-3 justify-content-end">
                    <button onClick={this.props.cancelForm} type="button" className="close" aria-label="Close" style={{color:'black'}}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="form-group row m-3">  
                    <label className={styles.label}>Ciśnienie:</label>
                      <div className="col-7">
                        <input onChange={this.handlePressureOne} className="form-control"/>
                      </div>
                  </div>
                  <div className="form-group row m-3">
                    <label className={styles.label}>na</label>
                      <div className="col-7">
                        <input onChange={this.handlePressureTwo} className="form-control"/>
                      </div>
                  </div>
                  <div className="form-group row m-3">  
                    <label className={styles.label}>Puls:</label>
                    <div className="col-7">
                      <input onChange={this.handlePulse} className="form-control"/>
                    </div>
                  </div>
                  <div className="form-group row m-3">
                    <label className={styles.label}>Kiedy:</label>
                      <div className="col-7">
                      <Datetime ref='stopTime' onChange={data=>this.handleDatePicker(data)} defaultValue={moment()} locale="pl" timeFormat={true}/>
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
                      <button onClick={this.handleForm} type="button" className={styles.addButton}>Dodaj</button>
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

export default PressureForm;


