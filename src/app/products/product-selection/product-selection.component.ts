import {
  Component,
  computed,
  effect,
  linkedSignal,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductData } from '../product-data';
import { Products } from '../product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-selection',
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './product-selection.component.html',
  styleUrl: './product-selection.component.css',
})
export class ProductSelectionComponent {
  pageTitle = 'Bakery Products';

  selectedProduct = signal<Products | undefined>(undefined);

  quantity = linkedSignal({
    source: this.selectedProduct,
    computation: (p) => 1,
  });

  products = signal(ProductData.products);

  total = computed(
    () => (this.selectedProduct()?.price ?? 0) * this.quantity()
  );
  color = computed(() => (this.total() > 0 ? 'green' : 'red'));

  onIncrease() {
    this.quantity.update((qty) => qty + 1);
  }

  onDecrease() {
    this.quantity.update((qty) => (qty <= 0 ? 0 : qty - 1));
  }

  eff = effect(() => console.log(this.quantity()));
}
