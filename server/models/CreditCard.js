import mongoose from'mongoose'

const Schema = mongoose.Schema

const CreditCardSchema = new Schema({
  name: {
    type:String,
    required: true
  },
  bankName: {
    type:String,
    required: true
  },
  category: {
    type:String,
    required: true
  },
  image: {
    type: String,
  },
  cloudinaryId: {
    type: String,
  },

  creditScore: {
    type: Number,
    required: true
  },

})