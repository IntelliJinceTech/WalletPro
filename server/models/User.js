import mongoose from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  hasPassword: { type: 'boolean', default: true },
  // ! google setup seemed to have problems with passport-local-mongoose usernameField
  // google: {
  //   id: {
  //     type: String,
  //   },
  //   name: {
  //     type: String,
  //   },
  //   email: {
  //     type: String,
  //   },
  // },
})
// usernameField: specifies the field name that holds the username. Defaults to 'username'. This option can be used if you want to use a different field to hold the username for example "email".
UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' })
export default mongoose.model('User', UserSchema)
