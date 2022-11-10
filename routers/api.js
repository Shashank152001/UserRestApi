const router = require("express").Router();

const User=require('../models/user')

router.get("/", async (req, res) => {
    try {
      const userData = await User.find();
      res.json(userData);
    } catch (error) {
      res.json({ message: error.message });
    }
  });
  
  router.post('/',async(req,res)=>{
    const{fname,lname,mobileno,email,city}=req.body;
    const userData=new User({userFirstName:fname,userLastName:lname,
        userMobile:mobileno,userEmail:email,userCity:city})
    try {
      await userData.save();
       res.status(201).json(userData)
    } catch (error) {
      res.status(400).json({message:error.message})
    }
    
  })
  
  
  router.get('/:id',async(req,res)=>{
    const id=req.params.id;
    const userdata=await User.findById(id);
    res.json(userdata)
  })
  
  router.delete('/:id',async(req,res)=>{
    const id=req.params.id;
    await User.findByIdAndDelete(id);
    res.json({message:"Successfully deleted"})
  })




module.exports=router;