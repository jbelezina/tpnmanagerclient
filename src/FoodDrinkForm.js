import React, { Component } from 'react';
import './css/Forms.css';
import './css/reactDateTime.css';
import Datetime from 'react-datetime';
import moment from 'moment';
import 'moment/locale/pl';

class FoodDrinkForm extends Component {  
    constructor(){
      super();
      this.state = {
        product: '',
        portion: '',
        stop: '',
        start: 'podaj łączną długość przyjmowania',
        comment: '',
      }
      this.handleDatePicker = this.handleDatePicker.bind(this);
      this.handleProduct = this.handleProduct.bind(this);
    }

    handleProduct(e){
       this.setState({product: e.target.value});
       console.log(e.target.value);
    }

    handleDatePicker(mom){
      let myString = moment(mom).format("YYYY-MM-DD HH:mm:ss"); 
      this.setState({stop:myString});
      console.log(myString);
    }

    render(){
      let style = {
        width:"100%",
      }

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
                    <label className="col-sm-2 col-form-label">Jedzenie:</label>
                    <div className="col-sm-8">
                      <select onChange={this.handleProduct} value={this.state.product} ref="product" className="form-control" id="exampleFormControlSelect1">
                        <option>Makaron</option>
                        <option>Ser</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row m-3">  
                  <label className="col-sm-2 col-form-label">Porcja:</label>
                    <div className="col-10">
                      <div className="btn-group" role="group" aria-label="...">
                        <button style={{width:'20%'}} type="button" className="btn btn-secondary">S</button>
                        <button style={{width:'20%'}} type="button" className="btn btn-secondary">M</button>
                        <button style={{width:'20%'}} type="button" className="btn btn-secondary">L</button>
                        <button style={{width:'20%'}} type="button" className="btn btn-secondary">XL</button>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="form-group row m-3">
                    <label className="col-sm-2 col-form-label">Picie:</label>
                    <div className="col-sm-8">
                      <select onChange={this.handleProduct} value={this.state.product} ref="product" className="form-control" id="exampleFormControlSelect1">
                        <option>Makaron</option>
                        <option>Ser</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row m-3">  
                  <label className="col-sm-2 col-form-label">Porcja:</label>
                    <div className="col-sm-10">
                      <div className="btn-group" role="group">
                      <button type="button" className="btn btn-secondary">S</button>
                      <button type="button" className="btn btn-secondary">M</button>
                      <button type="button" className="btn btn-secondary">L</button>
                      <button type="button" className="btn btn-secondary">XL</button>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="form-group row m-3">
                    <label className="col-sm-2 col-form-label">Start:</label>
                      <div className="col-4">
                      <Datetime ref='stopTime' onChange={data=>this.handleDatePicker(data)} defaultValue={moment()} locale="pl" timeFormat={true}/>
                      </div>
                  </div>
                  <div className="form-group row m-3">
                    <label className="col-sm-2 col-form-label">Komentarz:</label>
                    <div className="col-10">
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>  
                    </div>
                  </div>
                  <div className="form-group row m-3">
                    <button type="button" className="pr-3 mt-3 col-12 btn btn-dark">Dodaj</button>
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


