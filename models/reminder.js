var mongoose = require('mongoose');

var reminderSchema = new mongoose.Schema({
  title: String,
  description: String,
  time: String,
});

module.exports = mongoose.model('Reminder', reminderSchema);
