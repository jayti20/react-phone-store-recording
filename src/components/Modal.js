import React, { Component } from 'react'
import {ProductConsumer} from './ProductContext'
import './stylingNav.css'
import './modalStyles.css'
import {Link} from 'react-router-dom'

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
            {(value)=>{
             const {img,title,price}=value['state']['modalProduct']
               return(value['state']['modalOpen']?(
                <div className='modalSt'>
                <div className='container'>
                <div className='row'>
                <div id="modal" className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize'>
              
                <h5 className="py-1">item added to the cart</h5>
                
               
                <img src={img} className='img-fluid' alt="product"></img>
                <h5>{title}</h5>
                <h5 className="text-muted">price: {price}</h5>
                <Link to='/'>
                <button className='Button' onClick={value.closeModal}>Continue shopping</button>
                </Link>
                <Link to='/cart'>
                <div>
                <button className='Button' onClick={value.closeModal}>go to cart</button>
                </div>
                
                </Link>
                </div>
                </div>
                </div>
                </div>):null)
            }}
            </ProductConsumer>
        )
    }
}

export default Modal
