import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Electric from "./electric/Electric";
import Makina from "./makina/Makina";
import "./Services.css";

const Services = () => {
  return (
    <>
      <Makina />
      <Electric />
    </>
  );
};

export default Services;
