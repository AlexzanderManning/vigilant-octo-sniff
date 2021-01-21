import React from "react";
import Card from "react-bootstrap/Card";

const CardComponent = (props) => {
  const { countryData } = props;
  const { name, population, flag, region, capital } = countryData;
  const titleStyles = {
    maxWidth: "100%",
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={flag} className="img-fluid card-image" />
      <Card.Body>
        <Card.Title>
          <span
            className="font-weight-bold d-inline-block text-truncate"
            style={titleStyles}
          >
            {name}
          </span>
        </Card.Title>
        <Card.Text>
          <span className="font-weight-bold">Population: </span>
          {population}
        </Card.Text>
        <Card.Text>
          <span className="font-weight-bold">Region: </span>
          {region}
        </Card.Text>
        <Card.Text>
          <span className="font-weight-bold">Capital: </span>
          {capital}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
