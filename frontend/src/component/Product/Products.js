import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import React, { Fragment, useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearErrors, getProduct } from '../../actions/productActions';
import ProductCard from '../Home/ProductCard';
import Loader from '../layout/Loader/Loader';
import "./Products.css";

const categories = [
    "laptop",
    "Footwear",
    "Bottom",
    "Tops",
    "Attire",
    "Camera",
    "Smartphones"
]

const Products = () => {
    const { keyword } = useParams();
    const dispatch = useDispatch();
    const alert = useAlert();
    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([0, 25000])
    const [category, setCategory] = useState("");

    const {
        products,
        loading,
        error,
        productsCount,
        resultPerPage,
        filteredProductsCount,
    } = useSelector((state) => state.products);

    const setCurrentPageNo = (e) => {
        setCurrentPage(e)
    }
    const priceHandler = (e, newPrice) => {
        setPrice(newPrice);
    }
    let count = filteredProductsCount;
    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct(keyword, currentPage, price, category));
    }, [dispatch, keyword, alert, currentPage, price, error, category]);


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
                        <div className="filterBox">
                            <Typography>Price</Typography>
                            <Slider
                                value={price}
                                onChange={priceHandler}
                                valueLabelDisplay='on'
                                aria-label='range-slider'
                                min={0}
                                max={25000}
                            />
                            <Typography>Categories</Typography>
                            <ul className="categoryBox">
                                {
                                    categories.map((category) => (
                                        <li className="category-link"
                                            key={category}
                                            onClick={() => setCategory(category)}>{category}

                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        {resultPerPage < count && (
                            <div className="paginationBox">
                                <Pagination
                                    activePage={currentPage}
                                    itemsCountPerPage={resultPerPage}
                                    totalItemsCount={productsCount}
                                    onChange={setCurrentPageNo}
                                    nextPageText="Next"
                                    prevPageText="Prev"
                                    firstPageText="1st"
                                    lastPageText="Last"
                                    itemClass="page-item"
                                    linkClass="page-link"
                                    activeClass="pageItemActive"
                                    activeLinkClass="pageLinkActive"
                                />
                            </div>
                        )}
                    </Fragment>
            }
        </Fragment>
    )
}

export default Products;