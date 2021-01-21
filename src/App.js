import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import Container from "react-bootstrap/Container";
import CountriesDisplay from "./components/countries-display";
import SiteNavBar from "./components/nav-bar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      apiData: [],
      searchString: "",
      region: "americas",
    };
  }

  getAPIData() {
    const { region } = this.state;
    fetch(`https://restcountries.eu/rest/v2/region/${region}`)
      .then((res) => res.json())
      .then((data) => this.setState({ apiData: data }))
      .catch((err) => console.log("Data not fetched : ", err));
  }

  handleSearch = (e) => {
    this.setState({ searchString: e.target.value });
  };

  handleRegionFilter = (e) => {
    this.setState({ region: e.target.id });
  };

  componentDidMount() {
    this.getAPIData();
  }

  componentDidUpdate() {
    this.getAPIData();
  }

  render() {
    const { apiData, loaded } = this.state;
    const styles = {
      margin: "0 auto !important",
    };

    const countries = apiData.filter((country) => {
      return country.name
        .toLowerCase()
        .includes(this.state.searchString.toLowerCase());
    });
    return (
      <Container fluid className="App">
        <SiteNavBar
          handleSearch={this.handleSearch}
          handleRegionFilter={this.handleRegionFilter}
        />
        <Container styles={styles}>
          <Container>
            <h1 className="text-center mt-3">Rest Countries API</h1>
          </Container>

          <Container className="mt-5">
            <CountriesDisplay apiData={countries} />
          </Container>
        </Container>
      </Container>
    );
  }
}

export default App;
