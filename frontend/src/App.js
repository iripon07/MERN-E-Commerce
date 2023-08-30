import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import './App.css';
import Home from './component/Home/Home';
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from './component/Product/Products';
import Search from './component/Product/Search';
import Footer from './component/layout/Footer/Footer';
import Header from './component/layout/Header/Header';
import LoginSignUp from './component/User/LoginSignUp';


function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Droid Serif']
      }
    });
  }, [])

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:keyword' element={<Products />} />
        <Route path='/search' element={<Search />} />
        <Route path='/login' element={<LoginSignUp />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
