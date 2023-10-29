const mongoose = require("mongoose");
const shortid = require("shortid")
const bcrypt = require("bcrypt")

const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;

const UserSchema = new Schema({
    _id: {
        type: String,
        default: shortid.generate
      },
    // _id: objectId,
    createdAt: {type:Date, default: new Date()},
    name: {type: String, require: true},
    email: {type: String, require: true, unique: true},
    contact: {type: String},
    password: { type: String, required: true },
    phone_number: { type: String },
    user_type: { type: String, default: 'user' }, 
    gender:  { 
      type: String, 
      required: true,
      enum: ['male', 'female']
    }
    });
    UserSchema.pre('save', async function (next) {
      const user = this;
      const hash = await bcrypt.hash(this.password, 10);
    
      this.password = hash;
      next();
    })
    
    UserSchema.methods.isValidPassword = async function(password) {
      const user = this;
      const compare = await bcrypt.compare(password, user.password);
    
      return compare;
    }

    const UserModel = mongoose.model('Users', UserSchema)
    module.exports = UserModel;