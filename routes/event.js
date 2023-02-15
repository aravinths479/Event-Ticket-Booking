const eventController = require("../controller/eventController")
const { ensureAuthenticated, forwardAuthenticated, isAdmin } = require('../config/auth');

const express = require('express');
const router = express.Router();


router.get('/createEvent',ensureAuthenticated,isAdmin, eventController.getEventCreate);
router.post('/createEvent',ensureAuthenticated,isAdmin, eventController.postEventCreate);

router.get('/events',ensureAuthenticated,eventController.getEvents)
router.get('/SingleEvent/:id',ensureAuthenticated,eventController.getSingleEvent)

router.get('/registerEvent/:id',ensureAuthenticated,eventController.getRegisterEvent)

router.post('/registerEvent/:id',ensureAuthenticated,eventController.postRegisterEvent)

router.get("/registeredUsers",ensureAuthenticated,isAdmin,eventController.registeredUsers)

router.get("/myEvents",ensureAuthenticated, eventController.getMyevents)
router.post("/myEvents",ensureAuthenticated,eventController.postMyevents)


module.exports = router;