import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { computed } from 'mobx-angular';
import CategoryService from '../../_services/category.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'store-app-categories-page',
  template: `
    <div *mobxAutorun>
      <h1>Categories</h1>
      <ul *ngFor="let category of categories">
        <li>
          <a [routerLink]="[category.id]"> {{ category.id }} {{ category.name }}</a>
        </li>
      </ul>
    </div>

    <router-outlet></router-outlet>
  `,
})
export class CategoriesPageComponent implements OnInit {
  @computed
  get categories() {
    return this.categoryService.categories;
  }

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getAll();
  }
}
