import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import './App.css';
import Home from './component/Home/Home';
<<<<<<< HEAD
<<<<<<< HEAD
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from './component/Product/Products';
import Search from './component/Product/Search';
=======
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
=======
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
import Footer from './component/layout/Footer/Footer';
import Header from './component/layout/Header/Header';


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
<<<<<<< HEAD
<<<<<<< HEAD
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:keyword' element={<Products />} />
        <Route path='/search' element={<Search />} />


=======
        <Route path="/" element={<Home />} exact />
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
=======
        <Route path="/" element={<Home />} exact />
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
