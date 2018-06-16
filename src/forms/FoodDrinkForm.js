import React, { Component } from 'react';
import '../css/Forms.css';
import '../css/reactDateTime.css';
import Datetime from 'react-datetime';
import moment from 'moment';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import 'moment/locale/pl';
import * as styles from './formInlineStyles';

class FoodDrinkForm extends Component {  
    constructor(){
      super();
      this.state = {
        food: '',
        foodSelect: ['active','','',''],
        drink: '',
        drinkSelect: ['active','','',''],
        time_stop: '',
        comment: '',
        foodOptions: '',
        drinkOptions: '',
      }
      this.handleDatePicker = this.handleDatePicker.bind(this);
      this.handleFoodSize = this.handleFoodSize.bind(this);
      this.handleDrinkSize = this.handleDrinkSize.bind(this);
      this.handleDrinkSelect = this.handleDrinkSelect.bind(this);
      this.handleFoodSelect = this.handleFoodSelect.bind(this);
      this.handleComment = this.handleComment.bind(this);
      this.logState = this.logState.bind(this);
      this.clearState = this.clearState.bind(this);
      this.handleForm = this.handleForm.bind(this);
    }

    componentDidMount() {
      fetch('http://localhost:3000/api/products/food/dropdown')
       .then(res=>res.json())
       .then(res=>{
         let options = res.map((item)=>{
           return({value:item.value, label:item.label})
         })
         this.setState({foodOptions: options});
       })

       fetch('http://localhost:3000/api/products/drink/dropdown')
       .then(res=>res.json())
       .then(res=>{
         let options = res.map((item)=>{
           return({value:item.value, label:item.label})
         })
         this.setState({drinkOptions: options,
                        time_stop: moment() 
        });
       })
    }

    clearState(){
      this.setState({
        food: '',
        foodSelect: ['active','','',''],
        drink: '',
        drinkSelect: ['active','','',''],
        time_stop: moment(),
        comment: '',
        foodOptions: '',
        drinkOptions: '',
      }); 
    }

    handleForm(){
      if (this.state.food) {
        let formValues = {
          event_category: 'przyjecie',
          event_type: 'food',
          product: this.state.food,
          time_stop: this.state.time_stop,
          comment: this.state.comment,
        }
        
        let foodSelect = this.state.foodSelect;
        let value;
        if (foodSelect[0] === "active"){
          value = '150';
        } else if (foodSelect[1] === "active"){
          value = '250';
        } else if (foodSelect[2] === "active"){
          value = '350';
        } else if (foodSelect[3] === "active"){
          value = '500';
        } 
        formValues.values = [{
          value,
          measure:'mg'
        }]
        
        console.log('food form before sending', formValues);
        this.props.handleFormInput(formValues);        
      }

      if (this.state.drink) {
        let formValues = {
          event_category: 'przyjecie',
          event_type: 'drink',
          product: this.state.drink,
          time_stop: this.state.time_stop,
          comment: this.state.comment,
        }
        
        let drinkSelect = this.state.drinkSelect;
        let value;
        if (drinkSelect[0] === "active"){
          value = '100';
        } else if (drinkSelect[1] === "active"){
          value = '150';
        } else if (drinkSelect[2] === "active"){
          value = '200';
        } else if (drinkSelect[3] === "active"){
          value = '300';
        } 
        formValues.values = [{
          value,
          measure:'ml'
        }]
        
        console.log('drink form before sending', formValues);
        this.props.handleFormInput(formValues);        
      }

      this.props.selectTile(false);
      this.clearState();
    }

    logState(){
      console.log(this.state);
    }

    handleComment(e){
      this.setState({comment:e.target.value});
    }

    handleFoodSize(index){
      let oldFoodSelectState = this.state.foodSelect;
      let newFoodSelectState = oldFoodSelectState.map((oldstate, i)=>{
        if (i === index) {
          return 'active';
        } else {
          return '';
        }
      });
      console.log('newFoodSelectState', newFoodSelectState);
      this.setState({foodSelect:newFoodSelectState});
    }
    
