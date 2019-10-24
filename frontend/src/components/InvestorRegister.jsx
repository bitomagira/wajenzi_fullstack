import React, { Component } from "react";
import Menu2 from "./Menu2";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class InvestorRegister extends Component {
  handleSubmit = () => {
    const data = this.state;
    console.log(data);
    // const { history } = this.props;
    fetch("http://localhost:5000/user", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        console.log("yes");
      })
      .catch(error => console.log("Error:", error));
  };
  state = {
    first_name: "",
    last_name: "",
    login: "",
    password: ""
  };

  changehandle = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Menu2></Menu2>
        <div>
          <Paper
            style={{
              display: "flex",
              flexDirection: "column",
              width: "70%",
              textAlign: "center",
              margin: "auto"
            }}
          >
            <h1>Register as an Entrepreneur</h1>
            <div>
              <br />
              <br />
              <TextField
                id="first_name"
                label="First_name"
                margin="dense"
                onChange={this.changehandle}
              />
              <br />
              <TextField
                id="last_name"
                label="Last_name"
                margin="dense"
                onChange={this.changehandle}
              />
              <br />
              <TextField
                id="login"
                label="Username"
                margin="dense"
                onChange={this.changehandle}
              />
              <br />
              <TextField
                id="password"
                label="Password"
                margin="dense"
                type="password"
                onChange={this.changehandle}
              />
              <br />
              <br />
            </div>
            <div style={{ paddingBottom: "25px" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleSubmit}
              >
                Save
              </Button>
            </div>
            <div></div>
          </Paper>
        </div>
      </div>
    );
  }
}

export default InvestorRegister;
