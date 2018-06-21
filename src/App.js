import React, { Component } from 'react';
import './App.css';
import cli from './clients.json';
import SearchForm from './Components/SearchForm/SearchForm';
import ReactDOM from 'react-dom';

import FullList from './Components/FullList/FullList.js';




class App extends Component {
  constructor(){
    super()
    this.state = {
        searchfield: '', 
        clients: cli, 
        filtered: []
    }
  }

  
 

  getInputValue = (event) => {
    const {clients, filtered, searchfield} = this.state;
    this.setState({searchfield: event.target.value});
    const filteredClients = clients.filter(client => {
      return client.general.firstName.toLowerCase().includes(searchfield.toLowerCase());
    })
    this.setState({filtered: filteredClients});
    console.log(filtered)
   
  }


  liOnClick = (id) =>{
    ReactDOM.render(<FullList  id={id} clients={this.state.clients} />, document.getElementById('second'));
  }

  filteredLiOnClick = (id) => {
    ReactDOM.render(<FullList  id={id} clients={this.state.filtered} />, document.getElementById('second'));
  }

  

  render() {
    const { clients, searchfield, filtered} = this.state;
    
    
    if (searchfield === '') {
      return (
        <div className="App">
          <div className='fl w-100 pa2 '>
            <SearchForm 
              getInputValue = {this.getInputValue}
              getClientList = {this.getClientList}
            />
            <ul>
                  {clients.map((client, i) => {
                    
                  return(
                      <li className='grow person-info'  onClick={() => { this.liOnClick(i)}}>
                          <div>
                          <div className='fl w-50 pa2'>
                              <img src={clients[i].general.avatar} alt='avatar' />
                          </div>
                          <div className='fl w-50 pa2'>
                              <h2>{clients[i].general.firstName}</h2>
                              <h3>{clients[i].general.lastName}</h3>
                          </div>
                          </div>
                      </li>
                  )
                  })}
              </ul>
          </div>
          
        </div>
      );
    }else{
      const filteredClients = clients.filter(client => {
        return client.general.firstName.toLowerCase().includes(searchfield.toLowerCase());
      })
      
      return (
        <div className="App">
          <div className='fl w-100 pa2 '>
            <SearchForm 
              getInputValue = {this.getInputValue}
              getClientList = {this.getClientList}
            />
            <ul>
                  {filtered.map((client, i) => {
                  return(
                      <li className='grow person-info'  onClick={() => {this.filteredLiOnClick(i)}}>
                          <div>
                          <div className='fl w-50 pa2'>
                              <img src={filtered[i].general.avatar} alt='avatar' />
                          </div>
                          <div className='fl w-50 pa2'>
                              <h2>{filtered[i].general.firstName}</h2>
                              <h3>{filtered[i].general.lastName}</h3>
                          </div>
                          </div>
                      </li>
                  )
                  })}
              </ul>
          </div>
          
        </div>
      );
    }
   
  }
}

export default App;
