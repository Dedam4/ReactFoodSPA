import React from 'react';
import { Link } from 'react-router-dom';


export const CatrgoryItem = ({ idCategory, strCategory, strCategoryThumb, strCategoryDescription }) => {


  return (


    <div className="card" key={idCategory}>
      <div className="card-image">
        <img src={strCategoryThumb} alt={strCategory} height="300px" />
      </div>
      <div className="card-content">
      <span className="card-title" style={{color: "black", fontWeight:"500"}}>{strCategory}</span>
        <p>{strCategoryDescription.slice(0, 70)}...</p>
      </div>
      <div className="card-action">
        <Link to={`/category/${strCategory}`} className="btn">Watch category</Link>
      </div>
    </div>


  )
}
