import React, { Component } from 'react'
import {ProductConsumer} from '../ProductContext'
import Title from '../Title'
import CartColumns from './CartColumns.js'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import CartTotal from './CartTotal'

class Cart extends Component {
    render() {
        return (

            <section>
            <ProductConsumer>
            {(value)=>{
            const {cart}=(value['state'])
            console.log({cart})
            return(cart.length>0?(<>
            <Title name="your" title="cart">
            </Title>
            <CartColumns/>
            {/*we are passing down entire product context */}
            <CartList value={value}/>
            <CartTotal value={value} history={this.props.history}/>
            </>):<EmptyCart/>) 
            }}
            </ProductConsumer>
            
            
            </section>
            
        )
    }
}

export default Cart
