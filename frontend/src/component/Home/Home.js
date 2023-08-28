<<<<<<< HEAD
<<<<<<< HEAD
import React, { Fragment, useEffect } from 'react';
import { useAlert } from 'react-alert';
import { CgMouse } from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getProduct } from '../../actions/productActions';
import Loader from '../layout/Loader/Loader';
import MetaData from '../layout/MetaData';
import "./Home.css";
import ProductCard from './ProductCard';


const Home = () => {

  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(state => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());

  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {
        loading ? (
          <Loader />
        ) : (
          <Fragment>
            <MetaData title="E-commerce" />
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
              {products && products.map(product => (
                <ProductCard key={product._id} product={product} />
              ))};
            </div>
          </Fragment>

        )
      }

=======
=======
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
import React, { Fragment } from 'react';
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from './Product';
import MetaData from '../layout/MetaData';

const product = {
  name: "Blue Shirt",
  image: [{ url: "https://dailydiscounts.com.bd/wp-content/uploads/2021/07/ezgif.com-gif-maker-2021-07-14T163009.100.jpg" }],
  price: "2200",
  _id:"ripon"
};

const Home = () => {
  return (
    <Fragment>
      <MetaData title="Ecommerce"/>
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
<<<<<<< HEAD
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
=======
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
    </Fragment>
  )
}

export default Home;