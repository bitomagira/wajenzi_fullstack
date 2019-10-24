// import React from "react";

// import { Link } from "react-router-dom";

// const Presentation = () => {
//   return (
//     <div
//       style={{
//         backgroundImage: "url(africa.jpg)",
//         width: "100%"
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "space-around",
//           backgroundImage: "url(africa.jpg)",
//           color: "white",
//           width: "80%",
//           minHeight: "30vh",
//           margin: "auto"
//           // border: "red 2px solid"
//         }}
//       >
//         <div>
//           <h2>
//             Building an Entrepreneurial Society in Africa with an Impact Driven
//             Community
//           </h2>
//           It's not about me, it's not about you. It's about us working together
//           as one to build a sustainable world
//         </div>
//         <div>
// <video width="300" controls>
//   <source src="wajenzi.mp4" type="video/mp4"></source>
// </video>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Presentation;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "80%",
    margin: "auto",
    paddingTop: "20px"
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
    <div
      style={{
        backgroundImage: "url(presentation.jpeg)",
        backgroundSize: "100%"
      }}
    >
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper} style={{ color: "black" }}>
              <h2>
                Building an Entrepreneurial Society in Africa with an Impact
                Driven Community
              </h2>
              It's not about me, it's not about you. It's about us working
              together as one to build a sustainable world
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper
              className={classes.paper}
              style={{ background: "transparent" }}
            >
              <video width="300" controls>
                <source src="wajenzi.mp4" type="video/mp4"></source>
              </video>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
