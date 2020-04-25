import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { action, computed, observable } from 'mobx-angular';
import CategoryService from '../services/category.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'store-app-category-page',
  template: `
    <div *mobxAutorun>
      <h1>{{ categoryId }}</h1>

      <p>Category ID: {{ categoryId }}</p>
    </div>
  `,
})
export class CategoryPageComponent {
  @observable categoryId: string;

  @computed
  get categories() {
    return this.categoryService.categories;
  }

  constructor(private categoryService: CategoryService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(this.updateCategoryIdFromUrlParam);
  }

  @action updateCategoryIdFromUrlParam = (paramMap: ParamMap) => {
    this.categoryId = paramMap.get('categoryId');
  };
}
