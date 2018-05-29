import React, { Component } from 'react';
import '../css/Forms.css';
import '../css/reactDateTime.css';
import Datetime from 'react-datetime';
import moment from 'moment';
import 'moment/locale/pl';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import * as styles from './formInlineStyles';

class DrugForm extends Component {  
    constructor(){
      super();
      this.state = {
        product: '',
        values: [],
        time_stop: '',
        comment: '',
        drugOptions: '',
      }
      this.handleDrugSelect = this.handleDrugSelect.bind(this);
      this.handlePortion = this.handlePortion.bind(this);
      this.handleDatePicker = this.handleDatePicker.bind(this);
      this.handleComment = this.handleComment.bind(this);
      this.logState = this.logState.bind(this);
      this.clearState = this.clearState.bind(this);
      this.handleForm = this.handleForm.bind(this);
    }

    componentDidMount() {
      fetch('http://localhost:3000/api/products/drug/dropdown')
       .then(res=>res.json())
       .then(res=>{
         let options = res.map((item)=>{
           return({value:item.value, label:item.label})
         })
         this.setState({drugOptions: options});
       })
    }

    clearState(){
      this.setState({
        product: '',
        values: [],
        time_stop: '',
        comment: '',
      }); 
    }

    handleForm(){
      let formValues = this.state;
      formValues.event_category = 'przyjecie';
      formValues.event_type = 'drug';
      console.log('drug form values just before sending', formValues);
      this.props.handleFormInput(formValues);
      this.props.selectTile(false);
      this.clearState();
    }

    logState(){
      console.log(this.state);
    }

    handleDrugSelect(selected){
      if (selected){
        this.setState({ product: selected.value })
      } else {
        this.setState({ product: '' });
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

    handleComment(e){
      this.setState({comment:e.target.value});
    }

    render(){
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
                    <label className={styles.label}>Lek</label>
                    <div className="col-7">
                      <Select
                          menuContainerStyle={{ zIndex: '2' }}
                          name="leki"
                          value={this.state.product}
                          options={this.state.drugOptions}
                          onChange={this.handleDrugSelect}
                          placeholder="Wybierz lek"
                        />
                    </div>
                  </div>
                  <div className="form-group row m-3">
                    <label className={styles.label}>Porcja:</label>
                    <div className="col-7">
                      <input onChange={this.handlePortion} className="form-control"/>
                    </div>
                    <label className="col-sm-1 col-form-label text-left pl-0">tabl.</label>
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

export default DrugForm;
