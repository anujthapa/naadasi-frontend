import React, { Component } from 'react'
import '../index.css';

export default class Filter extends Component<{
    // size,
    sort, count, dressType,
    // isS,
    handleChangeDressType, handleChangeSort, handleChangeSize
}> {
    render() {
        return (
            <div className="filter">
                <div className="filter-dress">
                    <h4>Shop</h4>
                    {/* <button value="casual" onClick={this.props.handleChangeDressType}>Casual dresses</button> */}
                    {/* <a value="evening" onClick={this.props.handleChangeDressType}>Evening dresses</a> */}
                    <select
                        value={this.props.dressType}
                        onChange={this.props.handleChangeDressType}>
                            <option value="#">Select</option>
                            <option value="casual">Casual Dresses</option>
                            <option value="evening">Evening Dresses</option>
                    </select>
                    <h4>Featured</h4>
                </div>
                <div className="filter-size">
                    <h4>Filter by size</h4>
                    {/* <select
                        className="form-control"
                        value={this.props.size}
                        onChange={this.props.handleChangeSize}
                    >
                        <option value="">ALL</option>
                        <option value="xs">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                        <option value="xxl">XXL</option>
                    </select> */}
                    <div>
                        <input value="xs" type="checkbox" onChange={this.props.handleChangeSize}/>Extra Small
                        <br/>
                        <input value="s" type="checkbox" onChange={this.props.handleChangeSize}/>Small
                        <br/>
                        <input value="m" type="checkbox" onChange={this.props.handleChangeSize}/>Medium
                        <br/>
                        <input value="l" type="checkbox" onChange={this.props.handleChangeSize}/>Large
                        <br/>
                        <input value="xl" type="checkbox" onChange={this.props.handleChangeSize}/>Extra Large
                        <br/>
                        <input value="xxl" type="checkbox" onChange={this.props.handleChangeSize}/>Double Extra Large
                        <br/>
                    </div>
                    {/* <button className="filter-button">Filter</button> */}

                </div>
                <div className="filter-color">
                    <h4>Filter by color</h4>
                    <ul className="colors">
                        <li className="color pink"></li>
                        <li className="color gray"></li>
                        <li className="color yellow"></li>
                        <li className="color orange"></li>
                        <li className="color brown"></li>
                        <li className="color light-yellow"></li>
                        <li className="color green"></li>
                        <li className="color white"></li>
                        <li className="color blue"></li>
                        <li className="color light-orange"></li>
                        <li className="color sky-blue"></li>
                        <li className="color dark-green"></li>
                        <li className="color black"></li>
                        <li className="color light-blue"></li>
                        <li className="color dark-brown"></li>
                    </ul>

                    <button className="filter-button">Filter</button>
                </div>
                <div className="filter-price">
                    <h4>Filter by prices</h4>
                    <select
                        className="form-control"
                        value={this.props.sort}
                        onChange={this.props.handleChangeSort}
                    >
                        <option value="">Select</option>
                        <option value="lowestprice">lowest to highest</option>
                        <option value="highestprice">highest to lowest</option>
                    </select>

                    <button className="filter-button">Filter</button>

                </div>
            </div>
        )
    }
}