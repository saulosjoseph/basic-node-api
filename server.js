const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());
requireDir('./src/models');
app.use('/api', require('./src/routes')); 

try {

  mongoose.connect('mongodb://localhost:27017/basicnodeapi', {
    useNewUrlParser: true,    
    useUnifiedTopology: true,
  });

  app.listen(3001, () => console.log('no ar!'));
} catch (error) {
  console.log(error);
}

