import React from "react";
import Menu2 from "./Menu2";
import Presentation from "./presentation";
import Joinus from "./Joinus";
import Team from "./Ourteam";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div>
      <Menu2 login={localStorage.getItem("id") ? "true" : "false"}></Menu2>
      <Presentation />
      <Joinus></Joinus>
      <Team></Team>

      <Footer></Footer>
    </div>
  );
};

export default Landing;
