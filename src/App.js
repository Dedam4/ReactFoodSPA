import { Header } from './components/Header'
import { Footer } from './components/Footer';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'


import { Home } from './pages/Home'
import { Recipe } from './pages/Recipe';

import { NotFound } from './pages/NotFound';
import { Category } from './pages/Category';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className='container content'>

          <Routes>
            <Route path='/' element={<Home />} />
          
            <Route path='/category/:name' element={<Category />} />
            <Route path='/meal/:id' element={<Recipe />} />

            <Route path='*' element={<NotFound />} />
          </Routes>


        </main>

        <Footer />
      </BrowserRouter>



    </>
  );
}

export default App;
