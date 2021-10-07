import { Store } from '../Types/Store.types';
import { Schema, model } from 'mongoose';

const storeSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Store name is required'],
  },
  rating: {
    type: Number,
    default: Math.random() * (5 - 0) + 0,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'storeproducts',
    },
  ],
  storecover: {
    type: String,
    required: [true, 'Store image is required'],
  },
  location: {
    type: String,
    required: [true, 'Store location is required'],
  },
});

export const storeModel = model<Store>('store', storeSchema);
