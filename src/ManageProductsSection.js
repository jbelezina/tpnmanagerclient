import React, { Component } from 'react';
import ProductTable from './ProductTable';
import AddProductForm from './forms/AddProductForm';
import SnackBar from './SnackBar';

class ManageProductsSection extends Component {      
    constructor(){
      super();
      this.state = {
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
        });

        this.setState({showSnackBar:true})
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

    render(){
    let style={
      backgroundColor: 'white',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderRadius: '5px',
      borderColor: '#E8E8E8',
      marginLeft: '130px',
      marginTop: '85px',
      marginRight: '50px',    
      width: '90vw',
      fontFamily: "'Barlow Semi Condensed', sans-serif",
      fontSize: '15px',
      fontColor: 'darkgrey',
    }

    let addProduct;
    if (this.state.addingProduct) {
      addProduct = <AddProductForm submitForm={this.submitForm} closeForm={this.toggleAddProduct}/>
    } else {
      addProduct = (
        <div className="ml-5">
          <button type="button" onClick={this.toggleAddProduct} className="btn btn-primary">Dodaj produkt</button>
        </div>
              )
    }

    let productTable = (
      <ProductTable showInTable={this.state.showInTable}
                    fetchTPN={this.fetchTPN}
                    fetchDrip={this.fetchDrip}
                    fetchDrug={this.fetchDrug}
                    fetchDrink={this.fetchDrink}
                    fetchFood={this.fetchFood}
                    fetchProducts={this.fetchProducts}
                    />
    )

    let snackbar;
    
    if (this.state.showSnackBar){
      snackbar = <SnackBar hideSnackbar={this.hideSnackbar} message="Dodano produkt"/>
    }
    
      
    return (
      <div className="row">
        <div style={style} className="text-primary">
          <div className="m-3 ml-4">Zarządzaj produktami</div>     
                <hr/>
                {addProduct}
                <hr/>
            {productTable}
            {snackbar}
          </div>
      </div>
    )     
  }
}

export default ManageProductsSection;
