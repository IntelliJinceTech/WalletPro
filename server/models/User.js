import mongoose from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  hasPassword: { type: 'boolean', default: true },
  // email: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  // // username: {
  // //   type: String,
  // //   required: true,
  // // },
  // name: String,
  // passwordHash: String,
  googleId: String,
  googleToken: String,
  cards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CreditCard',
    },
  ],
})
// usernameField: specifies the field name that holds the username. Defaults to 'username'. This option can be used if you want to use a different field to hold the username for example "email".
// UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' })
UserSchema.plugin(passportLocalMongoose)
export default mongoose.model('User', UserSchema)
