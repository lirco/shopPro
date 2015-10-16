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
 * Customer Schema
 */
var CustomerSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  modified: {
    type: Date,
    default: Date.now
  },
  // verify all names are saved and searched as lower case
  firstName: {
    type: String,
    trim: true,
    default: '',
    validate: [validateProperty, 'Please fill in your first name']
  },
  lastName: {
    type: String,
    trim: true,
    default: '',
    validate: [validateProperty, 'Please fill in your last name']
  },
  email: {
    type: String,
    trim: true,
    default: '',
    validate: [validateProperty, 'Please fill in your email'],
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  mobilePhone: {
    type: Number,
    trim: true,
    default: ''
  },
  homePhone: {
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

CustomerSchema.pre('save', function(next) {
  this.modified = Date.now();
  next();
});

mongoose.model('Customer', CustomerSchema);
