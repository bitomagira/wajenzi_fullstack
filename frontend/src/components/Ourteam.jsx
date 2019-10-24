// import React from "react";

// import { Link } from "react-router-dom";

// const Ourteam = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexWrap: "wrap",
//         justifyContent: "space-around",
//         // backgroundColor: "#FAF0E6",
//         color: "black",
//         width: "80%",
//         margin: "auto"
//       }}
//     >
//       <div>
//         <img
//           src="image.jpg"
//           width="125px"
//           style={{ borderRadius: "50%" }}
//         ></img>
//         <br />
//         Alain NKURIKIYE
//       </div>
//       <div>
//         <img src="pic.jpg" width="125px" style={{ borderRadius: "50%" }}></img>
//         <br />
//         Steve-Junior BITOMAGIRA
//       </div>
//       <div>
//         <img
//           src="image.jpg"
//           width="125px"
//           style={{ borderRadius: "50%" }}
//         ></img>
//         <br />
//         Alain NKURIKIYE
//         <br />
//         IT specialist
//       </div>
//     </div>
//   );
// };

// export default Ourteam;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "80%",
    margin: "auto",
    paddingTop: "20px",
    paddingBottom: "20px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper
            className={classes.paper}
            style={{ color: "black", fontSize: "30px" }}
          >
            Our Team
          </Paper>
        </Grid>

        <Grid item xs={6} sm={6}>
          <Paper className={classes.paper}>
            <img
              alt="Alain"
              src="Alain.jpg"
              width="60%"
              style={{ borderRadius: "50%" }}
            ></img>
            <br />
            <b>Alain Nkurikiye</b>
            <br />
            Founder & CEO
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Paper className={classes.paper}>
            <img
              alt="steve"
              src="image.jpg"
              width="60%"
              style={{ borderRadius: "50%" }}
            ></img>
            <br />
            <b>Steve-Junior Bitomagira</b>
            <br />
            Co-founder & CTO
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
