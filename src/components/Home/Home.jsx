import React from 'react'
import useStyles from './styles'
import {Link} from 'react-router-dom'

function Home () {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <h1>Welcome to Raven technology</h1>
      <Link to='/products'>View Products</Link>
    </div>
  )
}

export default Home
