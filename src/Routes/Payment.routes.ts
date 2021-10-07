import { Router } from 'express';
import { Payment } from '../Controller/Payment.controller';

const router = Router();
const Controller = new Payment();

router.get('/api/payment/:store/:amount', (request, response) => {
  Controller.createsession(request, response);
});

export default router;