    handleDrinkSize(index){
      let oldDrinkSelectState = this.state.drinkSelect;
      let newDrinkSelectState = oldDrinkSelectState.map((oldstate, i)=>{
        if (i === index) {
          return 'active';
        } else {
          return '';
        }
      });
      console.log('newDrinkSelectState', newDrinkSelectState);
      this.setState({drinkSelect:newDrinkSelectState});
    }

    handleDrinkSelect(selected){
      if (selected){
        this.setState({drink:selected.value})
      } else {
        this.setState({drink:''});
      }
    }

    handleFoodSelect(selected){
      console.log(selected.value);
      if (selected){
        this.setState({food:selected.value})
      } else {
        this.setState({food:''});
      }
    }

    handleDatePicker(mom){
      let myString = moment(mom).toISOString(); 
      this.setState({time_stop:myString});
      console.log(myString);
    }

    render(){

      return (
        <div className="container">
          <div className="row form m-5">
            <div className="col p-0 d-flex flex-row ">
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
                    <label className={styles.label}>Jedzenie:</label>
                    <div className="col-7">
                      <Select
                        menuContainerStyle={{ zIndex: '2' }}
                        name="jedzenie"
                        value={this.state.food}
                        options={this.state.foodOptions}
                        onChange={this.handleFoodSelect}
                        placeholder="Wybierz jedzenie"
                      />
                    </div>
                  </div>
                  <div className="form-group row m-3">  
                  <label className={styles.label}>Porcja:</label>
                    <div className="col-7">
                      <div className="btn-group btn-group-lg btn-group-justified" role="group" aria-label="buttons">
                        <button type="button" onClick={()=>{this.handleFoodSize(0)}} className={"btn btn-default" + ' ' + this.state.foodSelect[0]}>150g</button>
                        <button type="button" onClick={()=>{this.handleFoodSize(1)}} className={"btn btn-default" + ' ' + this.state.foodSelect[1]}>250g</button>
                        <button type="button" onClick={()=>{this.handleFoodSize(2)}} className={"btn btn-default" + ' ' + this.state.foodSelect[2]}>350g</button>
                        <button type="button" onClick={()=>{this.handleFoodSize(3)}} className={"btn btn-default" + ' ' + this.state.foodSelect[3]}>500g</button>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="form-group row m-3">
                    <label className={styles.label}>Picie:</label>
                    <div className="col-7">
                      <Select
                        menuContainerStyle={{ zIndex: '2' }}
                        name="university"
                        value={this.state.drink}
                        options={this.state.drinkOptions}
                        onChange={this.handleDrinkSelect}
                        placeholder="Wybierz napój"
                      />
                    </div>
                  </div>
                  <div className="form-group row m-3">  
                  <label className={styles.label}>Porcja:</label>
                    <div className="col-7">
                      <div className="btn-group btn-group-lg btn-group-justified" role="group" aria-label="buttons">
                        <button ref='0' type="button" onClick={()=>{this.handleDrinkSize(0)}} className={"btn btn-default" + ' ' + this.state.drinkSelect[0]}>100ml</button>
                        <button ref='1' type="button" onClick={()=>{this.handleDrinkSize(1)}} className={"btn btn-default" + ' ' + this.state.drinkSelect[1]}>150ml</button>
                        <button ref='2' type="button" onClick={()=>{this.handleDrinkSize(2)}} className={"btn btn-default" + ' ' + this.state.drinkSelect[2]}>200ml</button>
                        <button ref='3' type="button" onClick={()=>{this.handleDrinkSize(3)}} className={"btn btn-default" + ' ' + this.state.drinkSelect[3]}>300ml</button>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="form-group row m-3">
                    <label className={styles.label}>Stop:</label>
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
                    <div className="offset-3 col-7">
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

export default FoodDrinkForm;


