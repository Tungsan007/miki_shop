import { Schema, models, model } from 'mongoose';

const FeedbackSchema = new Schema(
  {
    rating: { type: Number, require: true },
    desc: { type: String, require: true },
    images: { type: Array, default: [] },
    userId: { type: Schema.Types.ObjectId, require: true, ref: 'User' },
    repId: { type: Schema.Types.ObjectId, ref: 'Feedback' },
    productId: { type: Schema.Types.ObjectId, ref: 'Product' },
  },
  {
    timestamps: true,
  },
);

export default models.Feedback || model('Feedback', FeedbackSchema);
