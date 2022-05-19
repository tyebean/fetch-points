import mongoose from 'mongoose'

const Schema = mongoose.Schema

const transactionSchema = new Schema({
  payer: String,
  points: { type: Number, required: true, default: 0 },
}, {
  timestamps: true
})

const Transaction = mongoose.model('Transaction', transactionSchema)

export {
  Transaction
} 
