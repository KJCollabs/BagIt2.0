import React from "react";

import logo from "../assets/shoppingPerson.png";
const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="BagIt logo" width="120" />
    <h1>Welcome to BagIt 2.0 </h1>
    <h5>Login to start your organized shopping list!</h5>
  </div>
);

export default Hero;
