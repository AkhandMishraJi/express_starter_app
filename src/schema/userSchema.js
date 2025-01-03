const mongoose = require("mongoose")

const userSchema = new mongoose.Schema ({
    fullName : {
        type : String ,
        required : [true , " NAME IS REQUIRED , PLEASE FILL IT"] ,
        trim : true
    } 
   ,
    mobileNumber : {
        type : String , 
        trim : true ,
        minlength : [10 , 'PHONE NO. SHOULD 10 DIGITS LONG'],
        maxlength : [10 , 'PHONE NO. SHOULD 10 DIGITS LONG'],
        unique : [true , "PHONE NO. IS ALREADY IN USE , TRY TO LOGIN"] ,
        required : [true , 'PHONE NO. REQUIRED']
    } ,
    email : {
        type : String ,
        trim : true , 
        required : [true , 'EMAIL IS REQUIRED'] ,
        unique : [true , 'EMAIL IS ALREADY IN USE , TRY TO LOGIN'] ,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password : {
        type : String ,
        required: [true , 'PLEASE FILL OUT PASSWORD'] ,
        minlength : [6 , 'PASSWORD SHOULD 6 CHARACTERS LONG , WITH  MIX OF CAPITAL ,SMALL , SPECIAL CHARACTERS AND NUMBERS ...']
    },
    role : {
        type : String ,
        default : 'USER',
        enum : ['USER' , 'ADMIN']
    }
 
} , {
    timestamps : true
})

const User = mongoose.model("User" , userSchema)

module.exports = User