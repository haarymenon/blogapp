import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const[inputs,setInputs]=useState({});
    const navigate = useNavigate();

    const inputHandler = (e)=>{
        setInputs({...inputs,[e.target.name]:e.target.value});
        console.log("textfield",inputs)
    }
    const SubmitHandler=()=>{
        console.log("btn",inputs);
        axios.post("http://localhost:3008/api/login",inputs)
        .then((res)=>{
            console.log(res);
            console.log(res.data.person._id);
            alert(res.data.message);
            if(res.data.message=="loged in succesfully"){
              const userId = res.data.person._id;
              sessionStorage.setItem("id",userId)
              navigate('/view');
            }
        })
    }
  return (
    <div style={{margin:"5%"}}>
      <Typography variant='h3' fontFamily={'fantasy'} color={'purple'}>LOGIN FORM</Typography>
      <br/><br/>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12}>
            <TextField variant='outlined' label="username" name='username' onChange={inputHandler}>
            </TextField>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <TextField variant='outlined' label="password" name='password' onChange={inputHandler}>
            </TextField>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
        <Button variant='contained' color='secondary' onClick={SubmitHandler}>LOG IN</Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
        <Link to={'/sign'}>NEW USERS CLICK HERE</Link>
        </Grid>
        </Grid>
    </div>
  )
}

export default Login