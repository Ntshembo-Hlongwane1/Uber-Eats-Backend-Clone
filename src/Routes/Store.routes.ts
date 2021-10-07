import { Router } from 'express';
import { StoreController } from '../Controller/Store.controller';
import { json } from 'body-parser';

const router = Router();
const Controller = new StoreController();

router.post('/api/store', json(), (request, response) => {
  Controller.create(request, response);
});

router.get('/api/store', (request, response) => {
  Controller.getStores(request, response);
});
export default router;
