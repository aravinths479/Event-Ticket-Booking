const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const Event = require("../models/Event")
const moment = require("moment")




// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
Event.find({},(err,events)=>{
  if(err){
      console.log(err);
  }else{
      res.render("events",{events:events,moment: moment ,useraccess : req.user})
    }
  })
);

module.exports = router;
