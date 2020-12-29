import React, { useState, useEffect } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'
import FormInput from './CustomTextField'
import { commerce } from '../../lib/commerce'

function AddressForm ({ checkoutToken }) {
  // For identifying the many countries
  const [shippingCountries, setShippingCountries] = useState([])
  // For selecting a single country
  const [shippingCountry, setShippingCountry] = useState('')
  // For listing out all the subdivision based of the country
  const [shippingSubdivisions, setShippingSubdivisions] = useState([])
  // A single selected subdivision
  const [shippingSubdivision, setShippingSubdivision] = useState('')

  const [shippingOptions, setShippingOptions] = useState([])

  const [shippingOption, setShippingOption] = useState('')

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }))

  const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name }))

  const methods = useForm()

  // Fetching the countries needed in the form from an API
  const fetchCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListCountri(checkoutTokenId)
    setShippingCountries(countries)
    setShippingCountry(Object.keys(countries)[0])
  }

  const fetchSubdivision = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeSubdivisions(countryCode)
    setShippingSubdivisions(subdivisions)
    setShippingSubdivision(Object.keys(subdivisions)[0])
  }

  useEffect(() => {
    fetchCountries(checkoutToken.id)
  }, [])

  useEffect(() => {
    if (shippingCountry) {
      fetchSubdivision(shippingCountry)
    }
  }, [shippingCountry])

  return (
    <div>
      <Typography variant='h6' gutterBottom='true'>Shipping Address</Typography>
      <FormProvider {...methods}>
        <form onSubmit=''>
          <Grid container spacing={3}>
            <FormInput required name='firstName' label='First Name' />
            <FormInput required name='lastName' label='Last Name' />
            <FormInput required name='address1' label='Address' />
            <FormInput required name='email' label='Email' />
            <FormInput required name='city' label='City' />
            <FormInput required name='postal/zip' label='Postal/Zip code' />
            <Grid item xs={12} s={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                {countries.map((country) => (
                  <MenuItem key={country.id} value={country.id}>{countries.label}</MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={12} s={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                {subdivisions.map((subdivision) => (
                  <MenuItem key={subdivision.id} value={subdivisions.id}>{subdivision.label}</MenuItem>
                ))}
              </Select>
            </Grid>

            {/* <Grid item xs={12} s={6}>
             <InputLabel>Shipping Options</InputLabel>
             <Select value={} fullWidth onChange={}>
              <MenuItem key={} value={}> Select me</MenuItem>
             </Select>
            </Grid> */}

          </Grid>
        </form>
      </FormProvider>
    </div>
  )
}

export default AddressForm
