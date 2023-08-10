import React, { Fragment } from 'react';
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from './Product';

const product = {
  name: "Blue Shirt",
  image: [{ url: "https://dailydiscounts.com.bd/wp-content/uploads/2021/07/ezgif.com-gif-maker-2021-07-14T163009.100.jpg" }],
  price: "2200",
  _id:"ripon"
};

const Home = () => {
  return (
    <Fragment>
        <div className="banner">
            <p>Welcome to E-commerce</p>
            <h1>FIND AMAZING PRODUCT BELOW</h1>

            <a href="#container">
                <button>
                  Scroll <CgMouse />
                </button>
            </a>
        </div>
        <h2 className='homeHeading'>Featured Products</h2>
        <div className="container" id="container">
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
          
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
        </div>
    </Fragment>
  )
}

export default Home;