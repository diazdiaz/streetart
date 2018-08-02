const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const artistaSchema = new Schema({
user_id: { type: Schema.Types.ObjectId, ref: "User" },
username: { type: Schema.Types.ObjectId, ref: "User"  },
name: {
    type: String,
    required: [true, 'The name is required']
  },
surname: {
    type: String,
    required: [true, 'The surname is required']
  },

nationality: {
    type: String, default: ''
  },
description: {
    type: String,
    default: ''
  },
age: {
    type:Number,
    required: [true, 'The surname is required']
},

});

const Artista = mongoose.model('Artista', artistaSchema);
module.exports = Artista;
