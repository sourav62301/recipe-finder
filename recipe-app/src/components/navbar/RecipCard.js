import React from "react";
import "./RecipeCard.css";

import { Card } from "react-bootstrap";
import RecipeModal from "./RecipeModal";

export default function RecipCard({ strMeal, strMealThumb, strInstructions }) {
  return (
    <>
      <div className="box">
        <Card className="p-1" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={strMealThumb} />
          <Card.Body>
            <Card.Title>{strMeal}</Card.Title>
            <RecipeModal title={strMeal} description={strInstructions} />
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
