import { Button, Card, CardActions, CardContent, Grid, TextField, Typography, alertTitleClasses } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

const AddBlog = ({props,update}) => {
  var location = useLocation();
  console.log("location:",location.state)
  var[post,setPost]=useState({title:'',post:'',url:''});

  const navigate=useNavigate()

  useEffect(()=>{
 if(location.state!=null){
  setPost({...post,title:location.state.val.title,
                   post:location.state.val.post,
                  url:location.state.val.url})
 }else{
  setPost({...post,title:'',post:'',url:''})
 }
  },[])  

  const inputHandler = (e)=>{
    setPost({...post,[e.target.name]:e.target.value})
    console.log(post)

  }
  const addPost = ()=>{
   if(location.state!=null){
    axios.put('http://localhost:3008/api/update/'+location.state.val._id,post)
    .then((res)=>{
      if(res.data.message=="Blog updated"){
      alert(res.data.message)
    navigate('/view')
      }else{
        alert('User not found')
      }
    })
   }else{
    console.log("btn",post)
    axios.post("http://localhost:3008/api/addblog",post)
    .then((res)=>{
      alert(res.data.message)
      navigate('/view')
    })
    .catch((err)=>{
      console.log(err)
    })
   }
  }
  return (
    <div style={{margin:'10%'}}>
      <Typography variant='h3' style={{color:'ActiveBorder'}}>ADD BLOG</Typography>
      <br/>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12}>
        <TextField variant='outlined' label='post title' value={post.title} fullWidth onChange={inputHandler} name='title'></TextField>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <TextField variant='outlined' label='type a post' value={post.post} fullWidth multiline minRows={4} onChange={inputHandler} name='post'></TextField>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <TextField variant='outlined' label='image url' value={post.url} fullWidth onChange={inputHandler} name='url'></TextField>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <button variant='contained' color='primary' onClick={addPost}>GO</button>
      </Grid>
      </Grid>
    </div>
  )
}

export default AddBlog
