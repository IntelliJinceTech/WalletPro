import mongoose from 'mongoose'

const walletSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  creditcards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CreditCard',
    },
  ],
})

export default mongoose.model('Wallet', walletSchema)
