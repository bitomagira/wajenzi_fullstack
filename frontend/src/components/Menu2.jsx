import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingBottom: "15px"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  const sayhi = () => {
    localStorage.removeItem("id");
    console.log(props);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                height: "25px"
              }}
            >
              <div style={{ width: "30px" }}>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  <img
                    alt="logo"
                    src="wajenzi.jpg"
                    style={{ borderRadius: "50%", width: "100%" }}
                  ></img>
                </Link>
              </div>
              <div>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  Wajenzi
                </Link>
              </div>
            </div>
          </Typography>
          {props.login === "true" ? (
            <Button color="inherit" onClick={sayhi}>
              Logout
            </Button>
          ) : (
            <Button color="inherit">
              <Link
                to="/login"
                onClick={sayhi}
                style={{ color: "white", textDecoration: "none" }}
              >
                Login
              </Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
