import React from "react";
import CardComponent from "./card";
import CardColumns from "react-bootstrap/CardColumns";

const CountriesDisplay = ({ apiData }) => {
  const countryCards = apiData.map((country, idx) => {
    return <CardComponent countryData={country} key={idx} />;
  });

  return <CardColumns>{countryCards}</CardColumns>;
};

export default CountriesDisplay;
