import React from 'react';

import Support from '../images/contact/Icons/support.svg';
import Suggestion from '../images/contact/Icons/suggestion.svg';
import JoinUs from '../images/contact/Icons/join-us.svg';
import HomeIcon from '../images/contact/Icons/home.svg';
import CallIcon from '../images/contact/Icons/telephone.svg';
import MailIcon from '../images/contact/Icons/envelope.svg';


const Contact = () => (
    <div className="wrapper">
        <div className="wrapper-item contact-map">
            <div className="contact-text">
                <h1>Contact Us</h1>
                <h3>Working Service 24/7</h3>
            </div>
        </div>
        <div className="wrapper-item contact-details">
            <div className="company-info">
                <div className="company-info-1">
                    <p>Company information</p>
                </div>
                <div className="company-info-2">
                    <img src={HomeIcon} alt="Address" />
                </div>
                <div className="company-info-3">
                    <p>
                        Suksitie 3, 820 <br />
                        84100 Ylivieska <br />
                        Finland <br />
                        Nadaasi <br />
                        Registered Name / ID: <br />
                        SUR-MEK AY / 2806255-3 <br />
                    </p>
                </div>
                <div className="company-info-4">
                    <img src={CallIcon} alt="Phone no." />               
                 </div>
                <div className="company-info-5">
                    <p>
                        Call us: <br />
                        046 9375 029
                    </p>
                </div>
                <div className="company-info-6">
                    <img src={MailIcon} alt="E-mail address" />
                </div>
                <div className="company-info-7">
                    <p>info@nadaasi.fi</p>
                </div>
            </div>
            <div className="contact-form">
                <form>
                    <input className="text" type="text" placeholder="Name *" />
                    <input className="text" type="text" placeholder="Subject" />
                    <input className="text" type="text" placeholder="E-mail *" />
                    <textarea className="textarea" placeholder="Message"></textarea>
                </form>
            </div>
            <div className="contact-cards">
                <div className="card-image">
                    <img src={Support} alt="Personalized Help" />
                    <h4><u>Personalized Help</u></h4>
                </div>
                <div className="card-text">
                    <p>
                        Whether you need help in choosing a right
                        dress for special setting or you want to
                        customize a dress - we can help. Contact us.
                    </p>
                </div>
                <div className="card-image">
                    <img src={Suggestion} alt="Suggestions" />
                    <h4><u>Standard Color</u></h4>
                </div>
                <div className="card-text">
                    <p>
                        We would really appreciate your feedback on
                        what we have or how it could be better.
                    </p>
                </div>
                <div className="card-image">
                    <img src={JoinUs} alt="Join Us" />
                    <h4><u>Standard Cotton</u></h4>
                </div>
                <div className="card-text">
                    <p>
                        If you have a dream to leave your mark on
                        fashion industry, contact us. We take every
                        initiative seriously, if your concepts meet
                        our values, you will see them a reality and
                        that is a promise.
                    </p>

                </div>


            </div>
        </div>

    </div>
)

export default Contact