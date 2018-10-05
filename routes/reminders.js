var express = require('express');
var router = express.Router();
var Reminder = require('../models/reminder');

//create new reminder
router.post('/reminders', function(req, res) {
  Reminder.create({ title: req.body.reminder.title }, function(err, reminder) {
    if (err) {
      res.status(500).json(err);
    } else {
      reminder.description = req.body.reminder.description;
      reminder.time = req.body.reminder.time;
      reminder.save();
      res.status(200).json(reminder);
    }
  });
});

//Edit
router.get('/reminders/:id/edit', function(req, res) {
  Reminder.findById(req.params.id, function(err, foundReminder) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(foundReminder);
    }
  });
});

//Update
router.put('/reminders/:id/edit', function(req, res) {
  Reminder.findByIdAndUpdate(
    req.params.id,
    req.body.reminder,
    { new: true },
    function(err, updatedReminder) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(updatedReminder);
      }
    }
  );
});

router.delete('/reminders/:id/delete', function(req, res) {
  Reminder.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json('Deleted Reminder');
    }
  });
});

module.exports = router;
