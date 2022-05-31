import React, { useContext } from "react";
import "./Home.css";
import { useEffect, useState } from "react";
import Search from "./Search";


import axios from "axios";
import Recipe from "./Recipe";
import { MyContext } from "./context";
// import Header from "./Header";

export default function Home() {

  const {meals, setMeals} = useContext(MyContext);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then(({ data }) => setMeals(data.meals))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="homepage">
      {/* <Header/> */}
      <Search />
      <Recipe meals={meals}/>
    </div>
  );
}
