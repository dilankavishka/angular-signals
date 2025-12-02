import { Products } from './product';

export class ProductData {
  static products: Products[] = [
    {
      id: 1,
      name: 'Fish Bun',
      description: 'Savory bun filled with spiced fish filling',
      price: 1.2,
    },
    {
      id: 2,
      name: 'Bread',
      description: 'Freshly baked soft white bread, perfect for sandwiches',
      price: 3.1,
    },
    {
      id: 3,
      name: 'Sweet Bread',
      description: 'Delicious sweet bread with a hint of vanilla and sugar',
      price: 1.89,
    },
    {
      id: 4,
      name: 'Cake',
      description: 'Rich chocolate cake with creamy frosting',
      price: 4.5,
    },
    {
      id: 5,
      name: 'Sponge Cake',
      description: 'Light and fluffy vanilla sponge cake',
      price: 0.79,
    },
  ];
}
