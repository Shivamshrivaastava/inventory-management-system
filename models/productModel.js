const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name : {type :String, required:true},
  sku : {type :String, required:true, unique: true},
  category : {type:String},
  quantity  :{type:Number, required:true, min:0},
  price :{type :Number, required:true, min:0},
  supplier :{type :String},
  createdAt:{type:Date, default :Date.now},
});

module.exports = mongoose.model('Product', productSchema);