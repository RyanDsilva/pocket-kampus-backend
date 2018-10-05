const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//routes
var reminderRoutes = require('./routes/reminders');

const port = process.env.PORT || 3000;

//use routes
app.use(reminderRoutes);

app.listen(port, () => {
  console.log('Server started on ' + port);
});
