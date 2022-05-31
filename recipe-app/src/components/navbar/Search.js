import React, { useContext, useState } from "react";
import axios from "axios";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { MyContext } from "./context";
import "./Search.css";

export default function Search() {
  const [searchInput, setSearchInput] = useState("");

  const { setMeals } = useContext(MyContext);

  function handleSearch() {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
      )
      .then(({data})=> setMeals(data.meals))
      .catch((error) => console.log(error));
  }
  return (
    <>
      <div className="search">
        <h1>Welcome</h1>
        <h2>You can search Recipe for Everything..</h2>
        <div className="search-input">
          <InputGroup className="mb-3 max-5">
            <FormControl
              placeholder="Search any Recipe"
              aria-label="Recipe Finder"
              aria-describedby="basic-addon2"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <Button variant="info" id="recipe-search" onClick={handleSearch}>
              Search
            </Button>
          </InputGroup>
        </div>
      </div>
    </>
  );
}
