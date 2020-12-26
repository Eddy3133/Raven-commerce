import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import { Products, Navbar, Cart } from './components'

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
    const item = await commerce.cart.add(productId, productQuantity)
    setCart(item.cart)
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])

  return (
    <div>
      <Navbar totalItems={cart.total_items} />
      {/* <Products products={products} onAddToCart={addToCart} /> */}
      <Cart cart={cart} />
    </div>
  )
}

export default App
