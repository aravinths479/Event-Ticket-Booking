const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true,
    default:""
  },
  description: {
    type: String,
    required: true,
    default:""
  },
  fee:{
    type:String,
    required:false,
    default:""
  },
  from:{
    type:Date,
    default:""
  },
  to:{
    type:Date,
    default:""
  },
  venue:{
    type:String,
    default:""
  },
  lastdate:{
    type:Date,
    default:""
  },
  incharge:{
    type:String,
    default:""
  },
  ticketCount:{
    type:Number,
    default:""
  },
  noOfParti:{
    type:String,
    default:""
  },
  upi:{
    type:String,
    default:""
  },
  accno:{
    type:String,
    default:""
  },
  ifsc:{
    type:String,
    default:""
  }
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
