import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getActiveCart } from '../../../src/actions';
import { Link } from "react-router-dom";
import Money from '../general/money';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cart.scss';

class Cart extends Component {
    componentDidMount(){
        this.props.getActiveCart();
    }

    render = () => {
        const { cartItems, total } = this.props;
        const token = localStorage.getItem("token");
        if (cartItems == null) return false;
        // console.log('Cart Items:', this.props.cartItems);
        return (
            <div className="container">
                <div className="row">
                    <div className="col cart">
                        <h1>Cart</h1>
                    </div>
                </div>
                <div>
                <div className="col">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col "></th>
                                <th scope="col">Product</th>
                                <th scope="col">Each</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => {
                                return (
                                    <tr key={item.itemId} id="containerRow" onClick={() => this.goBackToDetail(item.productId)}>
                                    <th scope="row">
                                        <img src={item.thumbnail.url} className="h-50 rounded" alt="" />
                                    </th>
                                    <td>{item.name}</td>
                                    <td>
                                        <Money cost={item.each} />
                                    </td>
                                    <td className="quantity-div">
                                        <div className="d-inline-block ml-3 center">
                                            <div className="d-block arrow mb-2" id="increment" onClick={() => this.incrementQTY(item.itemId, 1)}>
                                                <i className="fas fa-caret-up p-1"></i>
                                            </div>
                                            <div className="d-inline-block quantity">{item.quantity}</div>
                                            <div className="d-block arrow mb-2" id="decrement" onClick={item.quantity > 1 ? () => this.decrementQTY(item.itemId, -1) : () => {}}>
                                                {
                                                <i className="fas fa-caret-down p-1"></i>
                                                }
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <Money cost={item.total} />
                                    </td>
                                    <td>
                                        <button className="btn-danger" onClick={() => this.itemDeleteFromCart(item.itemId)}>
                                            Delete
                                        </button>
                                    </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th colSpan="2">
                                    <h3>Cart Total :</h3>
                                </th>
                                <th scope="col">
                                    <h4 className="item-total">{total.items}</h4>
                                </th>
                                <th scope="2">
                                    <h4>
                                    <Money cost={total.cost} />
                                    </h4>
                                </th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        </table>  
                        <div className="center">
                        <Link to={token ? "/checkout/userCheckout" : "/checkout/guest"} className="guest-checkout-link">
                            <button className="w-25 mh-100 m-4 p-3 bg-warning" onClick={this.userGuestCheckout}>
                                {token ? "Check Out" : "Checkout As Guest"}
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
       cartItems: state.cart.items,
       total: state.cart.total,
    };
 }

export default connect(mapStateToProps, {
    getActiveCart: getActiveCart,
})(Cart);