'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * A Validation function for non-empty properties
 */
var validateProperty = function(property) {
  return (property.length);
};

/**
 * Store Schema
 */
var StoreSchema = new Schema({
  storeName: {
    type: String,
    trim: true,
    default: '',
    validate: [validateProperty, 'Please fill in a store name']
  },
  email: {
    type: String,
    trim: true,
    default: '',
    validate: [validateProperty, 'Please fill in a store email'],
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  phone_1: {
    type: Number,
    trim: true,
    default: ''
  },
  phone_2: {
    type: Number,
    trim: true,
    default: ''
  },
  address: {
    type: String,
    trim: true,
    default: ''
  },
  city: {
    type: String,
    trim: true,
    default: ''
  },
  state: {
    type: String,
    trim: true,
    default: ''
  },
  country: {
    type: String,
    trim: true,
    default: ''
  },
  zipCode: {
    type: Number,
    trim: true,
    default: ''
  }

});

mongoose.model('Store', StoreSchema);
