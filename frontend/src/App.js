import React from 'react';
import { useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import './App.css';
import { loadUser } from './actions/userAction';
import Home from './component/Home/Home';
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from './component/Product/Products';
import Search from './component/Product/Search';
import ProtectiveRoute from './component/Route/ProtectiveRoute';
import LoginSignUp from './component/User/LoginSignUp';
import Profile from './component/User/Profile';
import Footer from './component/layout/Footer/Footer';
import Header from './component/layout/Header/Header';
import UserOptions from './component/layout/Header/UserOptions';
import store from "./store";
import UpdateProfile from './component/User/UpdateProfile';


function App() {
  const { isAuthenticated, user } = useSelector((state => state.user))
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Droid Serif']
      }
    });
    store.dispatch(loadUser());

  }, [])

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:keyword' element={<Products />} />
        <Route path='/search' element={<Search />} />
        <Route path='/login' element={<LoginSignUp />} />
        <ProtectiveRoute>
          <Route path='/account' element={<Profile />} />
          <Route path='/me/update' element={<UpdateProfile />} />
        </ProtectiveRoute>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
