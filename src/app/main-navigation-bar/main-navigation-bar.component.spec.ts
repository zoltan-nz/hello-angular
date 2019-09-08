import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavigationBarComponent } from './main-navigation-bar.component';

describe('MainNavigationBarComponent', () => {
  let component: MainNavigationBarComponent;
  let fixture: ComponentFixture<MainNavigationBarComponent>;
  let compiled: ParentNode;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainNavigationBarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render expected menu items', () => {
    expect(compiled.querySelectorAll('.nav-item').length).toBe(1);
  });
});
