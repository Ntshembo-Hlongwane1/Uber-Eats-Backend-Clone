import { Schema } from 'mongoose';

export type Store = {
  name: string;
  rating: number;
  products: Array<Schema.Types.ObjectId>;
  location: string;
};
