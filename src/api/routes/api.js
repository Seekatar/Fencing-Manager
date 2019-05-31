const express = require('express');
const router = express.Router();
const ctrlFencers = require('../controllers/fencerController');
const ctrlBout = require('../controllers/boutController');
// const ctrlEvent = require('../controllers/event');
// const ctrlTournamnet = require("../controllers/tournament")

router
  .route('/fencer/:id')
  .get(ctrlFencers.fencerById)
  .patch(ctrlFencers.fencerSet)
  .delete(ctrlFencers.fencerDelete)

router
  .route('/fencers')
  .get(ctrlFencers.fencersGet)
  .post(ctrlFencers.fencerCreate)

// router
//   .route('/event/:id')
//   .get(ctrlEvent.EventById)
//   .delete(ctrlEvent.EventsDelete)

router
   .route('/bouts/')
   .get(ctrlBout.boutsGet)
   .post(ctrlBout.boutCreate)

//   router
//   .route('/events')
//   .get(ctrlEvent.Events)
//   .post(ctrlEvent.EventsCreate)

// router
//   .route('/tournament/:id')
//   .get(ctrlTournament.getScene)
//   .delete(ctrlTournament.deleteScene)

// router
//   .route('/tournaments')
//   .get(ctrlTournament.getTournament)
//   .post(ctrlTournament.addScene)


module.exports = router;