const mongoose = require('mongoose')
const { v4 } = require('uuid')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { Schema, model } = mongoose

const resourceSchema = new Schema(
  {
    _id: { type: String, default: v4 },
    name: {
      type: String,
      required: [true, 'Please provide your name'],
    },
    email: {
      type: String,
      required: [true, 'Please provide a valid email'],
    },
    status: {
      type: String,
      enum: {
        values: ['user', 'author', 'Online'],
        message: 'Please select your status',
      },
      default: 'user',
    },
  },
  {
    timestamps: true,
  }
)


const Resource = model('resources', resourceSchema)

module.exports = Resource