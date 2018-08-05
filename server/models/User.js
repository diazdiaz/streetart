const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: {type: String,  match: /\S+@\S+\.\S+/, trim: true},
  name: {type: String },
  phone: {type: Number, match: /^[0-9\-]+$/i, trim: true},
  artist: {
    type:Boolean,
    required:true
  },
  bio: {type:String},
  works: [{
    type: Schema.Types.ObjectId, ref:"Works"
   }],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
