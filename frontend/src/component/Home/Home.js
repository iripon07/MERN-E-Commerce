import React, { Fragment } from 'react';
import { CgMouse } from "react-icons/cg";
import "./Home.css";

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
    </Fragment>
  )
}

export default Home;