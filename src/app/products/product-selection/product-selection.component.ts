import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductData } from '../product-data';

@Component({
  selector: 'app-product-selection',
  imports: [FormsModule],
  templateUrl: './product-selection.component.html',
  styleUrl: './product-selection.component.css',
})
export class ProductSelectionComponent {
  pageTitle = 'Bakery Products';

  quantity = signal(1);

  products = signal(ProductData.products);
}
