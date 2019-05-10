import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import axios from "axios";
import Smurf from './components/Smurf'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(res => {
        console.log(res);
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteSmurf = (event, id) => {
    event.preventDefault();
    axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      console.log(res)
      this.setState({
        smurfs: res.data
      })
    })
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  render() {
    return (
      <div className="App">
        {/* <Smurfs smurfs={this.state.smurfs} /> */}
        <nav className='nav-bar'>
          <Link className='nav-link' to='/'>Home</Link>
          <Link className='nav-link' to='/smurf-form'>Add Smurf</Link>
        </nav>
        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />}
        />
        <Route
          exact
          path="/smurf-form"
          render={props => <SmurfForm {...props} />}
        />
      </div> 
    );
  }
}

export default App;
