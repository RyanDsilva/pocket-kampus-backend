var express = require('express');
var router = express.Router();
var Event = require('../models/event');

//get all events
router.get('/events', function(req, res) {
  Event.find({}, function(err, events) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(events);
    }
  });
});

//create
router.post('/events/add', function(req, res) {
  Event.create({ name: req.body.event.name }, function(err, event) {
    if (err) {
      res.status(500).json(err);
    } else {
      event.type = req.body.event.type;
      event.description = req.body.event.description;
      event.date = req.body.event.date;
      event.eventImage = req.body.event.eventImage;
      event.host = req.body.event.host;
      event.save();
      res.status(200).json(event);
    }
  });
});

//details page of events
router.get('/events/:id', function(req, res) {
  Event.findById(req.params.id, (err, event) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(event);
    }
  });
});

//Edit
router.get('/events/:id/edit', function(req, res) {
  Event.findById(req.params.id, function(err, foundEvent) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(foundEvent);
    }
  });
});

//Update
router.put('/events/:id/edit', function(req, res) {
  Event.findByIdAndUpdate(
    req.params.id,
    req.body.event,
    { new: true },
    function(err, updatedEvent) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(updatedEvent);
      }
    }
  );
});

router.delete('/events/:id/delete', function(req, res) {
  Event.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json('Deleted event!');
    }
  });
});

module.exports = router;
