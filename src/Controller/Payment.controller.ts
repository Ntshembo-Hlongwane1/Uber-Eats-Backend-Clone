import { Request, Response } from 'express';
import { config } from 'dotenv';
config();
const stripe = require('stripe')(process.env.STRIPE_SECRET);

export class Payment {
  async createsession(request: Request, response: Response) {
    const amount = parseInt(request.params.amount);
    const store = request.params.store;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: store,
            },
            unit_amount: 100 * amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'https://ubereats-backend-clone.herokuapp.com/success',
      cancel_url: 'https://ubereats-backend-clone.herokuapp.com/cancel',
    });

    return response.status(200).json(session.url);
  }
}
