import { storeModel } from '../Models/Store.model';
import { Request, Response } from 'express';

interface Store {
  create(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
  getStores(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
}

export class StoreController implements Store {
  async create(request: Request, response: Response) {
    const { name, location, storecover } = request.body;

    const newStore = new storeModel({
      name,
      location,
      storecover,
    });

    try {
      const savedStore = await newStore.save();
      return response.status(201).json({ msg: 'Store created', savedStore });
    } catch (error) {
      return response.status(500).json(error);
    }
  }

  async getStores(request: Request, response: Response) {
    const stores = await storeModel.find();
    return response.status(200).json(stores);
  }

  async getStorById(request: Request, response: Response) {
    const storeID = request.params.id;
    const store = await storeModel.findOne({ _id: storeID });

    return response.status(200).json(store);
  }
}
