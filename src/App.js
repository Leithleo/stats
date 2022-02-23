import React, { Component } from "react";
import Title from "./title";

class App extends Component {
  state = { count: 0, show: false };
  incriment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decriment = () => {
    if (this.state.count > 0) this.setState({ count: this.state.count - 1 });
  };
  handleShow = () => {
    (this.state.show) ? this.setState({show: false}) : this.setState({show: true});
  }
  render() {
    return (
      <>
        <div style={{ textAlign: "center" }}>
          <button onClick={this.incriment}>+</button>
          <p>{this.state.count}</p>
          <button onClick={this.decriment}>-</button>
        </div>
        <div style={{ textAlign: "center" }}>
          <button onClick={this.handleShow}>show</button> 
          {this.state.show ?<Title /> : null}
          
        </div>
      </>
    );
  }
}

export default App;
