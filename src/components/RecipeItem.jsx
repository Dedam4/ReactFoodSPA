import React from 'react'

export const RecipeItem = ({idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb }) => {
  return (
    <div className='container recipe_card' key={idMeal}>
      <h1 className='title_name'>{strMeal}</h1>
      <main className="content">
        <img src={strMealThumb} alt={strMeal} className="img_mealeRecipe" />
        <div className="recipe__info">
          <div className="recipe__category"><p>{strCategory}</p></div>
          <div className="recipe__country"><p></p>{strArea}</div>
          <div className="recipe__instructions"><p>{strInstructions}</p></div>
        </div>
      </main>
      <div className="cooking">
        <div className="cooking__ingredients">

          <ul className="ingredients__list">

            <li className="ingredients__item"></li>

          </ul>

        </div>

        <div className="cooking__measure">
          <ul className="measure__list">
            <li className="measure__item"></li>
          </ul>
        </div>
      </div>

    </div>
  )
}
