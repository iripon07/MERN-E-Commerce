import React, { Fragment, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearErrors, getProductDetails } from '../../actions/productActions.js';
import Loader from "../layout/Loader/Loader";
import MetaData from '../layout/MetaData.js';
import "./ProductDetails.css";
import ReviewCard from './ReviewCard.js';
import { useAlert } from 'react-alert'


const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const alert = useAlert()
    const { product, loading, error } = useSelector((state) => state.productDetails);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProductDetails(id));
    }, [dispatch, id, alert, error]);


    const options = {
        edit: false,
        color: "rgba(20, 20, 20, 0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: product.ratings,
        isHalf: true
    }

    return (
        <Fragment>
            {
                loading ? <Loader /> : (
                    <Fragment>
                        <MetaData title={`${product.name} --ECOMMERCE`} />
                        <div className='ProductDetails'>
                            <div>
                                <Carousel>
                                    {product.images &&
                                        product.images.map((item, i) => (
                                            <img
                                                className="CarouselImage"
                                                key={i}
                                                src={item.url}
                                                alt={`${i} Slide`}
                                            />
                                        ))}
                                </Carousel>
                            </div>

                            <div>
                                <div className="detailsBlock-1">
                                    <h2>{product.name}</h2>
                                    <p>Product # {product._id}</p>
                                </div>
                                <div className="detailsBlock-2">
                                    <ReactStars {...options} />
                                    <span className="detailsBlock-2-span">
                                        {" "}
                                        ({product.numOfReviews} Reviews)
                                    </span>
                                </div>
                                <div className="detailsBlock-3">
                                    <h1>{`₹${product.price}`}</h1>
                                    <div className="detailsBlock-3-1">
                                        <div className="detailsBlock-3-1-1">
                                            <button >-</button>
                                            <input readOnly type="number" value={product.quantity} />
                                            <button>+</button>
                                        </div>
                                        <button
                                        >
                                            Add to Cart
                                        </button>
                                    </div>

                                    <p>
                                        Status:
                                        <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                                            {product.Stock < 1 ? "OutOfStock" : "InStock"}
                                        </b>
                                    </p>
                                </div>

                                <div className="detailsBlock-4">
                                    Description : <p>{product.description}</p>
                                </div>

                                <button className="submitReview">
                                    Submit Review
                                </button>
                            </div>
                        </div>

                        <h3 className='reviewsHeading'>REVIEWS</h3>
                        {
                            product.reviews && product.reviews[0] ? (
                                <div className='reviews'> {
                                    product.reviews && product.reviews.map((review) => <ReviewCard key={review._id} review={review}></ReviewCard>)
                                }
                                </div>
                            ) : (
                                <p className='noReviews'>No Reviews Yet</p>
                            )
                        }

                    </Fragment>
                )
            }
        </Fragment>
    )
}

export default ProductDetails