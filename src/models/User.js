import { Schema, models, model } from 'mongoose';

const UserSchema = new Schema(
  {
    firstName: { type: String, default: 'bottt' },
    lastName: { type: String, default: '' },
    image: { type: String, default: '' },
    gender: { type: String, default: 'other' },
    address: { type: String, default: '' },
    phoneNumber: { type: String, default: '' },
    dateOfBirth: { type: Date, default: Date.now },
    productBought: { type: Array },
  },
  {
    timestamps: true,
  },
);

export default models.User || model('User', UserSchema);
