const mongoose = require("mongoose");
const shortid = require("shortid")

const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;

const ProductSchema = new Schema({
    _id: {
        type: String,
        default: shortid.generate
      },
    // _id: objectId,
    createdAt: {type:Date, default: new Date()},
    name: {type: String, require: true},
    price: {type: String},
    active: {
        type: String,
        enum: ["true", "false"]
    },
    size: {
        type:String,
        enum: ['small','medium','large']
    },
    category_id: {type: String, ref: "Category"}
    });


    const ProductModel = mongoose.model('Product', ProductSchema)
    module.exports = ProductModel;