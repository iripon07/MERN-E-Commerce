import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import "./Products.css";
import { getProduct } from '../../actions/productActions';
import Loader from '../layout/Loader/Loader';
import ProductCard from '../Home/ProductCard';


const Products = () => {
    const { keyword } = useParams();
    const dispatch = useDispatch();
    const { loading, products } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProduct(keyword));
    }, [dispatch, keyword]);

    return (
        <Fragment>
            {
                loading
                    ?
                    <Loader /> : <Fragment>
                        <h2 className='productsHeading'>Products</h2>
                        <div className='products'>
                            {
                                products && products.map(product => (
                                    <ProductCard key={product._id} product={product} />
                                ))
                            }
                        </div>
                    </Fragment>
            }
        </Fragment>
    )
}

export default Products;