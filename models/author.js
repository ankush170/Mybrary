const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    name: {
      type: Number,
      required: true
    }
  })
  
  module.exports = mongoose.model('Author', authorSchema)
