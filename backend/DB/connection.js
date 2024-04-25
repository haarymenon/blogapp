const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Sreehari:sreehari@cluster0.ymnx7ec.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log('db connected')
})
.catch((error)=>{
    console.log(error)
})