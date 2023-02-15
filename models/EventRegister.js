const mongoose = require('mongoose');

const EventRegisterSchema = new mongoose.Schema({
  id:{
    type:String,
    required:true,
    default:""
  },
  email:{
    type:String,
    required:true,
    default:""
  },
  title:{
    type:String,
    required:true,
    default:""
  },
  noOfParti:{
    type:String,
    required:true,
  },
  canceled:{
    type:String,
    default:"Not Cancelled"
  },
  transId:{
    type:String,
    default:""
  },
  totamt:{
    type:String,
    default:""
  }

  
});

const EventRegister = mongoose.model('EventRegister', EventRegisterSchema);

module.exports = EventRegister;
