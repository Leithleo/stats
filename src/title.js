import React, { Component } from "react";

class Title extends Component {
    componentWillUnmount() {
        alert("Fuck this shit");
    }
  render() {
    return (
      <div>
        <h1>This is a title</h1>
      </div>
    );
  }
}

export default Title;
