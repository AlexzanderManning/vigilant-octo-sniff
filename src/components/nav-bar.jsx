import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchBar from './search-bar';
import Container from 'react-bootstrap/Container';
import ThemeContext from './theme-context';

const SiteNavBar = ({ handleSearch, handleRegionFilter }) => {
  const theme = useContext(ThemeContext);
  console.log("This is the theme context : " , theme);
  return (
    <Navbar sticky="top" expand="md" bg="light" variant='light'>
      <Container>
        <Navbar.Brand>REST Countries API</Navbar.Brand>
        <NavDropdown title="Filter By Region" id="collasible-nav-dropdown">
          <NavDropdown.Item onClick={handleRegionFilter} id='africa'>Africa</NavDropdown.Item>
          <NavDropdown.Item onClick={handleRegionFilter} id='americas'>America</NavDropdown.Item>
          <NavDropdown.Item onClick={handleRegionFilter} id='asia'>Asia</NavDropdown.Item>
          <NavDropdown.Item onClick={handleRegionFilter} id='europe'>Europe</NavDropdown.Item>
          <NavDropdown.Item onClick={handleRegionFilter} id='oceania'>Oceania</NavDropdown.Item>
        </NavDropdown>
        <SearchBar handleSearch={handleSearch} />
      </Container>
    </Navbar>
  );
};

export default SiteNavBar;