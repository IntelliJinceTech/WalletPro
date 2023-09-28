import mongoose from 'mongoose'

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
  rewards: [
    {
      category: {
        type: String,
      },
      percent: {
        type: Number,
        min: 0,
        max: 99,
      },
      pointsMultiplier: {
        type: Number,
        min: 0,
        max: 99,
      },
      rewardLimit: Number,
    },
  ],
  lastFourDigits: String,
  expiryDate: String,
  creditLimit: Number,
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
  // ! post mvp
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
