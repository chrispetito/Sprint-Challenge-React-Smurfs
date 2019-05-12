import React, { Component } from "react";
import axios from "axios";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api

    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    axios
      .post(`http://localhost:3333/smurfs`, smurf)
      .then(res => {
        console.log(res);
        this.setState({
          smurf: res.data
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="smurf-form-title">
      <h1>Add Another Smurf!</h1>
        <form onSubmit={this.addSmurf} className="SmurfForm">
          <input
            // required
            onChange={this.handleInputChange}
            placeholder="NAME"
            value={this.state.name}
            name="name"
            className='form-input'
          />
          <input
            // required
            onChange={this.handleInputChange}
            placeholder="AGE"
            value={this.state.age}
            name="age"
            className='form-input'
          />
          <input
            // required
            onChange={this.handleInputChange}
            placeholder="HEIGHT"
            value={this.state.height}
            name="height"
            className='form-input'
          />
          <button className='form-button'type="submit">ADD TO THE VILLAGE!</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
