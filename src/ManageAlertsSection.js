import React, { Component } from 'react';
import SnackBar from './SnackBar';

class ManageAlertsSection extends Component {      
    constructor(){
      super();
      this.state = {
        alerts: '',
      }
    }

    async componentDidMount() {
      const res = await fetch('http://localhost:3000/api/alerts')
      const result = await res.json()
      this.setState({alerts:result});
    }

    hideSnackbar(){
      this.setState({showSnackBar:false})
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
      width: '83%',
      fontFamily: "'Barlow Semi Condensed', sans-serif",
      fontSize: '15px',
      fontColor: 'darkgrey',
    }

    let tableStyle = {
      borderStyle: 'solid',
      borderWidth: '2px',
      borderRadius: '10px',
      borderColor: '#E8E8E8',
      textAlign: 'center',
    } 

    let tableBody; 
    
    if (this.state.alerts){
      tableBody = this.state.alerts.map((item, index)=>{
        return (
          <tr key={index}>
            <td>{item.description}</td>
            <td>{item.value}</td>
            <td>{item.measure}</td>
            <td>
                <button style={{minWidth:'150px'}} type="button" 
                        className="btn btn-primary">
                        Edytuj
                </button>
            </td>
          </tr>
        )
      })
    } else {
      tableBody = 'Oczekiwanie na alerty'
    }
    

    return (
      <div>                  
        <div className="m-5">
          <table className="table table-striped" style={tableStyle}>
          <thead>
          <tr>
              <th scope="col">Rodzaj alarmu</th>
              <th scope="col">Wartość</th>
              <th scope="col">Jednostka miary</th>
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

export default ManageAlertsSection;
