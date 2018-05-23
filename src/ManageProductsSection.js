import React, { Component } from 'react';
import ProductTable from './ProductTable';
import AddProductForm from './forms/AddProductForm';
import SnackBar from './SnackBar';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class ManageProductsSection extends Component {      
    constructor(){
      super();
      this.state = {
        product: '',
        showSnackBar: false,
        addingProduct: false,
        showInTable: '',
      }
      this.toggleAddProduct = this.toggleAddProduct.bind(this);
      this.submitForm = this.submitForm.bind(this);
      this.fetchTPN = this.fetchTPN.bind(this);
      this.fetchDrip = this.fetchDrip.bind(this);
      this.fetchDrug = this.fetchDrug.bind(this);
      this.fetchFood = this.fetchFood.bind(this);
      this.fetchDrink = this.fetchDrink.bind(this);
      this.hideSnackbar = this.hideSnackbar.bind(this);
      this.fetchProducts = this.fetchProducts.bind(this);
      this.handleSelectDisplayed = this.handleSelectDisplayed.bind(this);
    }

    async componentDidMount() {
      const res = await fetch('http://localhost:3000/api/products')
      const result = await res.json()
      this.setState({showInTable:result});
    }

    hideSnackbar(){
      this.setState({showSnackBar:false})
    }

    toggleAddProduct(){
      this.setState({addingProduct: !this.state.addingProduct});
    }

    submitForm(values){
      console.log(values);
        fetch('http://localhost:3000/api/products', {
          method: 'post',
          body: JSON.stringify(values),
          headers: new Headers({'content-type': 'application/json'}),
        }).then(function(response) {
          return response.json();
        }).then(()=>{
          switch(values.type) {   
            case 'tpn':
              this.setState({product:'TPN'});
              this.fetchTPN();
              break;
            case 'drip':
              this.setState({product:'Kroplówka'});
              this.fetchDrip();
              break;
            case 'food':
              this.setState({product:'Jedzenie'});
              this.fetchFood();
              break;
            case 'drink':
              this.setState({product:'Picie'});
              this.fetchDrink();
              break;
            case 'drug':
              this.setState({product:'Lek'});
              this.fetchDrug();
              break;
        }
          this.setState({showSnackBar:true})
        });
        
    }  

    async fetchProducts(){
      const res = await fetch('http://localhost:3000/api/products')
      const result = await res.json()
      this.setState({showInTable:result.reverse()});
    }
    
    async fetchTPN(){
      const res = await fetch('http://localhost:3000/api/products/tpn')
      const result = await res.json()
      this.setState({showInTable:result.reverse()});
    }

    async fetchDrip(){
      const res = await fetch('http://localhost:3000/api/products/drip')
      const result = await res.json()
      this.setState({showInTable:result.reverse()});
    }

    async fetchDrug(){
      const res = await fetch('http://localhost:3000/api/products/drug')
      const result = await res.json()
      this.setState({showInTable:result.reverse()});
    }

    async fetchFood(){
      const res = await fetch('http://localhost:3000/api/products/food')
      const result = await res.json()
      this.setState({showInTable:result.reverse()});
    }

    async fetchDrink(){
      const res = await fetch('http://localhost:3000/api/products/drink')
      const result = await res.json()
      this.setState({showInTable:result.reverse()});
    }

    handleSelectDisplayed(selected){
      switch (selected.value){
        case 'all':
          this.setState({product:'Wszystkie'});
          this.fetchProducts();
          break;
        case 'tpn':
          this.setState({product:'TPN'});
          this.fetchTPN();
          break;
        case 'drip':
          this.setState({product:'Kroplówka'});
          this.fetchDrip();
          break;
        case 'food':
          this.setState({product:'Jedzenie'});
          this.fetchFood();
          break;
        case 'drink':
          this.setState({product:'Picie'});
          this.fetchDrink();
          break;
        case 'drug':
          this.setState({product:'Lek'});
          this.fetchDrug();
          break;
      }
        
        
    }

    render(){
    let style={
      backgroundColor: 'white',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderRadius: '5px',
      borderColor: '#E8E8E8',
      marginLeft: '150px',
      marginTop: '85px',
      marginRight: '50px',    
      width: '90vw',
      fontFamily: "'Barlow Semi Condensed', sans-serif",
      fontSize: '15px',
      fontColor: 'darkgrey',
    }

    let productTable = (
      <ProductTable showInTable={this.state.showInTable}/>
    )

    let snackbar;
    
    if (this.state.showSnackBar){
      snackbar = <SnackBar hideSnackbar={this.hideSnackbar} message="Dodano produkt"/>
    }

    let addProduct = this.state.addingProduct
      ? <AddProductForm submitForm={this.submitForm} closeForm={this.toggleAddProduct} /> 
      : (
        <div className="m-5">
          <button className="btn" onClick={this.toggleAddProduct}>Dodaj produkt</button>
        </div>
      )

    const productOptions = [
      { value: 'all', label: 'Wszystkie' },
      { value: 'tpn', label: 'TPN' },
      { value: 'drip', label: 'Kroplówka' },
      { value: 'food', label: 'Jedzenie' },
      { value: 'drink', label: 'Picie' },
      { value: 'drug', label: 'Lek' },
    ];

    let selectDisplayed = (
      <div className="m-5" style={{width:'20vw'}}>
          <Select
                      menuContainerStyle={{ zIndex: '2' }}
                      value={this.state.product}
                      options={productOptions}
                      onChange={this.handleSelectDisplayed}
                      placeholder="Wybierz pokazywane"
          />
    </div>
    )
    
      
    return (
      <div className="row">
        <div style={style} className="text-primary">
          <div className="m-3 ml-4">Zarządzaj produktami</div>     
            <hr/>
            {addProduct}
            <hr/>
            {selectDisplayed} 
            {productTable}
            {snackbar}
          </div>
      </div>
    )     
  }
}

export default ManageProductsSection;
