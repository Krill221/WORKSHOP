

import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, ValidateNested } from 'class-validator'

class OrderItems {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsNumber()
    @IsNotEmpty()
    quantity: number;
}

export class CreateDto {
    @ValidateNested({ each: true })
    @Type(() => OrderItems)
    order_items: OrderItems[];
}