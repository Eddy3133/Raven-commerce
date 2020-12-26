import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'

function Product ({ product, addToCart }) {
  const classes = useStyles()

  return (

    <Card className={classes.root}>

      <CardMedia className={classes.media} title={product.name} image={product.media.source} description={product.description} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant='h5' gutterbottom='true'>
            {product.name}
          </Typography>

          <Typography variant='h5'>
            {product.price.formatted_with_symbol}
          </Typography>
        </div>

        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant='body2' color='textSecondary' />

      </CardContent>

      <CardActions disableSpacing className={classes.CardActions}>
        <IconButton aria-label='Add to Cart' onClick={() => addToCart(product.id)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>

    </Card>
  )
}

export default Product
