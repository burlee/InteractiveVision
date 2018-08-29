import React, { Component } from 'react';
import classes from './App.scss';
import {BrowserRouter} from 'react-router-dom'
import Aux from './HOC/aux_x'
import Navbar from './Components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <Aux>
        <BrowserRouter>
          <div className={classes.App}>
            <Navbar/>
          </div>
        </BrowserRouter>
      </Aux>
    );
  }
}

export default App;
