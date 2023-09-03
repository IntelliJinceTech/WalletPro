import mongoose from 'mongoose'

const rewardsSchema = new mongoose.Schema({
  rewardsCategory: {
    // e.g. dining, travel
    type: String,
    required: true,
  },
  categoryPercent: {
    type: Number,
    min: 0,
    max: 99,
  },
  multiplier: Number,
  rewardLimit: Number,
  creditCard: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CreditCard',
  },
})

export default mongoose.model('Reward', rewardsSchema)
