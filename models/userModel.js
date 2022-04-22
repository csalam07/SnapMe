import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
      maxLength: 32,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      maxLength: 32,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      default: 'male',
    },
    avatar: {
      type: String,
      default: '',
    },
    varification: {
      type: Boolean,
      default: false,
    },

    role: { type: String, default: 'user' },
    website: { type: String, default: '' },
    mobile: { type: String, default: '' },
    address: { type: String, default: '' },
    story: {
      type: String,
      default: '',
      maxlength: 200,
    },
    followers: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    following: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    saved: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('user', userSchema);
