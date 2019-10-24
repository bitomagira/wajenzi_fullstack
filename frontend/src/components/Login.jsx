// import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
// import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
// import Menu2 from "./Menu2";
// class Login extends Component {
//   state = {
//     Name: "",
//     Surname: "",
//     Mail: "",
//     Adress: ""
//   };

//   isValid = e => {
//     if (e.target.value.includes("@")) {
//       this.setState({
//         [e.target.id]: e.target.value
//       });
//     } else {
//       this.setState({
//         [e.target.id]: ""
//       });
//     }
//   };
//   render() {
//     return (
//       <React-Fragment>
//         <div
//           style={{
//             textAlign: "center",
//             margin: "auto",
//             border: "2px solid red",
//             width: "50%"
//           }}
//         >
//           <h1>Register</h1>
//           <TextField
//             id="Name"
//             label="Name"
//             margin="dense"
//             onChange={this.datahandle}
//           />
//           <br />
//           <TextField
//             id="Surname"
//             label="Surname"
//             margin="dense"
//             onChange={this.datahandle}
//           />
//           <br />
//           {this.state.Surname && this.state.Name ? (
//             <TextField
//               id="Mail"
//               label="Mail"
//               margin="dense"
//               onChange={this.isValid}
//             />
//           ) : null}
//           <br />
//           {this.state.Mail ? (
//             <div>
//               <TextField
//                 id="Adress"
//                 label="Adress"
//                 margin="dense"
//                 onChange={this.datahandle}
//               />
//               <br />
//             </div>
//           ) : null}
//           {this.state.Adress ? (
//             <TextField
//               id="Tel"
//               label="Tel"
//               margin="dense"
//               onChange={this.datahandle}
//             />
//           ) : null}
//           <br />
//           <Button variant="contained" color="primary">
//             save
//           </Button>
//           <br />
//         </div>
//       </React-Fragment>
//     );
//   }
// }

// export default Login;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
// import { browserHistory } from "react-router";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

export default function ComplexGrid() {
  const classes = useStyles();

  const authentification = e => {
    const data = {
      login: document.getElementById("Username").value,
      password: document.getElementById("Password").value
    };
    // const { history } = props;
    fetch(`http://localhost:5000/user/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
        if (res.status === 200) {
          res.json().then(data => {
            const user = data;
            localStorage.setItem("token", `${user.token}`);
            window.location.href = "/";
          });
        } else {
          this.setState({ mistake: true });
        }
      })

      .catch(err => console.log("Error:", err));
  };

  return (
    <div className={classes.root}>
      <Paper
        className={classes.paper}
        style={{
          display: "flex",
          flexDirection: "column",
          // border: "red solid 2px",
          textAlign: "center"
        }}
      >
        <div>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="lock2.jpg" />
            </ButtonBase>
          </Grid>
        </div>
        <div>
          <br />
          <br />
          <TextField id="Username" label="Username" margin="dense" />
          <br />
          <TextField
            id="Password"
            label="Password"
            margin="dense"
            type="password"
          />
          <br />
          <br />
        </div>
        <div style={{ paddingBottom: "25px" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={authentification}
          >
            Login
          </Button>
        </div>
        <div>
          <Link to="/">forgot your password?</Link>
        </div>
        <div style={{ paddingBottom: "25px" }}>
          <Link to="/">don't have an account yet?</Link>
        </div>
        <div></div>
      </Paper>
    </div>
  );
}
