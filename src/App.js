import React,{Component} from 'react';

  //in node modules
import './App.css';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {ProductProvider} from './components/ProductContext'
import { storeProducts, detailProduct } from './data';
//import PropTypesexample from './components/PropTypesexample';
import Modal from './components/Modal'
/*for making sure that the original store products is getting altered when a change in made to the state object*/
let clonedStoreProducts=JSON.parse(JSON.stringify(storeProducts));; 
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       products:clonedStoreProducts,
       detailProduct:detailProduct,
       cart:[],
       modalOpen:false,
       modalProduct:detailProduct,
       cartSubTotal:0,
       cartTax:0,
       cartTotal:0
    }
  }
  getItem=(id)=>{
   return this.state.products.find(item=>item.id===id);
  }
/*componentDidMount(){
  this.storeProducts();
  }
  storeProducts=()=>{
    let tempProducts=[];
    storeProducts.map(storeItem=>{
      let singleItem={...storeItem}
      tempProducts=[...tempProducts,singleItem]
    })
    this.setState({
      products:storeProducts
    })
  }*/
  //this method is used in product.js whenever we are clicking the image, we are directed to details page link is also present below
  handleDetails=(id)=>{
      const product=this.getItem(id);
      //returns the object i.e, product with matching id
      console.log('in handle details',product)
      this.setState({
        detailProduct:product
      })
   
}
addToCart=(id)=>{
    let tempProducts=this.state.products;
    console.log('in add to cart',tempProducts);
    //I didn't really get as why to use index
    const index=tempProducts.indexOf(this.getItem(id))
    //console.log('in add to cart',index)
    const product=tempProducts[index];
    console.log('prouct in add to cart',product)
    product.inCart=true;
    product.count=1;
    const price=product.price;
    product.total=price;
    this.setState({
      products:tempProducts,
      cart:[...this.state.cart,product]
    },()=>{//the moment we add the items to the cart we can run addTotal
      this.addTotal();
     })
}
/*for showing that the original store products is getting altered when a change in made to the state object.*/
/*tester=()=>{
  console.log("state products",this.state.products[0].inCart);
  console.log('Store products',storeProducts[0].inCart);
  console.log([this.state.products])

  const tempProducts=this.state.products
  tempProducts[0].inCart=true
  this.setState({products:tempProducts}
    
  ,()=>{
    console.log("state products",this.state.products[0].inCart);
  console.log('Store products',storeProducts[0].inCart);
  })
}*/

openModal=(id)=>{
  const product=this.getItem(id);
  this.setState(
    {modalProduct:product,
    modalOpen:true}

    
  )
}
closeModal=()=>{
this.setState({
  modalOpen:false
})
}


increment=(id)=>{
 let tempCart=this.state.cart

 console.log('in cart', tempCart)
 const index=tempCart.indexOf(this.getItem(id))
 console.log(index)
 const product=tempCart[index]
 //on changing the count, price changes
 product.count+=1;
 product.total=product.count*product.price
 this.setState({
   cart:tempCart
 },()=>{this.addTotal()})

}
decrement=(id)=>{
  console.log('this is a decrement method')
  let tempCart=this.state.cart
  const index=tempCart.indexOf(this.getItem(id))
  const product=tempCart[index]
  product.count-=1
  if(product.count===0){
    this.removeItem(id)
  }
  else
  {
    product.total=product.count*product.price
    this.setState({
      cart:tempCart,



    },()=>{
      this.addTotal()
    })
  }
   
  
  
}
removeItem=(id)=>{
  let tempProducts=[...this.state.products]
  let tempCart=[...this.state.cart] 
  //we filter the elements in the cart and return only those elements which do not match the id maney ki sirf wo elements rahenge cart me jinko delete ni kiya gya h
  tempCart=tempCart.filter(item=>item.id!==id)
  //returns the actual product of the product in tempProducts array
 const index=tempProducts.indexOf(this.getItem(id))
 //exact product to be removed
 let removeProduct=tempProducts[index]
 removeProduct.count=0;
 removeProduct.inCart=false;
 removeProduct.total=0;


  this.setState({
    cart:tempCart,
    products:tempProducts
  },()=>{
    this.addTotal();
  })

}
clearCart=()=>{
  let items=false
  storeProducts.map(item=>{return(item.inCart=false)})
   
  this.setState({
  
    
    cart:[],
    cartSubTotal:0,
    cartTax:0,
    cartTotal:0,
    products:storeProducts
    

  },)
  
}
addTotal=()=>{
  let subTotal=0; 
  this.state.cart.map(item=>(subTotal+=item.total));
 
  //we assume that the tax is 10% of cp
  const tempTax=subTotal*0.1 ;
 //now the tax in decimal can be a very nasty number, so we xonvert it into 2 decimal places tak wala number but the problem with toFixed() is that it returns the string so first use parseFloat
  const tax=parseFloat(tempTax.toFixed(2));
  const total=subTotal+tax;
  
  this.setState(
    {
      cartSubTotal:subTotal,
      cartTax:tax,
      cartTotal:total
    }
  )
}
  render()
  {
  
    console.log('yahi dekhna hai',this.state)
    return (
      <>
      {/*<PropTypesexample name={1}/>*/}
     <ProductProvider value={{state:this.state, handleDetail:this.handleDetails,addToCart: this.addToCart,openModal:this.openModal,closeModal:this.closeModal,increment:this.increment, decrement:this.decrement,removeItem:this.removeItem,clearCart:this.clearCart}}>
     
     {/*<button onClick={this.tester}>Test me</button>*/}
     <Router>
     <Navbar/>
     <Switch>
     <Route path='/' component={ProductList} exact/>
     <Route path='/details' component={Details}/>
     <Route path='/cart' component={Cart}/>
     <Route component={Default}/> 
     
    {/*if the router cannot match the path then default component is displayed */}
     </Switch>
     {/*modal component is outside the switch because we are not gonna do any routing to it, in fact we are only gonna display once the property and the context when state is set to true */}
    <Modal/>
     </Router>
     
     
    </ProductProvider>
     
      </>
    )
  }
  }
  


export default App;
