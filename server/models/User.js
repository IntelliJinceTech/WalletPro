const mongoose = require('mongoose');
const {Schema} = mongoose.model
const bcrypt = require("bcrypt");



const UserSchema = new Schema({
  userName: { type: String, unique: true, required: true },
  email: { type: String, unique: true , required: true },
  password: {required: true, type: String},
  google: {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
  },
});

UserSchema.statics.signup = async (email,password,userName) => {
  const exists = await this.findOne({email})
  if(exists) {
    throw Error('Email already in use');
  }
  const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({
        email,
        password: hash,
        userName
    });

    return user;
}

// Helper method for validating user's password.
// UserSchema.methods.comparePassword = function comparePassword(
//   candidatePassword,
//   cb
// ) {
//   bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
//     cb(err, isMatch);
//   });
// };


module.exports = mongoose.model("User", UserSchema);
