import { ProductsModule } from './products.module';
import { Module } from '@nestjs/common';
import { ProductsController } from './product.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ProductsModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsHttpModule {}
