import React from 'react';
import insta_bg from "../../media/banners/insta-block-bg.png";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FooterBottom from './FooterBottom';
// import { faFacebook } from "@fortawesome/free-brands-svg-icons"; 



const Footer = () => {
    return (
        <div>
            <div className="footer-insta-block">
                <img alt="insta-travel-trip-au-travel" src={insta_bg} width="1200px" height="350px"></img>
                <h3>Мы в социальных сетях...</h3>
                    <div className="social-icons">
                        <Link to="#"><span className='bi bi-facebook'></span></Link>
                        <Link to="#"><span className='bi bi-instagram'></span></Link>
                        <Link to="#"><span className='bi bi-telegram'></span></Link>
                    </div>
            </div>
            <FooterBottom/>
        </div>
    );
};

export default Footer;