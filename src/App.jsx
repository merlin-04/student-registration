import { useState } from 'react'
import './App.css'
import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField } from '@mui/material'
import Register from './Register'

function App() {



  return (
    <>
    <Register/>
      {/* <div style={{ width: '100%', minHeight: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>
        <div style={{ width: '600px' }} className='bg-light rounded p-5'>
          <h1>Student Registration Form</h1>
          <p>Fill the form Correctly!!</p>
          <form className='mt-5'>
            <div className='mb-3'>
              <TextField className='w-100' name='sname' id="outlined-name" label="Name" variant="outlined" />
            </div>
            <div className='mb-3'>
              <TextField className='w-100' name='address' id="outlined-address" label="Address" variant="outlined" />
            </div>
            <div className='mb-3'>
              <TextField className='w-100' name='mobile' id="outlined-mobile" label="Mobile" variant="outlined" />
            </div>
            <div className='mb-3'>
              <TextField className='w-100' name='email' id="outlined-email" label="Email" variant="outlined" />
            </div>
            <div className='mb-3'>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </div>
            <div className='mb-3'>
              <TextField className='w-100' name='dob' id="outlined-dob" label="Date of Birth" variant="outlined" />
            </div>
            <div className='mb-3'>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Course</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={'Course'}
                  label="Course"
                // onChange={handleChange}
                >
                  <MenuItem value={'bio'}>Biology</MenuItem>
                  <MenuItem value={'comp'}>Computer Science</MenuItem>
                  <MenuItem value={'comm'}>Commerce</MenuItem>
                  <MenuItem value={'hum'}>Humanities</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Stack direction="row" spacing={2}>
              <Button type='submit' variant="contained" className='bg-success' style={{ width: '50%', height: '70px' }}>REGISTER</Button>
              <Button onClick={handleReset} style={{ width: '50%', height: '70px' }} className='bg-danger text-light' variant="outlined">CANCEL</Button>
            </Stack>
          </form>
        </div>
      </div> */}
    </>
  )
}

export default App
