const { events } = require("../models/Event");
const Event = require("../models/Event")
const EventRegister = require("../models/EventRegister")
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');


const moment = require("moment")
const mongoose  = require("mongoose")
const ObjectId = mongoose.Types.ObjectId;


exports.getEventCreate = (req,res) =>{
    res.render("eventCreate",{useraccess : req.user , useraccesslevel:req.user.isAdmin === true})
}

exports.postEventCreate = (req,res)=>{
    console.log(req.body);
    const {title,description,from,to,venue,lastdate,incharge,fee,noOfParti,upi,accno,ifsc} = req.body;
    const ticketCount = Number(req.body.ticketCount)
    Event.create({title:title,description:description,from:from,to:to,venue:venue,lastdate:lastdate,incharge:incharge,ticketCount:ticketCount,fee:fee,noOfParti:noOfParti,upi:upi,accno:accno,ifsc:ifsc},(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("event added sucessfully");
            req.flash('success_msg', 'event Created sucessfully');
            res.redirect("/event/createEvent")
        }
    })
}


exports.getEvents = (req,res) =>{
    Event.find({},(err,events)=>{
        if(err){
            console.log(err);
        }else{
            res.render("events",{events:events,moment: moment , useraccess : req.user , useraccesslevel:req.user.isAdmin === true})
        }
    })
}


exports.getSingleEvent = (req,res) =>{
    const id = req.params.id;
    Event.findById(ObjectId(id),(err,event)=>{
        if(err){
            console.log(err);
        }else{
            console.log(event);
            res.render("singleEvent",{event:event,moment: moment , useraccess : req.user , useraccesslevel:req.user.isAdmin === true})
        }
    })
    
}


exports.getRegisterEvent = (req,res) =>{
    const id = req.params.id;
    console.log(id);
    Event.findById(ObjectId(id),(err,event)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(event);
            console.log(req.user.email);
            res.render("eventRegister",{id:id, event:event , email:req.user.email , useraccess : req.user , useraccesslevel:req.user.isAdmin === true})
        }
    })
    
}


exports.postRegisterEvent = (req,res) =>{
    const {id,email,title,noOfParti,transId,totamt} = req.body;
    EventRegister.create({id:id,email:email,title:title,noOfParti:noOfParti,transId:transId,totamt:totamt},(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Event registered Sucessfully");
            req.flash('success_msg','Event Registered Sucessfully')
            res.redirect("/dashboard")
        }
    })
}


exports.registeredUsers = (req,res) =>{

    EventRegister.find({},(err,users)=>{
        if(err){
            console.log(err);
        }
        else{
            
            res.render("registeredUsers",{users:users , useraccess : req.user , useraccesslevel:req.user.isAdmin === true})
        }
    })    
}

exports.getMyevents = (req,res) =>{
    const email = req.user.email;
    EventRegister.find({email:email},(err,events)=>{
        if(err){
            console.log(err);
        }
        else{
            res.render("myevents",{events:events , useraccess : req.user , useraccesslevel:req.user.isAdmin === true})
        }
    })
}

exports.postMyevents = (req,res) =>{
    console.log(req.body);
    const id = req.body.id;
    const email = req.user.email;
    var myquery = { id:req.body.id };
    var newvalues = { $set: {canceled:"Canceled"} }

    EventRegister.updateOne(myquery,newvalues,(err,done)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(done);
            req.flash('success_msg','Event cancelled Sucessfully')
            res.redirect("/dashboard")
        }
    })    

    
}

