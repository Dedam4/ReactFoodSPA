import React from 'react'
import style from './RecipeItem.module.css'

export const RecipeItem = (recipe) => {
  return (
    <div className='container recipe_card' key={recipe.idMeal}>

      <h2 className={style.title_name}>{recipe.strMeal}</h2>
      <main className={style.content}>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} className={style.img_mealeRecipe} />
        <div className={style.recipe__info}>
          <div className="recipe__category"><p>{recipe.strCategory}</p></div>
          <div className="recipe__country"><p></p>{recipe.strArea}</div>
          <div className="recipe__instructions"><p>{recipe.strInstructions}</p></div>
        </div>
      <table className="highlight">
        <thead>
          <tr>
            <th>Ingredient </th>
            <th>Measure</th>
          </tr>
        </thead>
        <tbody>
          {
            Object.keys(recipe).map(key => {
              if (key.includes('Ingredient') && recipe[key]) {
                return (
                  <tr key={key}>
                    <td>{recipe[key]}</td>
                    <td>{
                      recipe[`strMeasure${key.slice(13)}`]}

                    </td>
                  </tr>
                )
              }
              return null;
            })
          }
        </tbody>
      </table>
        {recipe.strYoutube ? (
          <div className="row">
            <h5 className={style.title__video}>Video Recipe</h5>
            <iframe src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} title={recipe.idMeal} allowFullScreen />
          </div>
        ) : null}
      </main>


    </div>
  )
}
