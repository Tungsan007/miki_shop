import { Schema, models, model } from 'mongoose';

const AccountSchema = new Schema(
  {
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    refreshToken: { type: String, default: '' },
    userInfor: { type: Schema.Types.ObjectId, ref: 'User' },
    role: { type: String, default: 'user' },
  },
  {
    timestamps: true,
  },
);

export default models.Account || model('Account', AccountSchema);
