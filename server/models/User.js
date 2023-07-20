import mongoose from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  hasPassword: {type: 'boolean', default: true},
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


UserSchema.plugin(passportLocalMongoose)
export default mongoose.model("User", UserSchema);
