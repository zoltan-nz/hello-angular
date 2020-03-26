import { Directive, HostListener, Inject, InjectionToken, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

export const DEBOUNCE_TIME_MS: InjectionToken<number> = new InjectionToken<number>('DebounceTimeMS', {
  providedIn: 'root',
  factory: () => 1000,
});

@Directive({
  selector: '[trackActivity]',
})
export class TrackActivityDirective implements OnInit {
  public scrollStream$ = fromEvent(document, 'scroll').pipe(debounceTime(this.debounceTimer));

  constructor(@Inject(DEBOUNCE_TIME_MS) private debounceTimer) {}

  ngOnInit(): void {
    this.scrollStream$.subscribe(() => this.rxjsScrollCallBack());
  }

  rxjsScrollCallBack() {
    console.log('rxjs scroll');
  }

  @HostListener('document:scroll')
  hostListenerScrollCallBack() {
    console.log('hostListener scroll');
  }
}
