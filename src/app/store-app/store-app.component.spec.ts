import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreAppComponent } from './store-app.component';
import { RouterTestingModule } from '@angular/router/testing';
import {TopBarComponent} from "./top-bar/top-bar.component";

describe('StoreAppComponent', () => {
  let component: StoreAppComponent;
  let fixture: ComponentFixture<StoreAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [StoreAppComponent, TopBarComponent],
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
