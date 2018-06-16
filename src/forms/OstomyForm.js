import React, { Component } from 'react';
import '../css/Forms.css';
import '../css/reactDateTime.css';
import Datetime from 'react-datetime';
import moment from 'moment';
import 'moment/locale/pl';
import * as styles from './formInlineStyles';

class OstomyForm extends Component {  
    constructor(){
      super();
      this.state = {
        size: ['active','','',''],
        time_stop: moment(),
        comment: '',
      }
      
      this.handleSize = this.handleSize.bind(this);
      this.handleDatePicker = this.handleDatePicker.bind(this);
      this.handleComment = this.handleComment.bind(this);
      this.logState = this.logState.bind(this);
      this.clearState = this.clearState.bind(this);
      this.handleForm = this.handleForm.bind(this);
    }

    clearState(){
      this.setState({
        size: ['active','','',''],
        time_stop: moment(),
        comment: '',
      }); 
    }

    handleForm(){
      let value;
      let selectedSize = this.state.size.indexOf('active');

      if (selectedSize === 0) {
        value = 100;
      } else if (selectedSize === 1) {
        value = 150;
      } else if (selectedSize === 2) {
        value = 200;
      } else if (selectedSize === 3) {
        value = 250;
      }

      let values = [];
      values.push({
        value,
        measure: 'ml'
      })

      let event_type;
      let icon;
      switch(this.props.name) {
        case 'Kolostomia':
            event_type = 'colostomy';
            break;
        case 'Ilestomia':
            event_type = 'ilestomy';
            break;
      }  

      let formValues = {
        event_category: 'wydalenie',
        event_type,
        time_stop: this.state.time_stop.toISOString(),
        values,
        comment: this.state.comment,
      }

      console.log('ostomy form before sending', formValues);
      this.props.handleFormInput(formValues);
      this.props.selectTile(false);
      this.clearState();
    }


    logState(){
      console.log(this.state);
    }

    handleSize(index){
      let oldSelectState = this.state.size;
      let newSelectState = oldSelectState.map((oldstate, i)=>{
        if (i === index) {
          return 'active';
        } else {
          return '';
        }
      });
      this.setState({size:newSelectState});
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
                      <div className="btn-group btn-group-lg btn-group-justified" role="group" aria-label="buttons">
                        <button type="button" onClick={()=>{this.handleSize(0)}} className={"btn btn-default" + ' ' + this.state.size[0]}>100 ml</button>
                        <button type="button" onClick={()=>{this.handleSize(1)}} className={"btn btn-default" + ' ' + this.state.size[1]}>150 ml</button>
                        <button type="button" onClick={()=>{this.handleSize(2)}} className={"btn btn-default" + ' ' + this.state.size[2]}>200 ml</button>
                        <button type="button" onClick={()=>{this.handleSize(3)}} className={"btn btn-default" + ' ' + this.state.size[3]}>250 ml</button>
                      </div>
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

export default OstomyForm;


