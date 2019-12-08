import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItemToCart, clearProductDetails, getProductDetails } from '../../actions/';
import Money from '../general/money';
import './products.scss';
import "bootstrap/dist/css/bootstrap.css";

class ProductDetails extends Component {
    constructor(props) {
        super(props);
     }
     state = {
        quantity: 1,
     };

     componentDidMount(){
        const { getProductDetails, match: { params } } = this.props;
    
        getProductDetails(params.product_id);
    }

    componentWillUnmount(){
        this.props.clearProductDetails();
    // console.log('ProductDetails component about to unmount')
    }

    incrementQuantity = () => {
        const { quantity } = this.state;
        this.setState({
           quantity: quantity + 1,
        });
     };

     decrementQuantity = () => {
        const { quantity } = this.state;
        if (quantity == 1) return quantity;
        this.setState({
           quantity: quantity - 1,
        });
     };

     async handleAddToCart(){
        const { id } = this.props.details;
        const { quantity } = this.state;

        await this.props.addItemToCart(id, quantity);

        this.props.history.push('/cart');
    
        // console.log(`Add ${quantity} items to cart, with product ID: ${id}`);
    }

     render() {
        const { details } = this.props;
        if (details == null) {
           return <h1>Loading product</h1>;
        }
        return (
            <div className="row">
                <div className="product-details col">
                    
                    <img src={details.image.url} className='m-3 img-thumbnail' alt={details.caption}/>
                </div>
                <div className="product-details col">
                    <div className="row">
                        <div className="col">
                            <h2 className="m-3">{details.name}</h2>
                            <p className="m-3 caption">{details.caption}</p>
                            <h3 className="m-3">Description:</h3>
                            <p className="m-3">{details.description}</p>
                            <h2 className="m-3 float-right">
                                Price: <Money cost={details.cost} />
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h4 className="m-3">Quantity:</h4>
                            <div className="row product-quantity mb-3 float-right">
                                <div className="quantity-controls col">
                                    <button className="btn btn-quantity" onClick={this.decrementQuantity.bind(this)}>-</button>
                                    <span className="quantity"> {this.state.quantity} </span>
                                    <button className="btn btn-quantity" onClick={this.incrementQuantity.bind(this)}>+</button>
                                </div>
                                <button className="btn cart" onClick={this.handleAddToCart.bind(this)}>Add To Cart</button>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            
        )};

}

function mapStateToProps(state) {
    return {
       details: state.products.details,
    };
 }

export default connect (
    mapStateToProps,
    {
        addItemToCart: addItemToCart,
        clearProductDetails: clearProductDetails,
        getProductDetails: getProductDetails,
      
    }
) (ProductDetails);