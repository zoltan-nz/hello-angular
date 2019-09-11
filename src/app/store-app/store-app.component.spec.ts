import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreAppComponent } from './store-app.component';
import { RouterModule } from '@angular/router';

describe('StoreAppComponent', () => {
  let component: StoreAppComponent;
  let fixture: ComponentFixture<StoreAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StoreAppComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
