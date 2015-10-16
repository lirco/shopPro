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
 * Product Schema
 */
var ProductSchema = new Schema({
  productName: {
    type: String,
    trim: true,
    default: '',
    validate: [validateProperty, 'Please fill in product name']
  },
  shortDescription: {
    type: String,
    trim: true,
    default: '',
    validate: [validateProperty, 'Please fill in product short description']
  },
  fullDescription: {
    type: String,
    trim: true,
    default: ''
  },
  images: {
    type: Array
  },
  price: {
    type: Number,
    validate: [validateProperty, 'Please fill in product price']
  },
  categories: {
    type: Array
  },
  howToUse: {
    type: String,
    trim: true,
    default: ''
  },
  active: {
    type: Boolean
  }
});

mongoose.model('Product', ProductSchema);
