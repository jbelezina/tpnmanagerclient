import React, { Component } from 'react';
import '../css/Forms.css';
import '../css/reactDateTime.css';
import Datetime from 'react-datetime';
import moment from 'moment';
import 'moment/locale/pl';

class PressureForm extends Component {  
    constructor(){
      super();
      this.state = {
        pressure_value1: '',
        pressure_value2: '',
        pulse:'',
        when: '',
        comment: '',
      }
      
      this.handlePressureOne = this.handlePressureOne.bind(this);
      this.handlePressureTwo = this.handlePressureTwo.bind(this);
      this.handlePulse = this.handlePulse.bind(this);
      this.handleDatePicker = this.handleDatePicker.bind(this);
      this.handleComment = this.handleComment.bind(this);
      this.logState = this.logState.bind(this);
    }

    logState(){
      console.log(this.state);
    }

    handlePressureOne(e){
      this.setState({pressure_value1:e.target.value})
    }

    handlePressureTwo(e){
      this.setState({pressure_value2:e.target.value})
    }

    handlePulse(e){
      this.setState({pulse:e.target.value})
    }
    
    handleDatePicker(mom){
      let myString = moment(mom).format("YYYY-MM-DD HH:mm:ss"); 
      this.setState({when:myString});
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
          <div className="row form pl-0 pr-0 m-3">
            <div className="col d-flex flex-row ">
              <div style={iconArea}>
                <div style={header}><br/>Pomiar</div>
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
                  <label className="col-sm-2 col-form-label">Ciśnienie:</label>
                    <div className="col-3">
                      <input onChange={this.handlePressureOne} className="form-control"/>
                    </div>
                  <label className="col-sm-1 col-form-label text-left pl-0">na</label>
                    <div className="col-3">
                      <input onChange={this.handlePressureTwo} className="form-control"/>
                    </div>
                  </div>
                  <div className="form-group row m-3">  
                    <label className="col-sm-2 col-form-label">Puls:</label>
                    <div className="col-3">
                      <input onChange={this.handlePulse} className="form-control"/>
                    </div>
                  </div>
                  <div className="form-group row m-3">
                    <label className="col-sm-2 col-form-label">Kiedy:</label>
                      <div className="col-4">
                      <Datetime ref='stopTime' onChange={data=>this.handleDatePicker(data)} defaultValue={moment()} locale="pl" timeFormat={true}/>
                      </div>
                  </div>
                  <div className="form-group row m-3">
                    <label className="col-sm-2 col-form-label">Komentarz:</label>
                    <div className="col-10">
                      <textarea onChange={this.handleComment} className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>  
                    </div>
                  </div>
                  <div className="form-group row m-3">
                    <button onClick={this.logState} type="button" className="pr-3 mt-4 mb-4 col-12 btn btn-dark">Dodaj</button>
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


