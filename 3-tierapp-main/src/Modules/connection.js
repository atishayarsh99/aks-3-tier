const mongoose = require('mongoose');
require('dotenv').config()


mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

exports.mongoose = mongoose