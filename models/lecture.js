var mongoose = require('mongoose');

var lectureSchema = new mongoose.Schema({
  description: String,
  startDate: Date,
  endDate: Date,
});

module.exports = mongoose.model('Lecture', lectureSchema);
