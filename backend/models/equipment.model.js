const mongoose = require('mongoose')
const { v4 } = require('uuid')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { Schema, model } = mongoose

const bedSchema = new Schema(
  {
    _id: { type: String, default: v4 },
    equipmentNumber: {
      type: String,
      required: [true, 'Please provide your equipment number'],
    },
    type: {
      type: String,
    },
    status: {
      type: String,
      enum: {
        values: ['AVAILABLE', 'OCCUPIED'],
        message: 'Please select equipment status',
      }
    },
  },
  {
    timestamps: true,
  }
)


const Bed = model('bed', bedSchema)

module.exports = Bed