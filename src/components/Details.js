import React, { Component } from 'react'
import {ProductConsumer} from './ProductContext'
import {Link} from 'react-router-dom'
import './stylingNav.css'

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
            {
                (product)=>{
                    console.log("from details",product)
                    console.log(product['state']['detailProduct'])
                    return(
                        <div className="container py-5">
                        {/*title */}
                        <div className="row">
                        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                        <h1>{product['state']['detailProduct'].title}</h1>
                        </div>
                        </div>
                        {/*end title*/}
                        {/*product-info */}
                        <div className="row">
                        {/*product-image */}
                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <img src={product['state']['detailProduct'].img} className="img-fluid" alt="product"/>
                        </div>
                        {/*product-text */}
                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <h1>model:{product['state']['detailProduct'].title}</h1>
                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                        made by: <span className="text-uppercase"> {product['state']['detailProduct'].company}</span>
                        </h4>
                        <h4 className="text-blue">
                        <strong>
                        price: <span>{product['state']['detailProduct'].price}
                        </span>
                        </strong>
                        </h4>
                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                        some info about the product
                        </p>
                        <p className="text-muted lead">{product['state']['detailProduct'].info}</p>
                        {/*button */}
                        <div>
                        <Link to='/'>
                        <button className="Button">
                        back to products
                        </button>
                        </Link>
                        {/*if in cart is true, disable the button*/}
                        {/*we define onClick as an arrow function here because we want to pass a parameter from child component to parent component */}
                        <button className="Button" disabled={product['state']['detailProduct'].inCart?true:false}
                         onClick={
                             ()=>
                             {product.addToCart(product['state']['detailProduct'].id)
                              product.openModal(product['state']['detailProduct'].id)}
                            }
                            >
                        {/*when add to cart is clicked a modal pops up with image of product and continue shopping which redirects to homepage and a go to cart button which directs us to /cart */}
                        {product['state']['detailProduct'].inCart?"in Cart":"add to cart"}
                        </button>
                        
                        </div>
                        </div>
                        </div>
                        </div>
                   
                    )
             
                    

                }
            }
            
            </ProductConsumer>
              
            
        )
    }
}

export default Details
