import React from 'react';

class ManageTpn extends React.Component {
 render(){

    let tableStyle = {
        borderStyle: 'solid',
        borderWidth: '2px',
        borderRadius: '10px',
        borderColor: '#E8E8E8',
        textAlign: 'center',
      } 

     return(
      <div>
        <div className="mr-5">
            <button type="button" class="btn btn-small btn-primary pull-right mb-4 mr-0">Dodaj</button>
        </div>
        <div className="ml-5 mr-5 mb-5 mt-2">
        <table className="table table-striped" style={tableStyle}>
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Nazwa</th>
            <th scope="col">Opis</th>
            <th scope="col">Magazyn</th>
            <th scope="col">Akcje</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Multimel</td>
            <td>Opis produktu</td>
            <td>Tak</td>
            <td>
            <button type="button" class="btn btn-primary">Archiwizuj</button> <button type="button" class="btn btn-primary">Edytuj</button>
            </td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Actimel</td>
            <td>Opis produktu</td>
            <td>Nie</td>
            <td>
            <button type="button" class="btn btn-primary">Archiwizuj</button> <button type="button" class="btn btn-primary">Edytuj</button>
            </td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Gargamel</td>
            <td>Opis produktu</td>
            <td>Tak</td>
            <td>
            <button type="button" class="btn btn-primary">Archiwizuj</button> <button type="button" class="btn btn-primary">Edytuj</button>
            </td>
        </tr>
        
        </tbody>
        </table>
        </div>
      </div>
     )
 }
}

export default ManageTpn;