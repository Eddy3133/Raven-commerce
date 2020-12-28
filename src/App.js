import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import { Products, Navbar, Cart, Home } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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
    const { cart } = await commerce.cart.add(productId, productQuantity)
    setCart(cart)
  }

  const updateCardQuantity = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity })
    setCart(cart)
    console.log(cart)
  }

  const removeFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId)
    setCart(cart)
  }

  const emptyCart = async (productId, productQuantity) => {
    const { cart } = await commerce.cart.empty()
    setCart(cart)
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])

  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/products'>
            <Products products={products} onAddToCart={addToCart} />
          </Route>

          <Route exact path='/cart'>
            <Cart
              cart={cart}
              updateCardQuantity={updateCardQuantity}
              removeFromCart={removeFromCart}
              emptyCart={emptyCart}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
