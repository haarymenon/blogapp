const express = require('express');
const router = express.Router();
const post = require('../model/post')
router.use(express.json());

router.post('/addblog',async(req,res)=>{
    const blog = req.body;
    try{
        const data = post(blog).save()
        res.status(200).json({message:"blog added",data})
    }
    catch(error){
        console.log(error)
        res.json({message:"unable to add blog"})
    }
})
router.get('/viewall',async(req,res)=>{
    try{
        const data = await post.find();
        res.status(200).json(data)
    }
    catch(error){
        console.log(error)
    }
})



//delete
router.delete('/remove/:id',async(req,res)=>{
try {
    const dat=await post.findByIdAndDelete(req.params.id);
    res.status(200).send({message:"Blog deleted"})
} catch (error) {
    res.status(404).send({message:"No blog found"});
}
})

//update
router.put('/update/:id',async(req,res)=>{
    try {
        const data=await post.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).send({message:"Blog updated"})
    } catch (error) {
        res.status(404)({message:"No blog found"})
    }
})







module.exports=router;