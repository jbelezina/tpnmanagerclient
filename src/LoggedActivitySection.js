import React, { Component } from 'react';
import LoggedActivity from './LoggedActivity';
class LoggedActivitySection extends Component {  

    constructor(){
      super();
      this.state = {
        isLoading: true,
        data : '',
      }
    }

    async componentDidMount() {
      const res = await fetch('http://localhost:3000/api/events')
      const loggedEvents = await res.json()
      this.setState({data:loggedEvents,
                     isLoading:false});
    }

    logState(){
      console.log('this from log', this);
      console.log(this.state);
    }

    render(){
      let style={
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderRadius: '5px',
        borderColor: '#E8E8E8',
        marginLeft: '130px',
        marginRight: '50px',
        marginTop: '40px',
        marginRight: '50px',    
        width: '100%',
        fontFamily: "'Barlow Semi Condensed', sans-serif",
        fontSize: '15px',
        fontColor: 'darkgrey',
      }
      
      let logged;

      if (this.state.data) {
        
        logged = this.state.data.map((item)=>{
            return (
              <LoggedActivity data={item}/>
            )
        });
      } else {
        logged = <p>Trwa pobieranie aktywności</p>;
      }
      

      return (
        <div className="row">
          <div style={style} className="text-primary">
            <div className="m-3 ml-4">Zalogowane aktywności</div>
            <hr/>
            <div className="d-flex flex-row flex-wrap m-5">
              {logged}
            </div>
          </div>
        </div>
    )     
  }
}

export default LoggedActivitySection;
