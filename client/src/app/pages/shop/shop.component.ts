import { Component, inject } from '@angular/core';
import {TelegramService} from "../../services/telegram.service";
import {ProductsService} from "../../services/products.service";
import {ProductListComponent} from "../../components/product-list/product-list.component";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductListComponent],
  template: `
    <app-product-list
      title="Отдельный навык"
      subtitle="Изучите востребованные технологии"
      [products]="products.byGroup['skill']"
    />
    <app-product-list
      title="Интенсивы"
      subtitle="Экспресс-программы"
      [products]="products.byGroup['intensive']"
    />
    <app-product-list
      title="Курсы"
      subtitle="Необходимые навыки и проекты"
      [products]="products.byGroup['course']"
    />
  `,
})
export class ShopComponent {
  telegram = inject(TelegramService);
  products = inject(ProductsService);

  constructor() {
    this.telegram.BackButton.hide();
  }
}
