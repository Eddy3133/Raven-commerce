import React from 'react'
import Grid from '@material-ui/core/Grid'
import Product from './products/Product/product'

const products = [
  { id: 1, name: 'Keyboard', description: 'Keyboards for your computer', price: '$20' },
  { id: 2, name: 'Samsun', description: 'Great Mobile phone', price: '$70' },
  { id: 3, name: 'Dell', description: 'A compact laptop', price: '$40' }
]

function Products () {
  return (
    <main>
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
