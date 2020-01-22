import React, { Component, useState } from 'react';
import Products from './components/Products';
import Filter from './components/Filter';
import Basket from './components/Basket';
import ProductDetail from './components/ProductDetail';
import './index.css';
import { Modal, Button } from 'react-bootstrap';

class App extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      value: "",
      products: [],
      filteredProducts: [],
      productDetail: [],
      size: "",
      sort: "",
      isS: false,
      isM: false,
      dressType: "",
      cartItems: []
    }; // A state component to store the result from database query
    this.toggle = this.toggle.bind(this);
    this.handleChangeDressType = this.handleChangeDressType.bind(this);
    this.handleChangeSort = this.handleChangeSort.bind(this);
    this.handleChangeSize = this.handleChangeSize.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleDetail = this.handleDetail.bind(this);
  }

  toggle() {
    this.setState({
      show: !this.state.show
    });
  }

  callAPI() {
    // Using the backend server address for calling the API
    fetch("http://localhost:8000/nadassi")
      .then(res => res.json())
      .then(data =>
        // console.log(products);
        this.setState({
          products: data,
          filteredProducts: data
        }) // Stores the result to products component
      );
  }

  addProduct = (e) => {
    e.preventDefault();

    try {
      const data = {
        name: "Adalynn Long Dress",
        type: "Crafted drapes, V-shaped back, Bra cups"
      }
      fetch("http://localhost:8000/nadassi", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(res => {
          console.log(res);
          return res.json()
        })
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    // fetching data from localstorage to retain when refreshed
    if (localStorage.getItem('cartItems')) {
      this.setState({ cartItems: JSON.parse(localStorage.getItem('cartItems')) });
    }
    this.callAPI();

  }

  listProducts = () => {
    this.setState(state => {
      if (state.sort !== '') {
        state.products.sort((a, b) =>
          (state.sort === 'lowestprice'
            ? ((a.price > b.price) ? 1 : -1)
            : ((a.price < b.price) ? 1 : -1)));
      } else {
        state.products.sort((a, b) => (a.id > b.id) ? 1 : -1);
      }
      if (state.size !== '') {
        return { filteredProducts: state.products.filter(a => a.availableSizes.indexOf(state.size.toUpperCase()) >= 0) };
      }
      if (state.dressType !== '') {
        return { filteredProducts: state.products.filter(a => a.DressType.indexOf(state.dressType.toUpperCase()) >= 0) };
      }
      return { filteredProducts: state.products };
    })
  }

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  }
  handleDetail = (e, product) => {

    this.setState(() => {
      return {
        productDetail: product,
        show: !this.state.show
      }
    })
  }

  handleAddToCart = (e, product) => {
    this.setState(state => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;

      cartItems.forEach(cp => {
        if (cp.id === product.id) {
          cp.count += 1;
          productAlreadyInCart = true;
        }
      });

      if (!productAlreadyInCart) {
        cartItems.push({ ...product, count: 1 });
      }
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { cartItems: cartItems };
    });
  }

  handleRemoveFromCart = (e, product) => {
    this.setState(state => {
      const cartItems = state.cartItems.filter(a => a.id !== product.id);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { cartItems: cartItems };
    })
  }

  handleChangeSort = (e) => {
    this.setState({ sort: e.target.value });
    this.listProducts();
  }
  handleChangeSize = (e) => {
    this.setState({ size: e.target.value });
    this.listProducts();
  }
  handleChangeDressType = (e) => {
    this.setState({ dressType: e.target.value });
    this.listProducts();
  }

  render() {
    return (
      <div className="App">
        {this.state.show ?
          <div className="wrapper-shop">
            <a className="button-close-detail" onClick={this.toggle}></a>
            <ProductDetail
              productDetail={this.state.productDetail} />
          </div> :
          <div className="wrapper-shop wrapper-shop-detail">
            <div className="filter">
              <Filter
                // isS={this.state.isS}
                // size={this.state.size}
                sort={this.state.sort}
                dressType={this.state.dressType}
                count={this.state.filteredProducts.length}
                handleChangeDressType={this.handleChangeDressType}
                handleChangeSize={this.handleChangeSize}
                handleChangeSort={this.handleChangeSort}
              />
            </div>
            <div className="collection">
              <h1>NEW COLLECTION 2019</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting
            </p>
            </div>
            <div className="items">
              <Basket
                cartItems={this.state.cartItems}
                handleRemoveFromCart={this.handleRemoveFromCart} />
              <Products
                products={this.state.filteredProducts}
                handleDetail={this.handleDetail}
                handleAddToCart={this.handleAddToCart} />
            </div>
          </div>
        }
      </div>
    );
  }
}

export default App;
