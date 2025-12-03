import { InMemoryDbService } from 'angular-in-memory-web-api';

import { ProductData } from './products/product-data';
import { Products } from './products/product';

// Required class for the In Memory Web API
export class AppData implements InMemoryDbService {
  // Creates the 'in memory' database
  // Can then issue http requests to retrieve this data,
  // just as if the data were located on a backend server
  createDb(): { products: Products[] } {
    const products = ProductData.products;
    return { products };
  }
}
