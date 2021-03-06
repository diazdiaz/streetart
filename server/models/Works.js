const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const worksSchema = new Schema({
userid: { type: Schema.Types.ObjectId, ref: "User" },
type: {
    type: String,
    enum: ["Sculpture","Painting","Photography","Other"],
    required: [true, 'Type of work required']
  },
style: {
    type: String,
},

description: {
    type: String,
    default: ''
  },
price: {
    type:Number,
    required: [true, 'Price is required']
},
image: {
    type: String,
    required: [true, 'Image is required']

}


});



const Works = mongoose.model('Works', worksSchema);
module.exports = Works;
