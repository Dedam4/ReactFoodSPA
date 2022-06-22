import React from 'react'
import { Link } from 'react-router-dom';

export const Meal = (props) => {
    const { strMeal, idMeal, strMealThumb } = props;

    return (
        <div className="card" key={idMeal}>
           
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal} height="300px" />
            </div>
            <div className="card-content">
                <span className="card-title" style={{ color: "black", fontWeight: "500" }}>{strMeal}</span>
                
            </div>
            <div className="card-action">
                <Link to={`/category/${idMeal}`} className="btn">Watch recipe</Link>
            </div>
        </div>

    )
}
