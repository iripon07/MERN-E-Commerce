import React from 'react'
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css"

const Footer = () => {
  return (
      <footer id="footer">
        <div className='leftFooter'>
            <h4>Download</h4>
            <p>Download App from Android and IOS play store</p>
            <img src={playStore} alt='playStore'/>
            <img src={appStore} alt="appStore" />
        </div>
        <div className='midFooter'>
            <h1>E-commerce</h1>
            <p>High quality is our first priority</p>
            <p>Copyrights 2023 &copy: Ripon</p>
        </div>
        <div className='rightFooter'>
            <h4>Follow us</h4>
              <a href="https://www.linkedin.com/">Instagram</a>
              <a href="https://www.linkedin.com/">Instagram</a>
              <a href="https://www.linkedin.com/">Instagram</a>
        </div>


    </footer>
  )
}

export default Footer