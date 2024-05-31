import { Schema, models, model } from 'mongoose';

const CartSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, require: true, ref: 'User' },
    productId: { type: Schema.Types.ObjectId, ref: 'Product' },
    cost: { type: Number },
    color: { type: String },
    size: { type: Number },
    quantity: { type: Number },
  },
  {
    timestamps: true,
  },
);

export default models.Cart || model('Cart', CartSchema);
