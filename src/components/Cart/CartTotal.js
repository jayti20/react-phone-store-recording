import React from 'react'
import {Link} from 'react-router-dom'
import './cartItemStyles.css'
import '../modalStyles.css'
import PayPalButton from './PayPalButton'

function CartTotal(props) {
   
    return (
        <>
          <div className="conatiner ">
          <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
          <Link to="/">
          <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={props.value.clearCart}>
          clear cart
          </button>
          </Link>
          <h5>
          <span className="text-title">
          subtotal:</span> <strong>$ {props.value.state.cartSubTotal}</strong>
          
          </h5>
          <h5>
          <span className="text-title">
          Tax:  </span> <strong>$ {props.value.state.cartTax}</strong>
        
          </h5>
          <h5>
          <span className="text-title">
          Carttotal:</span> <strong>$ {props.value.state.cartTotal}</strong>
          
          </h5>
          <PayPalButton total={props.value.state.cartTotal} clearCart={props.value.clearCart} history={props.history}></PayPalButton>
          </div>
          </div>  
          </div>
        </>
    )
}

export default CartTotal
