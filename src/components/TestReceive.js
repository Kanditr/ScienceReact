import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TestReceive extends Component {
  render() {
    return (
      <div>
        <p>Test: {this.props.params.id}</p>
        <Link to="testsend">back</Link>
      </div>
    );
  }
}
