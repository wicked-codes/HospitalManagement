const mongoose = require('mongoose')
const { v4 } = require('uuid')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { Schema, model } = mongoose

const authSchema = new Schema(
  {
    _id: { type: String, default: v4 },
    resource_id:{ type: Schema.Resource.ObjectId, ref: 'Resource' },
    name: {
      type: String,
      required: [true, 'Please provide your name'],
    },
    email: {
      type: String,
      required: [true, 'Please provide a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      select: false,
    },
    role: {
      type: String,
      enum: {
        values: ['doctor', 'nurse', 'staff', 'management'],
        message: 'Please select your role',
      },
      default: 'user',
    },
  },
  {
    timestamps: true,
  }
)

authSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, 12)
  }
  next()
})

authSchema.methods.comparePassword = async function (enterPassword) {
  return bcrypt.compareSync(enterPassword, this.password)
}

authSchema.methods.jwtToken = function () {
  const Auth = this
  return jwt.sign({ id: auth._id }, 'random string', {
    expiresIn: '1h',
  })
}

const Auth = model('Auth', authSchema)

module.exports = Auth