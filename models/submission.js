var mongoose = require('mongoose');

var submissionSchema = new mongoose.Schema({
  title: String,
  subject: String,
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: Date,
  completed: Boolean,
  description: String,
});

module.exports = mongoose.model('Submission', submissionSchema);
