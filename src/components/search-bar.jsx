import React from "react";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SearchBar = ({ handleSearch }) => {
  return (
    <Form inline>
      <FormControl type="text" placeholder="Search" onChange={handleSearch} />
      <Button className="ml-2">Search</Button>
    </Form>
  );
};

export default SearchBar;
