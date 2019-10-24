import React, { Component } from "react";
import Menu2 from "./Menu2";
import Login from "./Login";

class Home extends Component {
  state = {};
  render() {
    console.log("heer");
    return (
      <div
        style={{
          height: "100vh"
        }}
      >
        <Menu2 />
        <Login />
      </div>
    );
  }
}

export default Home;
