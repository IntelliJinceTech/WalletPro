import mongoose from 'mongoose'

const rewardsSchema = new mongoose.Schema({
  rewardsCategory: {
    // e.g. dining, travel
    type: String,
    required: true,
  },
  categoryPercent: {
    type: Number,
    required: true,
    min: 0,
    max: 99,
  },
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
  rewardForm: {
    type: String,
    required: true,
  }, // cashback vs points vs miles
  annualFee: {
    type: Number,
  },
  paymentSchedule: Date,
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
