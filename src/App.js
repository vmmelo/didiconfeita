import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';
import Header from './components/Header'
import Banner from './components/Banner'
import ProductList from './components/ProductList'
import Footer from './components/Footer';
import { categories, categoriesDescriptions } from './components/constant';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      {categories.map((key, index) => <ProductList key={`list_${index}`} title={key} description={categoriesDescriptions[key]} />)}
      <Footer />
    </div>
  );
}

export default App;
