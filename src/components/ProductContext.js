import React from 'react'

const ProductContext=React.createContext();
//Provider component
const ProductProvider=ProductContext.Provider;
//Consumer component
const ProductConsumer=ProductContext.Consumer;
export {ProductProvider,ProductConsumer}