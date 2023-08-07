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
})

const creditCardSchema = new mongoose.Schema({
  bank: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  network: {
    type: String,
    required: true,
  },
  rewards: [rewardsSchema],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  rewardType: {
    type: String,
    required: true,
  }, // cashback vs points vs miles
  annualFee: {
    type: Number,
    required: true,
  },
  paymentSchedule: {
    // cycle of days between payments
    type: Number,
    default: 30,
  },
  favorite: {
    type: Boolean,
    default: true,
  },
  perks: {
    travel: {
      tripCancellationInsurancePerPerson: Number, // per person
      rentalCarInsurance: Boolean,
      lostBaggageCoverage: Boolean,
      hasForeignTransactionFee: Boolean,
      airportLoungeAccess: Boolean,
      loyaltyProgram: String,
    },
    purchase: {
      purchaseProtection: Boolean,
      extendedWarranty: Boolean,
    },
  },
})

export default mongoose.model('CreditCard', creditCardSchema)
