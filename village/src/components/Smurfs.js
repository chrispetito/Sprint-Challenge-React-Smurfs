import React, { Component } from "react";

import Smurf from "./Smurf";

class Smurfs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Smurfs">
        <h1 className="village-title">Smurf Village</h1>
        <ul className="smurf-list">
          {this.props.smurfs.map(smurf => {
            return (
              <div className="Smurf" key={smurf.id}>
                <h3 className="smurf-name">{smurf.name}</h3>
                <strong>{smurf.height} tall</strong>
                <p>{smurf.age} smurf years old</p>
                <button
                  onClick={event => this.props.deleteSmurf(event, smurf.id)}
                  className='delete-button'
                >
                  DELETE
                </button>
              </div>
              // <Smurf
              //   name={smurf.name}
              //   id={smurf.id}
              //   age={smurf.age}
              //   height={smurf.height}
              //   key={smurf.id}
              // />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
