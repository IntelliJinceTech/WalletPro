import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
  googleId: {
    type: String,
    required: false,
    unique: true,
  },
  firstName: String,
  lastName: String,
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  // googleToken: String,
  cards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CreditCard',
    },
  ],
})
// usernameField: specifies the field name that holds the username. Defaults to 'username'. This option can be used if you want to use a different field to hold the username for example "email".
// UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' })
// UserSchema.plugin(passportLocalMongoose)

UserSchema.methods.toJSON = function toJSON() {
  const userObject = this.toObject()
  delete userObject.password
  delete userObject.email
  return userObject
}

UserSchema.statics.signup = async function signup(email, password, firstName, lastName) {
  // validation

  const exists = await this.findOne({ email })

  if (exists) {
    throw Error('Email already in use')
  }
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({
    email,
    password: hash,
    firstName,
    lastName,
  })

  return user
}

export default mongoose.model('User', UserSchema)
