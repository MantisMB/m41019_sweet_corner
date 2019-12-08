import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getCartTotals, getActiveCart } from '../../actions/'
import { connect } from 'react-redux'


class CartWidget extends Component {

    componentDidMount(){
     this.props.getCartTotals()
    }
  
    render() {
      const {cartTotal} = this.props;
      
      let itemCount = 0;
      if(cartTotal){
        itemCount = cartTotal.items
      }
      // console.log('Cart Widget Props:', this.props.cartTotal);
      return (
            <li className="menuList nav-item nav-link">
              <Link to="/cart" className="link" title="Shopping Cart" >
                <i className="material-icons">shopping_cart</i>
                <span className="cart-item-count align-middle">{itemCount === 0 ? "0" : itemCount}</span>
            </Link>
            </li>
      )
    }
  }
  
  function mapStateToProps(state){
  
    return{
      cartTotal:state.cart.total
    }
  }
  export default connect(mapStateToProps,
    {
        getCartTotals : getCartTotals,
        getActiveCart : getActiveCart,
    })(CartWidget);