import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import logo from '../.././Assets/Logo.png'
import useStyles from './styles'

function Navbar ({ totalItems }) {
  const classes = useStyles()

  return (
    <div>
      <AppBar position='fixed' className={classes.appBar} color='primary'>
        <Toolbar>
          <Typography variant='h6' className={classes.title} color='inherit'>
            <img src={logo} alt='Raven Tech' height='25px' className={classes.image} />
       Raven Tech
          </Typography>
          <div className={classes.grow} />

          <div className={classes.button}>
            <IconButton aria-label='Show cart Item' color='inherit'>
              <Badge badgeContent={totalItems} color='secondary'>
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
