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
      this.removeProduct = this.removeProduct.bind(this);
    }

    async componentDidMount() {
      const res = await fetch('http://localhost:3000/api/products')
      const result = await res.json()
      this.setState({showInTable:result});
    }

    removeProduct(id){
      fetch(`http://localhost:3000/api/products/${id}`, {
        method: 'DELETE',
      })
      .then(()=>{
        this.fetchProducts();
      })
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
      this.setState({showInTable:result});
    }
    
    async fetchTPN(){
      const res = await fetch('http://localhost:3000/api/products/tpn')
      const result = await res.json()
      this.setState({showInTable:result});
    }

    async fetchDrip(){
      const res = await fetch('http://localhost:3000/api/products/drip')
      const result = await res.json()
      this.setState({showInTable:result});
    }

    async fetchDrug(){
      const res = await fetch('http://localhost:3000/api/products/drug')
      const result = await res.json()
      this.setState({showInTable:result});
    }

    async fetchFood(){
      const res = await fetch('http://localhost:3000/api/products/food')
      const result = await res.json()
      this.setState({showInTable:result});
    }

    async fetchDrink(){
      const res = await fetch('http://localhost:3000/api/products/drink')
      const result = await res.json()
      this.setState({showInTable:result});
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

    let productTable = (
      <ProductTable showInTable={this.state.showInTable} removeProduct={this.removeProduct}/>
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
          <div>     
            {addProduct}
            <hr/>
            {selectDisplayed} 
            {productTable}
            {snackbar}
          </div>
    )     
  }
}

export default ManageProductsSection;
