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
        start: '',
        comment: '',
      }
      this.handleDatePicker = this.handleDatePicker.bind(this);
      this.handleFoodSize = this.handleFoodSize.bind(this);
      this.handleDrinkSize = this.handleDrinkSize.bind(this);
      this.handleDrinkSelect = this.handleDrinkSelect.bind(this);
      this.handleFoodSelect = this.handleFoodSelect.bind(this);
      this.handleComment = this.handleComment.bind(this);
      this.logState = this.logState.bind(this);
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
      let myString = moment(mom).format("YYYY-MM-DD HH:mm:ss"); 
      this.setState({start:myString});
      console.log(myString);
    }

    render(){
      
      const foodOptions = [
        { value: 'Kluski z makiem', label: 'Kluski z makiem' },
        { value: 'Kotlety mielone z ziemniakami', label: 'Mielone z ziemniakami' },
        { value: 'Kulesza', label: 'Kulesza' },
      ];
      
      const drinkOptions = [
        { value: 'Woda', label: 'Woda' },
        { value: 'Herbata', label: 'Herbata' },
        { value: 'Wino czerwone', label: 'Wino czerwone' },
      ];

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
                        options={foodOptions}
                        onChange={this.handleFoodSelect}
                        placeholder="Wybierz jedzenie"
                      />
                    </div>
                  </div>
                  <div className="form-group row m-3">  
                  <label className={styles.label}>Porcja:</label>
                    <div className="col-7">
                      <div className="btn-group btn-group-lg btn-group-justified" role="group" aria-label="buttons">
                        <button type="button" onClick={()=>{this.handleFoodSize(0)}} className={"btn btn-default" + ' ' + this.state.foodSelect[0]}>S</button>
                        <button type="button" onClick={()=>{this.handleFoodSize(1)}} className={"btn btn-default" + ' ' + this.state.foodSelect[1]}>M</button>
                        <button type="button" onClick={()=>{this.handleFoodSize(2)}} className={"btn btn-default" + ' ' + this.state.foodSelect[2]}>L</button>
                        <button type="button" onClick={()=>{this.handleFoodSize(3)}} className={"btn btn-default" + ' ' + this.state.foodSelect[3]}>XL</button>
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
                        options={drinkOptions}
                        onChange={this.handleDrinkSelect}
                        placeholder="Wybierz napój"
                      />
                    </div>
                  </div>
                  <div className="form-group row m-3">  
                  <label className={styles.label}>Porcja:</label>
                    <div className="col-7">
                      <div className="btn-group btn-group-lg btn-group-justified" role="group" aria-label="buttons">
                        <button ref='0' type="button" onClick={()=>{this.handleDrinkSize(0)}} className={"btn btn-default" + ' ' + this.state.drinkSelect[0]}>S</button>
                        <button ref='1' type="button" onClick={()=>{this.handleDrinkSize(1)}} className={"btn btn-default" + ' ' + this.state.drinkSelect[1]}>M</button>
                        <button ref='2' type="button" onClick={()=>{this.handleDrinkSize(2)}} className={"btn btn-default" + ' ' + this.state.drinkSelect[2]}>L</button>
                        <button ref='3' type="button" onClick={()=>{this.handleDrinkSize(3)}} className={"btn btn-default" + ' ' + this.state.drinkSelect[3]}>XL</button>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="form-group row m-3">
                    <label className={styles.label}>Start:</label>
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
                      <button onClick={this.logState} type="button" className={styles.addButton}>Dodaj</button>
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


