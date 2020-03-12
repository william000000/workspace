import { Product } from './products.model';
import { Injectable, NotFoundException, UploadedFile } from '@nestjs/common';
import { ValidateProductDto } from './product.validations';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(data: any) {
  
    const prodId = Math.random().toString();
    data.id = prodId;
    this.products.push(data);
    return data;
  }

  getProducts() {
    return [...this.products];
  }

  getProduct(prodId: string) {
    return this.findProduct(prodId);
  }

  private findProduct(id: string): [Product, number] {
    const productIndex = this.products.findIndex(prod => prod.id === id);
    const product = this.products[productIndex];
    if (!product) {
      throw new NotFoundException('Could not find this product!');
    }

    return [product, productIndex];
  }

  updateProduct(id: string, price: number, title: string, description: string) {
    const [productFound, index] = this.findProduct(id);

    const updatedProd = { ...productFound };

    updatedProd.description = description;
    updatedProd.price = price;
    updatedProd.title = title;

    return (this.products[index] = updatedProd);
  }

  deleteProduct(prodId: string) {
    const [findOne, index] = this.findProduct(prodId);
    const result = this.products.splice(index, 1);
    return result;
  }
}
