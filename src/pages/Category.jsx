import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';


import { getFilteredCategory } from '../api';

import { MealList } from '../components/MealList';

export const Category = () => {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);
    const navigate = useNavigate();


    const handleBack = () => {
        navigate(-1)
    }

    useEffect(() => {
        getFilteredCategory(name).then((data) => { data.meals && setMeals(data.meals) });
    }, [name]);


    return (
        <div>
            <button onClick={() => handleBack()} className="btn">Go Back</button>
            <MealList meals={meals} />
        </div>




    )
}
