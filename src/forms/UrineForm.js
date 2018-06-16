import React, { Component } from 'react';
import '../css/Forms.css';
import '../css/reactDateTime.css';
import Datetime from 'react-datetime';
import moment from 'moment';
import 'moment/locale/pl';
import * as styles from './formInlineStyles';

class UrineForm extends Component {  
    constructor(){
      super();
      this.state = {
        values: [],
        time_stop: moment(),
        comment: '',
      }
      
      this.handlePortion = this.handlePortion.bind(this);
      this.handleDatePicker = this.handleDatePicker.bind(this);
      this.handleComment = this.handleComment.bind(this);
      this.logState = this.logState.bind(this);
      this.clearState = this.clearState.bind(this);
      this.handleForm = this.handleForm.bind(this);
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
      formValues.event_category = 'wydalenie';
      formValues.event_type = 'urine';
      console.log('urine form before sending', formValues);
      console.log(this.props);
      this.props.handleFormInput(formValues);
      this.props.showSnackbar();
      this.props.selectTile(false);
      this.clearState();
    }

    logState(){
      console.log(this.state);
    }

    handlePortion(e){
      this.setState({values: [{value: e.target.value, measure:'ml'}]});
    }
    
    handleDatePicker(mom){ 
      this.setState({time_stop:mom});
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
                <div style={styles.header}><br/>Wydalenie</div>
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
                  <label className={styles.label}>Wydalona ilość:</label>
                    <div className="col-7">
                      <input onChange={this.handlePortion} className="form-control"/>
                    </div>
                  <label className="col-sm-1 col-form-label text-left pl-0">ml</label>
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

export default UrineForm;


