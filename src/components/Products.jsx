import React from 'react'
import Grid from '@material-ui/core/Grid'
import Product from './products/Product/product'
import useStyles from './products/styles'

const products = [
  { id: 1, name: 'Keyboard', description: 'Keyboards for your computer', price: '$20', image: 'https://snpi.dell.com/snp/images2/300/en-ca~AA894065/AA894065.jpg' },
  { id: 2, name: 'Samsung', description: 'Great Mobile phone', price: '$70', image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s10-1.jpg' },
  { id: 3, name: 'Dell', description: 'A compact laptop', price: '$40', image: 'https://c.zmags.com/assets/images/5ed0ccc77826495766ba1438_480x320.png' }
]

function Products () {
  const classes = useStyles()
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify='center' spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products
