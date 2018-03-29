import React, { Component } from 'react';
import '../css/Forms.css';
import '../css/reactDateTime.css';
import Datetime from 'react-datetime';
import moment from 'moment';
import 'moment/locale/pl';

class OstomyForm extends Component {  
    constructor(){
      super();
      this.state = {
        size: ['active','','',''],
        when: '',
        comment: '',
      }
      
      this.handleSize = this.handleSize.bind(this);
      this.handleDatePicker = this.handleDatePicker.bind(this);
      this.handleComment = this.handleComment.bind(this);
      this.logState = this.logState.bind(this);
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
                <div style={header}><br/>Wydalenie</div>
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
                  <label className="col-sm-2 col-form-label">Wydalona ilość:</label>
                    <div className="col-8">
                      <div className="btn-group btn-group-lg btn-group-justified" role="group" aria-label="buttons">
                        <button type="button" onClick={()=>{this.handleSize(0)}} className={"btn btn-default" + ' ' + this.state.size[0]}>100 ml</button>
                        <button type="button" onClick={()=>{this.handleSize(1)}} className={"btn btn-default" + ' ' + this.state.size[1]}>150 ml</button>
                        <button type="button" onClick={()=>{this.handleSize(2)}} className={"btn btn-default" + ' ' + this.state.size[2]}>200 ml</button>
                        <button type="button" onClick={()=>{this.handleSize(3)}} className={"btn btn-default" + ' ' + this.state.size[3]}>250 ml</button>
                      </div>
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

export default OstomyForm;


