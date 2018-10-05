var express = require('express');
var router = express.Router();
var Reminder = require('../models/subject');

//show all
router.get('/subjects', function(req, res){
  Subject.find({}, function(err, subjects){
    if(err){
      res.status(500).json(err);
    } else {
      res.status(200).json(subjects);
    }
  })
})
//create new subject
router.post('/subjects', function(req, res) {
  Subject.create({ title: req.body.subject.name }, function(err, subject) {
    if (err) {
      res.status(500).json(err);
    } else {
      subject.teacher = req.body.subject.teacher;
      subject.resources = req.body.subject.resources;
      subject.save();
      res.status(200).json(subject);
    }
  });
});

//show details of subject
router.get('/subjects/:id', function(req, res){
  Subject.findById(req.params.id, function(err, foundSubject) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(foundSubject);
    }
  });
})

//Edit
router.get('/subjects/:id/edit', function(req, res) {
  Subject.findById(req.params.id, function(err, foundSubject) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(foundSubject);
    }
  });
});

//Update
router.put('/Subjects/:id/edit', function(req, res) {
  Subject.findByIdAndUpdate(
    req.params.id,
    req.body.subject,
    { new: true },
    function(err, updatedSubject) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(updatedSubject);
      }
    }
  );
});

router.delete('/subjects/:id/delete', function(req, res) {
  Subject.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json('Deleted Subject');
    }
  });
});

module.exports = router;
