import React from 'react';

class ProductTable extends React.Component {
 
constructor(){
    super();
    this.state = {
        product: '',
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

    let tableBody;

    if(this.props.showInTable){

        
        tableBody = this.props.showInTable.map((item, index)=>{
            
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
                        <button style={{minWidth:'150px'}}type="button" className="btn btn-primary">Edytuj</button>
                    </td>
                </tr>
            )
        })
    }
    
    
    

     return(
      <div>                  
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