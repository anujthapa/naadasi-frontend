import React from 'react';
import FacebookLogo from '../images/home/icons/facebook.svg';
import InstagramLogo from '../images/home/icons/instagram.svg';

const Home = () => (
    <div className="wrapper">
        <div className="wrapper-item carousel">
            <div>
                <h3>SIMPLE FABRIC WEDDING DRESSES</h3>
                <h1>Beautiful fabrics last; synthetics don't.</h1>
                <button><span>SHOP NOW</span></button>
            </div>
        </div>

        <div className="wrapper-item home-section-textiles two">
            <div>
                <div className="home-section-textile">
                    <h1>Organic Textiles</h1>
                </div>
                <div className="home-section-textile">
                    <h3>For a better future</h3>
                </div>
                <div className="home-section-textile">
                    <p>
                        We're and eco-friendly company certified by Control Union certifications with
                        GOTS and Organic Content Standard ( Organic 100 abd Organic Blended) and able
                        to produce a wide range of organic fabric clothing. We located in Finland,
                        one of the northern regions in the world in high quality organic fabric production.
                    </p>
                </div>
                <div className="home-section-textile">
                    <button><span>SHOP NOW</span></button>
                </div>
            </div>
        </div>

        <div className="wrapper-item three">
            <h1>We Provide</h1>
            <h3>better qualities</h3>
            <div className="cards">
                <div className="card1 t-shirt">
                    <h4><u>Textile Standard</u></h4>
                </div>
                <div className="card1 paint-brush">
                    <h4><u>Standard Color</u></h4>
                </div>
                <div className="card1 cotton">
                    <h4><u>Standard Cotton</u></h4>
                </div>
            </div>
        </div>

        <div className="wrapper-item newsletter">
            <div>
                <h3>
                    Sign up for our newsletter and get
                    <h1> 20% </h1>
                    discount on evening dresses
                </h3>
                <input type="text" placeholder="Your Email Address" />
                <button> <u> SUBSCRIBE </u> </button>
            </div>
        </div>

        <div className="wrapper-item services">
            <h1>Our Services</h1>
            <h3>better qualities</h3>
            <div className="cards">
                <div className="card1 ship">
                    <h4><u>Free Shipping Worldwide</u></h4>
                </div>
                <div className="card1 money-back">
                    <h4><u>Money Back Guarantee</u></h4>
                </div>
                <div className="card1 hours">
                    <h4><u>24/7 Customer Support</u></h4>
                </div>
            </div>
        </div>

        <div className="wrapper-item social">
            <div className="social-item-one">

            </div>
            <div className="social-item-two">

            </div>
            <div className="social-item-three">
                <p>
                    Follow us on <br/><br/>
                    <img src={FacebookLogo} width="25px" alt="facebook"/>
                    <img src={InstagramLogo} width="25px" alt="instagram"/>
                </p>
            </div>
            <div className="social-item-four">

            </div>
            <div className="social-item-five">

            </div>
            <div className="social-item-six">

            </div>
        </div>

        <div className="wrapper-item review">
            <div className="review-card">
                    <div className="review-header">
                        <p>
                            It's so elegant and stunning
                        </p>
                        <ul className="stars">
                            <li className="star"></li>
                            <li className="star"></li>
                            <li className="star"></li>
                            <li className="star"></li>
                            <li className="star"></li>
                        </ul>
                    </div>
                    <p className="review-text">
                        This dress was wonderful! The fit was perfect, the shape was fabulous,
                        and corset back was a gorgeous touch. I will say the bottom was a tad long,
                        but nothing a tiny hem couldn't fix! I recommend this 100%.</p>
                    <p className="review-name">by Angela de Silva</p>
            </div>

        </div>
    </div>
)

export default Home