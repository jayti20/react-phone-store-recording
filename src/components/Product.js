 import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductConsumer} from './ProductContext'
import '../App.css'
import './productWrapper.css'
import PropTypes from 'prop-types'
//import PropTypesexample from './PropTypesexample'

class Product extends Component {

    render() {
        console.log(this.props.property)
        const {id,title,img,price,inCart}=this.props.property
        console.log(inCart)
        return (
            <ProductWrapper className="col-9 mx-auto col-md6 col-lg-3 my-3 parent">

           <ProductConsumer>
           {(value)=>{
               console.log(value)
           return( <div className="card">
            
            <div className="img-container p-5" onClick={()=>value.handleDetail(id)}>
            <Link to='/details'>
            <img src={img} alt="product" className="card-img-top" ></img>
            </Link>
            {/*agar inCart ki value true h matlab inCart me h item h to disable hoga button i.e true */}
            <button className=
            "cart-btn"
             disabled={inCart?true:false} 
             onClick={()=>{value.addToCart(id)
             value.openModal(id) }}
                >
            {inCart?
                (<p className="text-capitalize mb-0 " disabled>in Cart</p>
                ):(
                    <i className="fas fa-cart-plus "/>
                )}
            
            </button>
        
            </div>
            {/*right outside image container div -the one which has all our images */}
            {/*card-footer */}
            <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">
            {
                title
            }
            </p>
            <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">$</span>
            {price}
            </h5>
            </div>
            </div>

            ) }
        }
           
            </ProductConsumer>
            </ProductWrapper>
        )
    }
}
Product.propTypes={
    property:PropTypes.shape(
        {
            id:PropTypes.number,
    title:PropTypes.string,
    img:PropTypes.string,
    price:PropTypes.number,
    inCart:PropTypes.bool
        }
    ).isRequired
    
}
const ProductWrapper=styled.div`
.cart{
    border-color:transparent;
    transition: all 1s linear;
}
.cart-footer{
    background: transparent;
    border-top:transparent;
    transition: all 1s linear;
}
&:hover{
.cart{ 
    border:0.04rem solid rgb(0,0,0,0.2);
    box-shadow:2px 2px 5px 0px rgba(0,0,0,0.02)
}
.cart-footer{
    background:rgba(247,247,247);

}
}
.img-container{
    position:relative;
    overflow:hidden;

}
.cart-img-top{
    transition:all 1s linear
}
.img-container:hover .cart-img-top{
 transform:scale(1.2)
}
.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem;
    background:#009ffd;
    border:none;
    color:#f3f3f3;
    font-size:1.4rem;
    border-radius:0.5rem 0 0 0;
    transform:translate(100%,100%);
    
}
.img-container:hover .cart-btn{
    transform:translate(0,0)
}
.cart-btn:hover{
    color:#2a2a72;
    cursor:pointer;
}
`
export default Product
