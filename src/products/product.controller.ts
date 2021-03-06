import { ProductsService } from './products.service';
import { validate, IsEmail, IsNotEmpty, IsInt, IsAlpha } from 'class-validator';

import {
  Post,
  Body,
  Get,
  Controller,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ValidateProductDto } from './product.validations';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // @Post()
  // async addProduct(
  //   @Body() data: ValidateProductDto,
  // ): Promise<any> {
  //   const generatedData = this.productsService.insertProduct(data);
  //   return { data: generatedData };
  // }

  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  getProduct(@Param('id') ProdId: number) {
    return this.productsService.getProduct(ProdId);
  }
  //Update data
  // @Patch(':id')
  // updateProduct(
  //   @Param('id') prodId: number,
  //   @Body('price') prodPrice: number,
  //   @Body('title') prodTitle: string,
  //   @Body('description') prodDesc: string,
  // ) {
  //   return this.productsService.updateProduct(
  //     prodId,
  //     prodPrice,
  //     prodTitle,
  //     prodDesc,
  //   );
  // }
  //Delete data
  @Delete(':id')
  removeProduct(@Param('id') prodId: number) {
    this.productsService.removeProduct(prodId);
    return 'Successfully deleted!';
  }
}
