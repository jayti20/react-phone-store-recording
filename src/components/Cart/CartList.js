import React from 'react'
import CartItem from './CartItem'

function CartList(props) {
    console.log(props)
    console.log(props.value.state.cart)
    return (
        <div className="container-fluid">
            {props.value.state.cart.map(cartItem=><CartItem key={cartItem.id} item={cartItem} value={props.value}></CartItem>)}
            
        </div>
    )
}

export default CartList
