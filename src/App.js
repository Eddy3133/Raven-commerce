import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import { Products, Navbar } from './components'

function App () {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()

    setProducts(data)
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve()
    setCart(cart)
  }

  const addToCart = async (productId, productQuantity) => {
    const addCart = await commerce.cart.add(productId, productQuantity)
    setCart(addCart.cart)
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])
  console.log(cart)

  return (
    <div>
      <Products products={products} onAddToCart={addToCart} />
      <Navbar />
    </div>
  )
}

export default App
