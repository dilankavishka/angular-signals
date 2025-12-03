import { httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = 'api/products';

  productResource = httpResource<Products[]>(() => this.productsUrl, {
    defaultValue: [],
  });
}
