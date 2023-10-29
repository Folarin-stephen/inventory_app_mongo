const mongoose = require("mongoose");
const shortid = require("shortid")

const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;

const CategorySchema = new Schema({
    _id: {
        type: String,
        default: shortid.generate
      },
    // _id: objectId,
    createdAt: {type:Date, default: new Date()},
    name: {type: String, require: true},
    description: {type: String},
    product_id: [{type: Schema.Types.ObjectId, ref: "Product"}]
    });


    const CategoryModel = mongoose.model('Category', CategorySchema)
    module.exports = CategoryModel;