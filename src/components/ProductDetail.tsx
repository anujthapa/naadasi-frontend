import React, { Component } from 'react'
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import customImage from '../images/Shop/Custom/illustration.png';
import customView from '../images/Shop/Custom/view.png';
import washClean from '../images/Shop/icons/clean.svg';
import washIron from '../images/Shop/icons/iron.svg';
import washBleach from '../images/Shop/icons/not-bleach.svg';
import washDry from '../images/Shop/icons/not-dry.svg';
import { Button, InputGroup, FormControl, Card, Accordion, Modal } from 'react-bootstrap';

class ProductDetail extends Component<{ productDetail }, any> {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            quantity: "",
            bust: "", waist: '', highHip: '', hip: '', text: "",
            InitialBtnText: "FIND YOUR OWN STYLE", FinalBtnText: "Your Body type is ",
            bodyType: ["hourglass", "bottom-hourglass", "top-hourglass",
                "spoon", "triangle", "inverted-triangle", "rectangle"]
        };
        // binding of 'this' in our constructor to our method handleChange is necessary for 'this' to work in handleChange method
        this.BustChange = this.BustChange.bind(this);
        this.WaistChange = this.WaistChange.bind(this);
        this.HighHipChange = this.HighHipChange.bind(this);
        this.HipChange = this.HipChange.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    BustChange = (e) => {
        this.setState({ bust: e.target.value });
    }
    WaistChange = (e) => {
        this.setState({ waist: e.target.value });
    }
    HighHipChange = (e) => {
        this.setState({ highHip: e.target.value });
    }
    HipChange = (e) => {
        this.setState({ hip: e.target.value });
    }
    computeBodyType = () => {

        let bust = this.state.bust;
        let waist = this.state.waist;
        let highHip = this.state.highHip;
        let hip = this.state.hip;
        let b_h = bust - hip;
        let h_b = hip - bust;
        let b_w = bust - waist;
        let h_w = hip - waist;
        let hh_w = highHip / waist;

        if (bust && waist && highHip && hip !== "") {
            if (b_h <= 1 && h_b < 3.6 && b_w >= 9 && h_w >= 10) {
                this.setState({ text: "Your Body type is Hourglass" });
                this.setState({ InitialBtnText: this.state.text });
                console.log("Hourglass");
                return "Hourglass";
            } else
                if (b_h >= 3.6 && h_b < 10 && h_w >= 9 && hh_w < 1.193) {
                    console.log("Bottom Hourglass");
                    this.setState({ text: "Your Body type is Bottom Hourglass" });
                    this.setState({ InitialBtnText: this.state.text });
                    return "Bottom Hourglass";
                } else
                    if (b_h > 1 && b_h < 10 && b_w >= 9) {
                        this.setState({ text: "Your Body type is Top Hourglass" });
                        this.setState({ InitialBtnText: this.state.text });
                        console.log("Top Hourglass");
                        return "Top Hourglass";
                    } else
                        if (h_b > 2 && h_w >= 7 && hh_w >= 1.193) {
                            this.setState({ text: "Your Body type is Spoon" });
                            this.setState({ InitialBtnText: this.state.text });
                            console.log("Spoon");
                            return "Spoon";
                        } else
                            if (h_b >= 3.6 && h_w < 9) {
                                this.setState({ text: "Your Body type is Triangle" });
                                this.setState({ InitialBtnText: this.state.text });
                                console.log("Triangle");
                                return "triangle";
                            } else
                                if ((bust - hip) >= 3.6 && b_w < 9) {
                                    this.setState({ text: "Your Body type is Inverted Triangle" });
                                    this.setState({ InitialBtnText: this.state.text });
                                    console.log("Inverted Triangle");
                                    return "Inverted Triangle";
                                } else
                                    if (b_h < 3.6 && h_b < 3.6 && b_w < 9 && h_w < 10) {
                                        this.setState({ text: "Your Body type is Rectangle" });
                                        console.log(this.state.text);
                                        this.setState({ InitialBtnText: this.state.text });

                                        return "Rectangle";
                                    } else {
                                        console.log("Body Type not found");
                                    }
        } else {
            console.log("Please enter a number");
            this.setState({ InitialBtnText: this.state.text });
            this.setState({ text: "Please enter a number" });
        }
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    changeQuantity = (e) => {
        this.setState({ quantity: e.target.value });
        console.log(this.state.quantity);
    }

    render() {
        const { productDetail } = this.props;

        const CustomModal = () => (
            <Modal show={this.state.modal} >
                <Modal.Body className="custom-modal-body"
                    style={{
                    }}>
                    <div className="custom-modal-body-image">
                        <img src={customImage} className="custom-modal-body-image-1" alt="Custom Image" />
                        <img src={customView} className="custom-modal-body-image-2" alt="Custom Image" />
                    </div>
                    <div className="custom-modal-body-unit">
                        <h3>Change Units</h3>
                        <button>cm</button>
                        <button>inch</button>
                    </div>
                    <div className="custom-modal-body-text">
                        <ol>
                            <li className="custom-li">
                                <p>1. Neck</p>
                                <input type="number" /></li>
                            <li className="custom-li">
                                <p>2. Over Bust</p>
                                <input type="number" /></li>
                            <li className="custom-li">
                                <p>3. Bust</p>
                                <input type="number" /></li>
                            <li className="custom-li">
                                <p>4. Under Bust</p>
                                <input type="number" /></li>
                            <li className="custom-li">
                                <p>5. Waist</p>
                                <input type="number" /></li>
                            <li className="custom-li">
                                <p>6. Hips</p>
                                <input type="number" /></li>
                            <li className="custom-li">
                                <p>7. Neck to Heel</p>
                                <input type="number" /></li>
                            <li className="custom-li">
                                <p>8. Neck to Above Knee</p>
                                <input type="number" /></li>
                            <li className="custom-li">
                                <p>9. Above Knee to Ankle</p>
                                <input type="number" /></li>
                            <li className="custom-li">
                                <p>10. Arm Length</p>
                                <input type="number" /></li>
                            <li className="custom-li">
                                <p>11. Shoulder Seam</p>
                                <input type="number" /></li>
                            <li className="custom-li">
                                <p>12. Arm Hole</p>
                                <input type="number" /></li>
                            <li className="custom-li">
                                <p>13. Bicep</p>
                                <input type="number" /></li>
                            <li className="custom-li">
                                <p>14. Fore Arm</p>
                                <input type="number" /></li>
                            <li className="custom-li">
                                <p>15. Wrist</p>
                                <input type="number" /></li>
                            <li className="custom-li">
                                <p>16. V Neck Cut</p>
                                <input type="number" /></li>
                            <li className="custom-li">
                                <p>17. Shoulder to waist</p>
                                <input type="number" /></li>
                            <li className="custom-li">
                                <p>18. Waist to above Knee</p>
                                <input type="number" /></li>
                            <li className="custom-li">
                                <p>19. Hip (4" below waist)</p>
                                <input type="number" /></li>
                        </ol>
                    </div>
                    <div className="custom-modal-body-button">
                        <button onClick={this.toggle}>Save and Exit</button>
                    </div>
                    {/* <img src={customInput} alt="Custom Input" /> */}
                </Modal.Body>
            </Modal >
        )

        return (
            <div className="product-detail" style={{ fontFamily: "FuturaLtBT" }}>
                {productDetail ? (
                    <div>
                        <div className="product-detail-layout">
                            <div className="product-detail-left">
                                <img src={require(`../images/Shop/FP_MG_3537-Edited.jpg`)} alt="Product" className="m-3" />
                                <img src={require(`../images/Shop/FP_MG_3556-Edited.jpg`)} alt="Product" className="m-3" />
                                <img src={require(`../images/Shop/FP_MG_3572-Edited.jpg`)} alt="Product" className="m-3" />
                            </div>
                            <div className="product-detail-center">
                                <div className="product-detail-image">
                                    <img src={require(`../images/Shop/${productDetail._id}.jpg`)} alt="Product" />
                                </div>
                                <br />
                                <div className="product-detail-style">
                                    <Accordion className="w-1">
                                        <Card className="product_detail-style-card">
                                            <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                                                {this.state.InitialBtnText}
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    <InputGroup>
                                                        <InputGroup.Prepend>
                                                            <InputGroup.Text id="btnGroupAddon">Bust</InputGroup.Text>
                                                        </InputGroup.Prepend>
                                                        <FormControl
                                                            type="text"
                                                            value={this.state.bust}
                                                            onChange={this.BustChange}
                                                            placeholder="In inches"
                                                            aria-label="Input group example"
                                                            aria-describedby="btnGroupAddon"
                                                        />
                                                    </InputGroup>
                                                    <InputGroup>
                                                        <FormControl
                                                            type="text"
                                                            value={this.state.waist}
                                                            onChange={this.WaistChange}
                                                            placeholder="In inches"
                                                            aria-label="Input group example"
                                                            aria-describedby="btnGroupAddon"
                                                        />
                                                        <InputGroup.Prepend>
                                                            <InputGroup.Text id="btnGroupAddon">Waist</InputGroup.Text>
                                                        </InputGroup.Prepend>
                                                    </InputGroup>
                                                    <InputGroup>
                                                        <FormControl
                                                            type="text"
                                                            value={this.state.highHip}
                                                            onChange={this.HighHipChange}
                                                            placeholder="In inches"
                                                            aria-label="Input group example"
                                                            aria-describedby="btnGroupAddon"
                                                        />
                                                        <InputGroup.Prepend>
                                                            <InputGroup.Text id="btnGroupAddon">High Hip</InputGroup.Text>
                                                        </InputGroup.Prepend>
                                                    </InputGroup>
                                                    <InputGroup>
                                                        <FormControl
                                                            type="text"
                                                            value={this.state.hip}
                                                            onChange={this.HipChange}
                                                            placeholder="In inches"
                                                            aria-label="Input group example"
                                                            aria-describedby="btnGroupAddon"
                                                        />
                                                        <InputGroup.Prepend>
                                                            <InputGroup.Text id="btnGroupAddon">Hip</InputGroup.Text>
                                                        </InputGroup.Prepend>
                                                    </InputGroup>
                                                    <Button onClick={this.computeBodyType} block>Calculate</Button>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                    <br />
                                </div>
                            </div>
                            <div className="product-detail-right">
                                <div className="product-detail-description">
                                    <div className="product-detail-name">
                                        <h3>{productDetail.name}</h3>
                                    </div>
                                    <div className="product-detail-price">
                                        <p style={{ float: 'left' }}>{productDetail.price}</p>
                                        <ul className="stars">
                                            <li className="star"></li>
                                            <li className="star"></li>
                                            <li className="star"></li>
                                            <li className="star"></li>
                                            <li className="star"></li>
                                        </ul>
                                    </div>
                                    <div className="product-detail-sizes">
                                        <select>
                                            {productDetail.availableSizes.map(item => (
                                                <option value={item}>{item}</option>
                                            ))}
                                        </select>
                                        <button className="custom-button" onClick={this.toggle}>CUSTOM SIZE</button>
                                    </div>
                                    <div className="product-detail-quantity">
                                        <br /><br/>
                                        <p style={{ display: 'initial', marginRight: '1em' }}>QUANTITY</p>
                                        <input
                                            type="number"
                                            min="0"
                                            max="5"
                                            value={this.state.quantity}
                                            onChange={this.changeQuantity}
                                            style={{ boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.05)', border: 'transparent' }}
                                        />
                                    </div>
                                    <div className="product-detail-cart-add">
                                        <br /><br />
                                        <button className="add-cart">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="product-detail-detail">
                            <div className="product-detail-details">
                                <h3>Product Details</h3>
                                <br />
                                <ol>
                                    <li className="product-detail-details-li">
                                        <p>Closure</p>
                                        <p></p></li>
                                    <li className="product-detail-details-li">
                                        <p>Details</p>
                                        <p>{productDetail.details}</p></li>
                                    <li className="product-detail-details-li">
                                        <p>Fabric</p>
                                        <p></p></li>
                                    <li className="product-detail-details-li">
                                        <p>Length</p>
                                        <p></p></li>
                                    <li className="product-detail-details-li">
                                        <p>Neckline</p>
                                        <p></p></li>
                                    <li className="product-detail-details-li">
                                        <p>Waistline</p>
                                        <p></p></li>
                                    <li className="product-detail-details-li">
                                        <p>Model's Height & Size</p>
                                        <p></p></li>
                                </ol>
                            </div>
                            <div className="product-detail-wash-care">
                                <h3>Washing and Care</h3>
                                <br />
                                <ol>
                                    <li className="product-detail-wash-li">
                                        <img src={washClean} alt="" width="20" />
                                        <p>Machine wash up to 30C/6F</p>
                                    </li>
                                    <li className="product-detail-wash-li">
                                        <img src={washDry} alt="" width="20" />
                                        <p>Do not tumple</p>
                                    </li>
                                    <li className="product-detail-wash-li">
                                        <img src={washIron} alt="" width="20" />
                                        <p>Iron on low heat</p>
                                    </li>
                                    <li className="product-detail-wash-li">
                                        <img src={washBleach} alt="" width="20" />
                                        <p>Do not bleach</p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>

                ) : ("else")
                }
                <CustomModal />
            </div>
        )
    }
}

export default ProductDetail