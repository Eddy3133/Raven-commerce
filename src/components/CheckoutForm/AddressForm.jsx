import React, {useState} from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'
import FormInput from './CustomTextField'

function AddressForm () {
    // For identifying the many countries
    const [shippingCountries, setShippingCountries] = useState([])
    //For selecting a single country
    const [shippingCountry, setShippingCountry] = useState('')
    // For listing out all the subdivision based of the country 
    const [shippingSubdivisions, setShippingSubdivisions] = useState('')
    //A single selected subdivision
    const [shippingSubdivision, setShippingSubdivision] = useState('')
    const methods = useForm()
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
             <Select value={} fullWidth onChange={}>
              <MenuItem key={} value={}> Select me</MenuItem>
             </Select>
            </Grid>

            <Grid item xs={12} s={6}>
             <InputLabel>Shipping Subdivision</InputLabel>
             <Select value={} fullWidth onChange={}>
              <MenuItem key={} value={}> Select me</MenuItem>
             </Select>
            </Grid>

            <Grid item xs={12} s={6}>
             <InputLabel>Shipping Options</InputLabel>
             <Select value={} fullWidth onChange={}>
              <MenuItem key={} value={}> Select me</MenuItem>
             </Select>
            </Grid>

          </Grid>
        </form>
      </FormProvider>
    </div>
  )
}

export default AddressForm
