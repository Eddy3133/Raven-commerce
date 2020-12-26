import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'

function Cart ({ cart }) {
  const isEmpty = !cart.line_items.length

  const EmptyCard = () => (
    <Typography variant='subtitle'>You have no Items in your Cart, Start adding some </Typography>
  )

  const FilledCart = () => (
    <div>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <div>{item.name}</div>
          </Grid>
        ))}
      </Grid>
      <div>
        <Typography variant='h4'>
     subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
      </div>
      <div>
        <Button size='large' type='button' variant='conained' color='secondary'> Empty </Button>
        <Button />
      </div>
    </div>
  )

  return (
    <div>
      <Container>
        <div />
        <Typography variant='h3'>
         Your Shopping Cart
        </Typography>
        {isEmpty ? <EmptyCard /> : <FilledCart />}
      </Container>
    </div>
  )
}

export default Cart
