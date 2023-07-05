import { Body, Controller, Post } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { CreateDto } from './dto';

@Controller('stripe')
export class StripeController {

  constructor(private stripeService: StripeService){

  }

  @Post('/create-session')
  createStripeSession(@Body() dto: CreateDto) {
    return this.stripeService.createSession(dto);
  }
}
