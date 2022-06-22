import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getMealById } from '../api'
import { useEffect, useState } from 'react'

import { Preloader } from '../components/Preloader';
import { RecipeItem } from '../components/RecipeItem';

export const Recipe = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        getMealById(id).then(data => setRecipe(data.meals[0]));
    }, [id]);

    const handlerBack = () =>{
           navigate(-1);
    }
    return (
        <>
        <button onClick={() => handlerBack()} className="btn">Go back</button>

        {!recipe.idMeal ? <Preloader/> : <RecipeItem idMeal={recipe.idMeal } {...recipe}/> }
        </>
    )
}
