import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import Container from "react-bootstrap/Container";
import CountriesDisplay from "./components/countries-display";
import SiteNavBar from "./components/nav-bar";
import ThemeContext from './components/theme-context';

const App = () => {
  //State Hooks
  const [apiData, setApiData] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [region, setRegion] = useState("americas");

  const handleSearch = (e) => {
    setSearchString(e.target.value);
  };

  const handleRegionFilter = (e) => {
    setRegion(e.target.id);
  };

  const countries = apiData.filter((country) => {
    return country.name.toLowerCase().includes(searchString.toLowerCase());
  });

  //only get newdata if region has changed.
  useEffect(() => {
    console.log("Region has changed! : ", region)
    fetch(`https://restcountries.eu/rest/v2/region/${region}`)
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch((err) => console.log("Data not fetched : ", err));
  }, [region]);

  const theme = {
    light: 'light',
    dark: 'dark'
  }
  return (
    <ThemeContext.Provider value={theme}>
      <Container fluid className="App">
        <Container fluid>
          <SiteNavBar
            handleSearch={handleSearch}
            handleRegionFilter={handleRegionFilter}
          />

          <Container>
            <h1 className="text-center mt-3">Rest Countries API</h1>
          </Container>

          <Container className="mt-5">
            <CountriesDisplay apiData={countries} />
          </Container>
        </Container>
      </Container>
    </ThemeContext.Provider>
  );
};

export default App;
