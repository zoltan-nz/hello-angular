import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { action, observable } from 'mobx-angular';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ICategoryResponse } from '../models/category.interface';
import Category from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export default class CategoryAdapter {
  private url = '/api/categories';

  @observable public categories: Category[] = [];
  @observable public error: Error;

  constructor(private http: HttpClient) {}

  loadAll$() {
    return this.http.get<ICategoryResponse>(this.url).pipe(catchError(this.handleError), map(this.serialize));
  }

  @action
  private serialize = (categoryResponse: ICategoryResponse): void => {
    this.categories = categoryResponse.categories.map((category) => new Category(category));
  };

  @action
  private handleError = (err: any, caught: Observable<ICategoryResponse>) => {
    this.error = err;
    return throwError(this.error);
  };
}
