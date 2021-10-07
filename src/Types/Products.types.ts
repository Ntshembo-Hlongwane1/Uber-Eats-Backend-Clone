import { Schema } from 'mongoose';

export type Product = {
  name: string;
  image: string;
  storesold: Schema.Types.ObjectId;
  description: string;
  price: Schema.Types.Decimal128;
};
