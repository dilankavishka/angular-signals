import { Component, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductData } from '../product-data';
import { Products } from '../product';

@Component({
  selector: 'app-product-selection',
  imports: [FormsModule],
  templateUrl: './product-selection.component.html',
  styleUrl: './product-selection.component.css',
})
export class ProductSelectionComponent {
  pageTitle = 'Bakery Products';

  selectedProduct = signal<Products | undefined>(undefined);

  quantity = signal(1);

  products = signal(ProductData.products);

  onIncrease() {
    this.quantity.update((qty) => qty + 1);
  }

  onDecrease() {
    this.quantity.update((qty) => (qty <= 0 ? 0 : qty - 1));
  }

  eff = effect(() => console.log(this.quantity()));
}
