import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import {ProductConsumer} from './ProductContext'



class ProductList extends Component {
    
    
    
    render() {
        
        
        return (
            <>
           
            <div className="py-5">
            <div className="container">
            <Title name="our" title="products"/>           
            {/*row for products */}
            <div className="row">
            <ProductConsumer>
            
            {(product)=>{
              console.log(product['state']['products'])
              return (product['state']['products'].length?product['state']['products'].map(product=>(<Product key={product.id} property={product}>{console.log(product)}</Product>)):null
              )
            }
        }
           
                
            
                
              
            
            </ProductConsumer>
            
            </div>
            </div>
            </div>
           
            
            </>
        )
    }
}

export default ProductList
