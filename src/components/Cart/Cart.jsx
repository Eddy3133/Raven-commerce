import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import logo from '../../Assets/ajax-loader.gif'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import CartItem from './CartItem/CartItem'

function Cart ({ cart, updateCardQuantity, removeFromCart, emptyCart }) {
  const classes = useStyles()

  const EmptyCard = () => (
    <Typography variant='subtitle1'>You have no Items in your Cart,<Link to='/products' className={classes.link}>Start adding some</Link>
    </Typography>
  )

  const FilledCart = () => (
    <div>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              updateCardQuantity={updateCardQuantity}
              removeFromCart={removeFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant='h4'>
     Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
      </div>
      <div>
        <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary' onClick={emptyCart}> Empty Cart </Button>
        <Button className={classes.checkoutButton} size='large' type='button' variant='contained' color='primary'> Checkout</Button>
      </div>
    </div>
  )

  if (!cart.line_items) return <img src={logo} alt='loading gif' />

  return (
    <div>
      <Container>
        <div className={classes.toolbar} />
        <Typography className={classes.title} variant='h3'>
         Your Shopping Cart
        </Typography>
        {!cart.line_items.length ? <EmptyCard /> : <FilledCart />}
      </Container>
    </div>
  )
}

export default Cart
