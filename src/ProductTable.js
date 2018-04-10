import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class ProductTable extends React.Component {
 
constructor(){
    super();
    this.state = {
        product: '',
    }

    this.handleProductSelect = this.handleProductSelect.bind(this);
}

handleProductSelect(selected){
    if (selected){
      this.setState({product:selected.value})
    } 

    if(selected='tpn'){
        this.props.fetchTPN();
    }

    if(selected='drip'){
        this.props.fetchDrip();
    }

    if(selected='drug'){
        this.props.fetchDrug();
    }

    if(selected='drink'){
        this.props.fetchDrink();
    }

    if(selected='food'){
        this.props.fetchFood();
    }
  }
    
render(){

    let tableStyle = {
        borderStyle: 'solid',
        borderWidth: '2px',
        borderRadius: '10px',
        borderColor: '#E8E8E8',
        textAlign: 'center',
      } 

    const productOptions = [
        { value: 'all', label: 'Wszystkie' },
        { value: 'tpn', label: 'TPN' },
        { value: 'drip', label: 'Kroplówka' },
        { value: 'food', label: 'Jedzenie' },
        { value: 'drink', label: 'Picie' },
        { value: 'drug', label: 'Lek' },
    ];

    let tableBody;

    if(this.props.showInTable){
        tableBody = this.props.showInTable.map((item)=>{
            return (
                <tr>
                    <td>{item.type}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>
                        <button type="button" class="btn btn-primary">Archiwizuj</button> <button type="button" class="btn btn-primary">Edytuj</button>
                    </td>
                </tr>
            )
        })
    }
    
    
    

     return(
      <div>
        <div className="ml-5">
            <div className="col-3">
                <Select
                          menuContainerStyle={{ zIndex: '2' }}
                          name="product"
                          value={this.state.product}
                          options={productOptions}
                          onChange={this.handleProductSelect}
                          placeholder="Wybierz pokazywane"
                />
            </div>                    
        </div>
        <div className="ml-5 mr-5 mb-5 mt-2">
        <table className="table table-striped" style={tableStyle}>
        <thead>
        <tr>
            <th scope="col">Rodzaj</th>
            <th scope="col">Nazwa</th>
            <th scope="col">Opis</th>
            <th scope="col">Akcje</th>
        </tr>
        </thead>
        <tbody>
            {tableBody}
        </tbody>
        </table>
        </div>
      </div>
     )
 }
}

export default ProductTable;