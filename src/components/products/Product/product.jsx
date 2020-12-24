import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

function Product ({ product }) {
  return (

    <Card>

      <CardMedia title={product.name} description={product.description} />
      <CardContent>
        <div>
          <Typography variant='h5' gutterbottom>
            {product.name}
          </Typography>

          <Typography variant='h5'>
            {product.price}
          </Typography>
        </div>

        <Typography variant='h2' color='textSecondary'>
          {product.description}
        </Typography>

      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label='Add to Cart'>
          <AddShoppingCart />
        </IconButton>
      </CardActions>

    </Card>

  )
}

export default Product
