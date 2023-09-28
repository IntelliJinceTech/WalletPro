import mongoose from 'mongoose'

const rewardsSchema = new mongoose.Schema({
  categoryType: {
    // e.g. dining, travel
    type: String,
    required: true,
  },
  percent: {
    type: Number,
    min: 0,
    max: 99,
  },
  pointsMultiplier: Number,
  rewardLimit: Number,
  creditCard: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CreditCard',
  },
})

export default mongoose.model('Reward', rewardsSchema)
