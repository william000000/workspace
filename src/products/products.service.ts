import { Products } from './product.entity';
import { Injectable, NotFoundException, UploadedFile } from '@nestjs/common';
import { ValidateProductDto } from './product.validations';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  // private products: Products[] = [];

  constructor(
    @InjectRepository(Products)
    private readonly productsRepository: Repository<Products>,
  ) {}

  getAllProducts(): Promise<Products[]> {
    console.log('ggg', Products);
    
    // if(Products)
    return this.productsRepository.find();
  }

  getProduct(id: number): Promise<Products> {
    return this.productsRepository.findOne(id);
  }

  async removeProduct(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }

  // insertProduct(data: any) {
  //   const prodId = Math.random().toString();
  //   data.id = prodId;
  //   this.products.push(data);
  //   return data;
  // }

  // getProducts() {
  //   return [...this.products];
  // }

  // getProduct(prodId: number) {
  //   return this.findProduct(prodId);
  // }

  // private findProduct(id: number): [Products, number] {
  //   const productIndex = this.products.findIndex(prod => prod.id === id);
  //   const product = this.products[productIndex];
  //   if (!product) {
  //     throw new NotFoundException('Could not find this product!');
  //   }

  //   return [product, productIndex];
  // }

  // updateProduct(id: number, price: number, title: string, description: string) {
  //   const [productFound, index] = this.findProduct(id);

  //   const updatedProd = { ...productFound };

  //   updatedProd.description = description;
  //   updatedProd.price = price;
  //   updatedProd.title = title;

  //   return (this.products[index] = updatedProd);
  // }

  // deleteProduct(prodId: number) {
  //   const [findOne, index] = this.findProduct(prodId);
  //   const result = this.products.splice(index, 1);
  //   return result;
  // }
}
