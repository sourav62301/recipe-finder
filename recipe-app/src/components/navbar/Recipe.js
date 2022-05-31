import React from 'react'
import RecipCard from './RecipCard'
import "./Recipe.css"

export default function Recipe({meals}) {
  return (
    <div className='recipe-container'>
    {meals.map((meal) => 
        <RecipCard key={meal.idMeal} {...meal} />  
    )}
    </div>
  )
}
