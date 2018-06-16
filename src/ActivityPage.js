import React, { Component } from 'react';
import AddActivitySection from './AddActivitySection';
import LoggedActivitySection from './LoggedActivitySection';
import SnackBar from './SnackBar';

class ActivityPage extends Component {

  constructor(){
    super()
    this.state={
      showSnackBar:false,
      loggedEvents: '',
      selectedTile: false,
    }

    this.cancelForm = this.cancelForm.bind(this);
    this.selectTile = this.selectTile.bind(this);
    this.hideSnackbar = this.hideSnackbar.bind(this);
    this.showSnackbar = this.showSnackbar.bind(this);
    this.handleFormInput = this.handleFormInput.bind(this);
    this.fetchLogged = this.fetchLogged.bind(this);
  }

  handleFormInput(formValues){
    console.log(formValues);
    fetch('http://localhost:3000/api/events', {
      method: 'post',
      body: JSON.stringify(formValues),
      headers: new Headers({'content-type': 'application/json'}),
    }).then(function(response) {
      return response.json();
    }).then(this.fetchLogged())
  }

  componentDidMount() {
    this.fetchLogged()
  }

  async fetchLogged(){
    const res = await fetch('http://localhost:3000/api/events')
    const loggedEvents = await res.json()
    this.setState({loggedEvents});
  }

  hideSnackbar(){
    this.setState({showSnackBar:false})
  }

  showSnackbar(message){
    this.setState({showSnackBar:true})
  }

  cancelForm(){
    this.setState({selectedTile: false});
  }

  selectTile(tile){
    this.setState({selectedTile: tile});
  }

  render() {
    
    let snackbar;
    if (this.state.showSnackBar){
      snackbar = (
        <SnackBar message="Dodano aktywność" hideSnackbar={this.hideSnackbar}/>
      )
    }
    
    return (
      <div>
        <AddActivitySection selectTile={this.selectTile}
                            selectedTile={this.state.selectedTile} 
                            cancelForm={this.cancelForm}
                            showSnackbar={this.showSnackbar}
                            handleFormInput={this.handleFormInput}
                            />

        <LoggedActivitySection loggedEvents={this.state.loggedEvents}/>
        {snackbar}
      </div>
      
    );
  }
}

export default ActivityPage;
