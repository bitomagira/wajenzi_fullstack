// import React from "react";

import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

// const Joinus = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         // flexDirection: "row",
//         flexWrap: "wrap",
//         justifyContent: "space-around",
//         // height: "30vh",
//         width: "80%",
//         margin: "auto",
//         paddingTop: "15px",
//         paddingBottom: "15px"
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: "#FAF0E6",
//           borderRadius: "8px",
//           padding: "30px"
//         }}
//       >
//         <h2>Are you an entrepreuneur</h2>
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//         <br /> Voluptatibus repellendus quam corrupti doloremque
//         <br /> incidunt excepturi! Optio saepe quibusdam minima <br /> quod eum
//         quae provident voluptatum amet molestiae?
//         <br /> Ex maxime commodi voluptas. <br />
//         <Button variant="contained" color="primary">
//   register
// </Button>
//       </div>
//       <div
//         style={{
//           backgroundColor: "#FAF0E6",
//           borderRadius: "8px",
//           padding: "30px"
//         }}
//       >
//         <h2>Are you an investor?</h2>
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//         <br /> Voluptatibus repellendus quam corrupti doloremque
//         <br /> incidunt excepturi! Optio saepe quibusdam minima <br /> quod eum
//         quae provident voluptatum amet molestiae?
//         <br /> Ex maxime commodi voluptas.
//         <br />
//         <Button variant="contained" color="primary">
//           register
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Joinus;

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
    // color: theme.palette.text.secondary
    color: "black"
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
            Our options
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <div
              style={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              <div>
                <img src="investor.jpg" alt="" style={{ width: "30%" }} />
              </div>
              <div>
                <h2>Are you an investor?</h2>
              </div>
              <div>
                <h3> The Best Investment opportunities in Africa</h3>
                At Wajenzi, we receive many interesting investment opportunities
                from Africa
                <h3>Professional screening</h3>
                Together with our local partners and our professional investors,
                our experienced team screens the details.
                <h3>Invest with other community builders</h3>
                You can choose what you believe in and invest with other
                investors .
                <br />
                <br />
                <Button variant="contained" color="primary">
                  <Link
                    to="/EntrepreneurRegister"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    register
                  </Link>
                </Button>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <div
              style={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              <div>
                <img src="entrepreneur1.jpeg" alt="" style={{ width: "30%" }} />
              </div>
              <div>
                <h2>Are you an entrepreneur?</h2>
              </div>
              <div>
                <h3>Funding for entrepreneurs</h3>
                Wajenzi helps you to raise funding from thousands of investors
                who believe in your business
                <ul style={{ textAlign: "left" }}>
                  <li>Wajenzi makes access to finance easy</li>
                  <li>
                    Raise funding in exchange for a share in your business
                  </li>
                  <li>
                    Attract investors who believe in your business and are
                    looking for more long-term return.If relevant, they can also
                    offer their expertise.
                  </li>
                  <li>
                    You will get the required funding and time to further build
                    your company and make it a success.
                  </li>
                </ul>
                <br />
                <Button variant="contained" color="primary">
                  <Link
                    to="/InvestorRegister"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    register
                  </Link>
                </Button>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
