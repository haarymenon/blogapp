import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Signup = () => {
    const[inputs,setInputs]=useState({});
    const inputHandler = (e)=>{
        setInputs({...inputs,[e.target.name]:e.target.value});
        console.log(inputs)
    }
    const SubmitHandler=()=>{
        console.log("btn clicked",inputs);
        axios.post("http://localhost:3008/api/post",inputs)
        .then((res)=>{
            console.log(res);
            alert(res.data.message);
        })
    }
  return (
    <div style={{margin:"8%"}}>
      <Typography variant='h3' fontFamily={'fantasy'} color={'purple'}>SIGNUP FORM</Typography>
      <br/><br/>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
            <TextField variant='outlined' label="Name" fullWidth onChange={inputHandler} name='name'>
            </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
            <TextField variant='outlined' label="Email" fullWidth onChange={inputHandler} name='email'>
            </TextField>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <TextField variant='outlined' label="Address" fullWidth multiline rows={5} onChange={inputHandler} name='address'>
            </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
            <TextField variant='outlined' label="Phone" fullWidth onChange={inputHandler} name='phone'>
            </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
            <TextField variant='outlined' label="Username" fullWidth onChange={inputHandler} name='username'>
            </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
            <TextField variant='outlined' label="Password" fullWidth onChange={inputHandler} name='password'>
            </TextField>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <Button variant='contained' color='secondary' onClick={SubmitHandler}>SUBMIT</Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <Link to={'/'}>BACK TO LOGIN</Link>
        </Grid>
      </Grid>
    </div>
  )
}

export default Signup