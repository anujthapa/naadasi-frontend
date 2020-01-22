import React from 'react';

import Chiffon from '../images/about/icon/fabric-chiffon-white.png';
import Geogette from '../images/about/icon/fabric-geogette-white.png';
import PurCotton from '../images/about/icon/fabric-purecotton-white.png';
import Silk from '../images/about/icon/fabric-silk-white.png';


const About = () => (
    <div className="wrapper">
        <div className="wrapper-item about-one">
            <div>
                <h1>
                    "We design it simple <br/>
                    you make it awesome"
                </h1>
            </div>
        </div>
        <div className="wrapper-item about-two">
            <div>
                <h1>Our Philosophy</h1>
                <p>We are passionate to bring timeless dresses that are inspired by simplicity
                infused with a vivid imagination. From design to fabric, manufacturer to
                transporter, and finally packaging to delivery, hand-selected by our founders,
                we aim to bring extraordinary in every aspect of what we do to match your
                uniqueness and individual style. Our product is made to match the art of
                self-actualized life filled with love, respect, and commitment – because we
                design for life and way of living.</p>
            </div>
        </div>
        <div className="wrapper-item fabrics">
            <div className="fabric-section-one">
                <h1>Our Fabrics</h1>
                <p>Sustainable natural fabrics are foudations of Nadaasi. 
                They are not only healthy, but also a responsible,
                fashionable, and smart choice. Dresses that we design,
                and produce are made of following sustainable materials;</p>
            </div>
            <div className="fabric-section fabric-section-two">
                <img src={Chiffon} alt="Chiffon" />
                <h1>Chiffon/ Silk Chiffon</h1>
                <p>Cotton is the world's most widely used natural fibre and still the undisputed "king" of the global
                textiles industry. Cotton is almost pure cellulose, with softness and breathability that have made
                it the world's most popular natural fibre.</p>
            </div>
            <div className="fabric-section fabric-section-three">
                <img src={Geogette} alt="Geogette" />
                <h1>Geogette</h1>
                <p>It was named after the early 20th century French dressmaker Georgette de la Plante. Georgette
                is originally made of silk which is a sheer, lightweight, dull-finished crêpe fabric. Its crinkly crepe-light texture makes it one of the most distinctive fabrics.
                </p>
            </div>
            <div className="fabric-section fabric-section-four">
                <img src={PurCotton} alt="PureCotton" />

                <h1>Pure Cotton</h1>
                <p>Cotton is the world's most widely used natural fibre and still the undisputed "king" of the global
                textiles industry. Cotton is almost pure cellulose, with softness and breathability that have made
                it the world's most popular natural fibre.</p>
            </div>
            <div className="fabric-section fabric-section-five">
                <img src={Silk} alt="Silk" />

                <h1>Silk Organza</h1>
                <p>Silk Organza Fabric is naturally thin, sheer,
                lightweight and crisp woven from lustrous silk yarns.
                Organza Fabric has an incredible sheen without any stiffness.</p>
            </div>

        </div>

    </div>
)

export default About