const mongoose = require('mongoose');
const db_config = require('./config/db.config.js')

mongoose.Promise = global.Promise;
mongoose.connect(db_config.url);
mongoose.connection.on('error', function() {
  console.log('Error connecting to database.');
  process.exit();
});
mongoose.connection.once('open', function() {
  console.log("Successfully connected to database.");
});
