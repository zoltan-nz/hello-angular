import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { action, computed, observable } from 'mobx-angular';
import Product from '../../_models/product.model';
import CategoryService from '../../_services/category.service';
import { ProductService } from '../../_services/product.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'store-app-category-page',
  providers: [ProductService],
  template: `
    <div *mobxAutorun>
      <h1>{{ categoryId }}</h1>

      <p>Category ID: {{ categoryId }}</p>

      <ul *ngFor="let product of products">
        <li>{{ product.id }} {{ product.name }}</li>
      </ul>
    </div>
  `,
})
export class CategoryPageComponent {
  @observable categoryId: string;

  @computed
  get categories() {
    return this.categoryService.categories;
  }

  @computed
  get products(): Product[] {
    return this.productService.products;
  }

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.paramMap.subscribe(this.updateCategoryIdFromUrlParam);
  }

  @action updateCategoryIdFromUrlParam = (paramMap: ParamMap) => {
    this.categoryId = paramMap.get('categoryId');
    this.productService.getAllByCategoryId(this.categoryId).subscribe();
  };
}
