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
  console.log(products, "Product fetching");

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
    </Fragment>
  )
}
export default Home;