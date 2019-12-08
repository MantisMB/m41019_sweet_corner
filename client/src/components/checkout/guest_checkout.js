import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createGuestOrder, getGuestOrderDetails } from '../../actions/index'
import './checkout.scss';


class GuestCheckout extends Component {

    handleGuestCheckout = async guest =>{

        const orderInfo = await this.props.createGuestOrder(guest);
        
        const redirectUrl = `/orders/guest/${orderInfo.order_Id}?email=${orderInfo.email}`;
        this.props.history.push(redirectUrl)
        // console.log("Guest Info: ", guest); 
        // console.log("Order Info: ", orderInfo); 
        setTimeout(() => {
          this.props.reset();
        }, 1500);
    
      }

      render() {
        const {handleSubmit, pristine, submitting} = this.props
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col guest-checkout'>
                        <h1 className="m-3">Guest Checkout</h1>
                        <form onSubmit={handleSubmit(this.handleGuestCheckout)} className='form_login'>
                            <div className="form-group">
                                <Field 
                                    className="first"
                                    name="firstName"
                                    component="input"
                                    type="text"
                                    placeholder="First Name"
                                    pattern="([A-Za-z ]+)"
                                    required
                                />
                            </div>
                    
                            <div className="form-group">
                                <Field
                                    className="last"
                                    name="lastName"
                                    component="input"
                                    type="text"
                                    placeholder="Last Name"
                                    pattern="([A-Za-z ]+)"
                                    required
                                />
                            </div>
                    
                            <div className="form-group">
                                <Field
                                    className="emailcheckout"
                                    name="email"
                                    component="input"
                                    type="email"
                                    placeholder="Email"
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                    required
                                />
                            </div>
                        
                            <div>
                                <button className='btn-warning' type="submit"  disabled = {pristine || submitting}>Submit Order</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
      }
    }

GuestCheckout = reduxForm({
    form: 'GuestCheckout'
})(GuestCheckout);

export default connect(null,{createGuestOrder,getGuestOrderDetails})(GuestCheckout);