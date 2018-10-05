var mongoose = require('mongoose');

var reminderSchema = new mongoose.Schema({
  title: String,
  description: String,
  startDate: Date,
  endDate: Date,
});

module.exports = mongoose.model('Reminder', reminderSchema);
