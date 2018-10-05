var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
  type: String,
  name: String,
  description: String,
  startDate: Date,
  endDate: Date,
  eventImage: String,
  hostCouncil: String,
});

module.exports = mongoose.model('Event', eventSchema);
