import { Injectable } from '@nestjs/common';
import { ProductDto } from './dto';

@Injectable()
export class ProductsService {
  private products: Map<number, ProductDto>
  constructor(){
    this.products = new Map([
      [1, { priceInCents: 1000, name: 'Coke'}],
      [2, { priceInCents: 2000, name: 'Burger'}],
    ])
  }

  getProductById(id: number): ProductDto{
    return this.products.get(id)
  }
}
