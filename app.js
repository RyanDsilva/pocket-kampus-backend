const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

//Models
const User = require('./models/user');
const Event = require('./models/event');
const Lecture = require('./models/lecture');
const Reminder = require('./models/reminder');
const Subject = require('./models/subject');
const Submission = require('./models/submission');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//routes
var reminderRoutes = require('./routes/reminders');
var subjectRoutes = require('./routes/subjects');

const port = process.env.PORT || 3000;
const db = process.env.DATABASEURL || 'mongodb://localhost/scheduletracker';

mongoose.connect(db);

//use routes
app.use(reminderRoutes);
app.use(subjectRoutes);

app.listen(port, () => {
  console.log('Server started on ' + port);
});
