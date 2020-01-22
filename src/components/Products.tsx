import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

export default class Products extends Component<{ products, handleAddToCart, handleDetail }> {
    render() {
        const { _id, name, price, availableSizes, dressType } = this.props.products;

        const productItems = this.props.products.map(product => (
            <div>
                {/* <Route exact
                    path="/shop/details"
                    render={(props) => <ProductDetail {...props} product={product}/>}
                /> */}
                {/* <Link to={`/shop/${product._id}`} > */}
                    <div className="product" key={product._id}
                    onClick={(e) => this.props.handleDetail(e, product)}>
                        <div className="product-container">
                            <img src={require(`../images/Shop/${product._id}.jpg`)} alt="Product" />
                            <div className="product-description">
                                <div>
                                    <h3 className="product-name">
                                        {product.name}
                                    </h3>
                                </div>
                                <div>
                                    <p className="product-price">
                                        €{product.price}
                                    </p>
                                    <ul className="product-rating stars">
                                        <li className="star"></li>
                                        <li className="star"></li>
                                        <li className="star"></li>
                                        <li className="star"></li>
                                        <li className="star"></li>
                                    </ul>
                                </div>
                                <div>
                                    <button onClick={(e) => this.props.handleAddToCart(e, product)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </Link> */}
            </div>

        )
        )

        return (
            <div>
                <div className="product-count" style={{ 'fontFamily': "FuturaLtBT" }}>
                    {` Showing ${this.props.products.length} products.`}
                </div>
                <div className="products">
                    {productItems}
                </div>
            </div>
        )
    }
}