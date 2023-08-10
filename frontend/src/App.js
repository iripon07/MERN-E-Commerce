import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import './App.css';
import Home from './component/Home/Home';
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
        <Route exact path="/" component={Home}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
