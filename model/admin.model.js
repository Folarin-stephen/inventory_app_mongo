const mongoose = require("mongoose");
const shortid = require("shortid")

const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;

const AdminSchema = new Schema ({
    _id: {
        type: String,
        default: shortid.generate
      },
      createdAt: {type:Date, default: new Date()},
      name: {type: String, require: true},
      email: {type: String, require: true, unique: true},
      role: {type: String},
      password: {type: String, require: true}
})

const AdminModel = mongoose.model('Admin', AdminSchema)
module.exports = AdminModel;