const mongoose=require('mongoose')

const FEED =mongoose.Schema({
    name:{
        type:String,
        require:true,
        maxlength:[15,'Names must be maximum 15 chars']
    },
    
    message:{
        type:String,
        require:true,
        minlength:[40,'Messages must be at least 40 chars']
    },
    date:{
        type:String,
        default: d=new Date().toDateString()
    }
})

module.exports=mongoose.model('feed',FEED)