import React from 'react'
import logo from '../images/nadaasi/Nadaasioriginal.png'

const Footer = () => {
    <div className="container-fluid border-top py-2">

        <div className="float-left">
            <div className="logo">
                <a className="logo">
                    <img src={logo} alt="logo" />
                </a>
                <img src="../images/telephone.svg" alt="Phone"/>
                <p>0469375029</p>
                <img src="../images/envelope.svg" alt="Phone"/>
                <p>info@nadaasi.com</p>
            </div>
            <p>Sales and inquiries</p>
            <p>Email: sales@lianatech.com</p>
            <p>Phone: +358 10 387 7053 </p>
            <button type="button" className="btn btn-success">Contact us</button>
        </div>
        <div className="float-right">
            <a href="#" className="card-link">Company</a>
            <a href="#" className="card-link">Products</a>
            <a href="#" className="card-link">Contact us</a>
            <a href="#" className="card-link">News</a>
            <a href="#" className="card-link">Intranet</a>
        </div>

    </div>
}

export default Footer