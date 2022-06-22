import React from 'react';
import { getAllCategory } from '../api';
import { useState, useEffect } from 'react';


import { Preloader } from '../components/Preloader'
import { CategoryList } from '../components/CategoryList';

export const Home = () => {

  const [catalog, setCatalog] = useState([]);


  useEffect(() => {
    getAllCategory().then((data) => {
      setCatalog(data.categories);
    });


  }, []);

  return (

    <>
      {!catalog.length ? (<Preloader />) : (
        <CategoryList catalog={catalog} />
      )}
    </>
  )
}
