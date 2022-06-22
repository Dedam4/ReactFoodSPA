import React from 'react';
import { CatrgoryItem } from './CatrgoryItem';

export const CategoryList = ({ catalog = [] }) => {




    return (
        <div className='list'>
            {catalog.map((el) => (<CatrgoryItem key={el.idCategory} {...el} />))}
        </div>
    )
}
