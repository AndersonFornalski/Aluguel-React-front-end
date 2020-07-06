import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

import {Provider} from 'react-redux'

import {Header} from "./header/Header"
import RentalList from "./rental/RentalList"
import RentalDetail from "./rental/RentalDetail"
import {RentalCreate} from "./rental/RentalCreate"
import Login from "./login/login";
import {Register} from "./login/register"

import './App.css';

const store = require('./reducers').init();

class App extends Component {
  render(){ 
        return (
     <Provider store={store}>     
      <BrowserRouter>
          <div className="App">
        <Header/>
        <br/><br/>   
          <div className="container">
          <Route exact path="/" render={()=> {return <Redirect to='rentals'/>}}/>
            <Route exact path="/rentals" component={RentalList}/>
            <Route exact path="/rentals/:id" component={RentalDetail}/>
            <Route exact path="/new" component={RentalCreate}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
          </div>        
        </div>
        </BrowserRouter> 
      </Provider>  
  );
}
}

export default App;
