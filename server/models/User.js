const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
// todo:
// todo: 
// todo: 
// todo: 
// todo: 
// todo: 

const UserSchema = new mongoose.Schema({
  userName: { type: String, unique: true, required: true },
  email: { type: String, unique: true , required: true },
  password: {required: true, type: String},
  allCreditCards: [{ //array of credit card objects
    type: mongoose.Schema.Types.ObjectId,
    ref: "CreditCard"
  }],
  wallets: [WalletSchema],
});

const WalletSchema = new mongoose.Schema({
  name: { type: String, required: true },
  creditCards: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "CreditCard"
  }]
})

// UserSchema.pre("save", function save(next) {
//   const user = this;
//   if (!user.isModified("password")) {
//     return next();
//   }
//   bcrypt.genSalt(10, (err, salt) => {
//     if (err) {
//       return next(err);
//     }
//     bcrypt.hash(user.password, salt, (err, hash) => {
//       if (err) {
//         return next(err);
//       }
//       user.password = hash;
//       next();
//     });
//   });
// });

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
