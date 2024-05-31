import { Schema, models, model, mongoose } from 'mongoose';
import slug from 'mongoose-slug-generator';
mongoose.plugin(slug);

const ProductSchema = new Schema(
  {
    name: { type: String, require: true },
    sale: { type: Number, require: true },
    picture: { type: Array, require: true },
    rating: { type: Number, default: 5 },
    slug: { type: String, slug: 'name' },
    amount: [
      {
        size: String,
        quantity: Number,
        color: Array,
        cost: Number,
      },
    ],
    search: { type: String, require: true },
    desc: { type: String, require: true },
    category: { type: String, require: true },
  },
  {
    timestamps: true,
  },
);

export default models.Product || model('Product', ProductSchema);
