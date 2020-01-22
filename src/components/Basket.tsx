import React, { Component } from 'react';
import '../index.css';

export default class Basket extends Component<{ cartItems, handleRemoveFromCart}> {
    render() {
        const { cartItems } = this.props;

        return (
            <div className="basket" style={{'fontFamily': "FuturaMdBT"}}>

                {cartItems.length === 0
                    ? "Basket is empty" :
                    <div>You have {cartItems.length} items in the basket. <hr /></div>
                }
                {cartItems.length > 0 &&
                    <div>
                        <ul style={{ marginLeft: -25 }}>
                            {cartItems.map(item => (
                                <li key={item.id}>
                                    <b>{item.name}</b><br/>
                                    x {item.count}
                                    <p>{item.price}</p>
                                    <button className="filter-button"
                                        onClick={(e) => this.props.handleRemoveFromCart(e, item)}>X</button>
                                    <br />
                                </li>))
                            }
                        </ul>
                        Total: {cartItems.reduce((a, c) => a + c.price*c.count, 0)}
                    </div>
                }
                
            </div>
        )
    }
}