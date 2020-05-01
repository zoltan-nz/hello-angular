import { Injectable } from '@angular/core';
import { action, computed } from 'mobx-angular';
import CategoryAdapter from './category.adapter';

@Injectable({
  providedIn: 'root',
})
export default class CategoryService {
  @computed
  get categories() {
    return this.categoryAdapter.categories;
  }

  constructor(private categoryAdapter: CategoryAdapter) {}

  @action.bound
  getAll() {
    this.categoryAdapter.loadAll$().subscribe();
  }
}
