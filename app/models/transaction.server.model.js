'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Transaction Schema
 */
var TransactionSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  modified: {
    type: Date,
    default: Date.now
  },
  customer: {
    type: Schema.ObjectId,
    ref: 'Customer'
  },
  seller: {
    type: Schema.ObjectId,
    ref: 'Seller'
  },
  store: {
    type: Schema.ObjectId,
    ref: 'Store'
  },
  products: {
    type: Array
  },
  // optional statuses: pending, done
  status: {
    type: String,
    default: 'pending'
  },
  totalPrice: {
    type: Double
  }
});

TransactionSchema.pre('save', function(next) {
  this.modified = Date.now();
  next();
});

mongoose.model('Transaction', TransactionSchema);
