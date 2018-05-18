import React, { Component } from 'react';
import '../css/Forms.css';
import '../css/reactDateTime.css';
import Datetime from 'react-datetime';
import moment from 'moment';
import 'moment/locale/pl';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


class DrugForm extends Component {  
    constructor(){
      super();
      this.state = {
        drug: '',
        portion: '',
        kiedy: '',
        comment: '',
      }
      this.handleDrugSelect = this.handleDrugSelect.bind(this);
      this.handlePortion = this.handlePortion.bind(this);
      this.handleDatePicker = this.handleDatePicker.bind(this);
      this.handleComment = this.handleComment.bind(this);
      this.logState = this.logState.bind(this);
    }

    logState(){
      console.log(this.state);
    }

    handleDrugSelect(selected){
      if (selected){
        this.setState({ drug: selected.value })
      } else {
        this.setState({ drug: '' });
      }
    }

    handlePortion(e){
      this.setState({portion:e.target.value});
    }

    handleDatePicker(mom){
      let myString = moment(mom).format("YYYY-MM-DD HH:mm:ss"); 
      this.setState({kiedy:myString});
      console.log(myString);
    }

    handleComment(e){
      this.setState({comment:e.target.value});
    }

    render(){
      const drugOptions = [
        { value: 'Panadol', label: 'Panadol' },
        { value: 'Apap', label: 'Apap' },
        { value: 'Whiskey', label: 'Whiskey' },
      ];

      let iconArea = {
        height: "100%",
        width: "110px",
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
                    <label className="col-sm-2 col-form-label">Lek</label>
                    <div className="col-sm-10">
                      <Select
                          menuContainerStyle={{ zIndex: '2' }}
                          name="leki"
                          value={this.state.drug}
                          options={drugOptions}
                          onChange={this.handleDrugSelect}
                          placeholder="Wybierz lek"
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

export default DrugForm;
