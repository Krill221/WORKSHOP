import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Stripe } from 'stripe';
import { CreateDto } from './dto';
import { ProductsService } from '../products/products.service';

@Injectable()
export class StripeService {
  private stripe: Stripe

  constructor(
    private config: ConfigService,
    private products: ProductsService
  ) {

    const STRIPE_PRIVATE_KEY = config.get('STRIPE_PRIVATE_KEY');
    this.stripe = new Stripe(STRIPE_PRIVATE_KEY, { apiVersion: '2022-11-15' });

  }

  async createSession(dto: CreateDto) {

    const SUCCESS_URL = this.config.get('SUCCESS_URL');
    const CANCEL_URL = this.config.get('CANCEL_URL');

    try {
      const session = await this.stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        success_url: SUCCESS_URL,
        cancel_url: CANCEL_URL,
        line_items: dto.order_items.map(item => {
          const storeItem = this.products.getProductById(item.id);
          return {
            price_data: {
              currency: 'usd',
              product_data: {
                name: storeItem.name,
              },
              unit_amount: storeItem.priceInCents
            },
            quantity: item.quantity
          }
        })
      })
      return { url: session.url };
    } catch (e) {
      console.log(e)
      throw new ForbiddenException(
        'Stripe session failed'
      );
    }
  }
}
