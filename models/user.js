const mongoose=require('mongoose');


const userSchema=mongoose.Schema({
    userFirstName:String,
    userLastName:String,
    userMobile:Number,
    userEmail:String,
    userCity:String
})

module.exports=mongoose.model('user',userSchema)