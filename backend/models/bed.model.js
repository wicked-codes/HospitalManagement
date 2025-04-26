const mongoose = require('mongoose')
const { v4 } = require('uuid')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { Schema, model } = mongoose

const bedSchema = new Schema(
  {
    _id: { type: String, default: v4 },
    bedNumber: {
      type: String,
      required: [true, 'Please provide your bed number'],
    },
    type: {
      type: String,
      enum: {
        values: ['ICU', 'GENERAL WARD'],
        message: 'Please select type',
      }
    },
    status: {
      type: String,
      enum: {
        values: ['AVAILABLE', 'OCCUPIED', 'RESERVED'],
        message: 'Please select your status',
      }
    },
  },
  {
    timestamps: true,
  }
)


const Bed = model('bed', bedSchema)

module.exports = Bed