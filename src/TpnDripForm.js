import React, { Component } from 'react';
import './css/Forms.css';
import 'font-awesome/css/font-awesome.css';

class TpnDripForm extends Component {  

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
        height: "300px",
        width: "100%",
      }

      let header = {
        fontSize: '10px',
      }

      return (
        <div className="container">
          <div className="row">
            <div className="col d-flex flex-row loggedActivity pl-0 pr-0 m-3">
              <div style={iconArea}>
                <div style={header}><br/>Pobranie</div>
                <div className="dropdown-divider"></div>
                <div><i className="far fa-address-book fa-2x"></i></div>
                <div>Name</div>
              </div>
              <div style={innerArea}>
                <div className="d-flex flex-column">
                <form>
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Produkt</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>Multimel</option>
                      <option>NaCl</option>
                    </select>
                  </div>
                </form>
                </div>
            </div>
          </div>
        </div>
      </div>
      );
    }
}

export default TpnDripForm;
