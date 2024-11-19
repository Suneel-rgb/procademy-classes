import React from 'react'
import ProductList from './components/ProductList/ProductList'
import CreateProduct from './components/CreateProduct/CreateProduct'



const App = () => {
  return (
    <>
      <CreateProduct />
      <ProductList />
    </>
  )
}

export default App