import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: ParentNode;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'hello-angular'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('hello-angular');
  });

  it('should have the main navigation bar component', () => {
    expect(compiled.querySelectorAll('main-navigation-bar')).toBeTruthy();
  });

  it('should have a router outlet', () => {
    expect(compiled.querySelectorAll('router-outlet')).toBeTruthy();
  });
});
