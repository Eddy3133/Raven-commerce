import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'

function Product ({ product }) {
  const classes = useStyles()

  return (

    <Card className={classes.root}>

      <CardMedia className={classes.media} title={product.name} image={product.image} description={product.description} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant='h5' gutterbottom>
            {product.name}
          </Typography>

          <Typography variant='h5'>
            {product.price}
          </Typography>
        </div>

        <Typography variant='body2' color='textSecondary'>
          {product.description}
        </Typography>

      </CardContent>

      <CardActions disableSpacing className={classes.CardActions}>
        <IconButton aria-label='Add to Cart'>
          <AddShoppingCart />
        </IconButton>
      </CardActions>

    </Card>
  )
}

export default Product
