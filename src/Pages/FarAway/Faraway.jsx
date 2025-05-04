import React from "react";
import Logo from "./Components/Logo";

import Packinglist from "./Components/Packinglist";
import Footer from "./Components/Footer";
import Form from "./Components/Form";

const Faraway = () => {
  return (
    <div className="mt-24">
      <Logo />
      <Form />
      <Packinglist />
      <Footer />
    </div>
  );
};

export default Faraway;
