import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: 0 };
  }
  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
    console.log("le composant s'est monté");
  }
  componentDidUpdate() {
    console.log("un update a eu lieu");
  }

  tick() {
    this.setState({
      timer: this.state.timer + 1
    });
  }

  render() {
    return (
      <div>
        <h2>My timer :</h2>
        <h1 style={{ color: "red" }}>{this.state.timer}</h1>
      </div>
    );
  }
}

export default Timer;
