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

    if(selected.value ==='tpn'){
        this.props.fetchTPN();
    }

    if(selected.value ==='drip'){
        this.props.fetchDrip();
    }

    if(selected.value ==='drug'){
        this.props.fetchDrug();
    }

    if(selected.value ==='drink'){
        this.props.fetchDrink();
    }

    if(selected.value ==='food'){
        this.props.fetchFood();
    }

    if(selected.value ==='all'){
        this.props.fetchProducts();
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

        let reversed = this.props.showInTable.reverse()
        tableBody = reversed.map((item, index)=>{
            
            let type;

            switch(item.type) {
                case 'tpn':
                    type = 'TPN'
                    break;
                case 'drip':
                    type = 'Kroplówka'
                    break;
                case 'drug':
                    type = 'Lek'
                    break;
                case 'drink':
                    type = 'Picie'
                    break;
                case 'food':
                    type = 'Jedzenie'
                    break;
                case 'all':
                    type = 'Wszystkie'
                default:
                    type = ''
            }
            
            return (
                <tr key={index}>
                    <td>{type}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>
                        <button type="button" className="btn btn-primary">Archiwizuj</button> <button type="button" className="btn btn-primary">Edytuj</button>
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