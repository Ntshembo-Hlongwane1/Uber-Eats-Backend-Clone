import { Product } from '../Types/Products.types';
import { Schema, model } from 'mongoose';

const productsSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
  },
  image: {
    type: String,
    required: [true, 'Product image is required'],
  },
  storesold: {
    type: Schema.Types.ObjectId,
    ref: 'store',
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
  },
  price: {
    type: Schema.Types.Decimal128,
    required: [true, 'Product price is required'],
  },
});

export const productModel = model<Product>('storeproducts', productsSchema);
