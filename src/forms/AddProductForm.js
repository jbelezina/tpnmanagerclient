import React, { Component } from 'react';
import '../css/Forms.css';
import '../css/reactDateTime.css';
import Datetime from 'react-datetime';
import moment from 'moment';
import 'moment/locale/pl';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class AddProductForm extends Component {  
    constructor(){
      super();
      this.state = {
        type: 'wybierz rodzaj produktu',
        name: '',
        description: '',
      }
      this.handleProductSelect = this.handleProductSelect.bind(this);
      this.handleName = this.handleName.bind(this);
      this.handleDescription = this.handleDescription.bind(this);
    }

    handleProductSelect(selected){
      if (selected){
        this.setState({type:selected.value})
      } 
    }

    handleName(e){
      this.setState({name:e.target.value}); 
    }

    handleDescription(e){
      this.setState({description:e.target.value}); 
    }

    handleSubmit(){
      this.props.submitForm(this.state);    
      this.setState({
        type: 'wybierz rodzaj produktu',
        name: '',
        description: '',
      });
      this.props.closeForm();
    }

    render(){

      const productOptions = [
        { value: 'tpn', label: 'TPN' },
        { value: 'drip', label: 'Kroplówka' },
        { value: 'food', label: 'Jedzenie' },
        { value: 'drink', label: 'Picie' },
        { value: 'drug', label: 'Lek' },
      ];

      let innerArea = {
        width: "100%",
      }

      let form = (<form>
      <div className="form-group row m-3 justify-content-end">
        <button onClick={this.props.closeForm} type="button" className="close" aria-label="Close" style={{color:'black'}}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="form-group row m-3">
        <label className="col-sm-2 col-form-label">Rodzaj produktu:</label>
        <div className="col-sm-10">
          <Select
              menuContainerStyle={{ zIndex: '2' }}
              name="product"
              value={this.state.type}
              options={productOptions}
              onChange={this.handleProductSelect}
              placeholder="Wybierz rodzaj produktu"
          />                    
        </div>
      </div>
      <div className="form-group row m-3">
        <label className="col-sm-2 col-form-label">Nazwa:</label>
        <div className="col-sm-10">
          <input onChange={this.handleName} className="form-control"/>
        </div>
      </div>
      <div className="form-group row m-3">
        <label className="col-sm-2 col-form-label">Opis:</label>
        <div className="col-10">
          <textarea onChange={this.handleDescription} className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>  
        </div>
      </div>
      <div className="form-group row m-3">
        <button type="button" onClick={this.handleSubmit.bind(this)} className="pr-3 mt-3 col-12 btn btn-dark">Dodaj</button>
      </div>
    </form>)

      return (
        <div className="container">
          <div className="row form pl-0 pr-0 m-3">
            <div className="col d-flex flex-row ">
              <div style={innerArea}>
                {form}    
              </div>
            </div>
          </div>
        </div> 
      );
    }
}

export default AddProductForm;
