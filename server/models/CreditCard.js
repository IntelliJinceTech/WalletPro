import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
  tier: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  categoryPercent: {
    type: Number,
    required: true,
    min: 0,
    max: 99,
  },
})

const creditCardSchema = new mongoose.Schema({
  bank: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  network: {
    type: String,
    required: true,
  },
  categories: [categorySchema],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
})

const CreditCard = mongoose.model('CreditCard', creditCardSchema)
export default CreditCard
