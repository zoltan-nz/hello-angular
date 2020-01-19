import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import mirageServer from '../../mirage/mirage.server';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hello-angular';
  public queryParams$: Observable<ParamMap>;

  constructor(private route: ActivatedRoute) {
    this.queryParams$ = this.route.queryParamMap.pipe(map((params: ParamMap) => params));
  }
  ngOnInit(): void {
    this.queryParams$.subscribe(this.manageMirageMockServer);
  }

  manageMirageMockServer(paramMap: ParamMap) {
    const mirageParam: string = paramMap.get('mirage');

    if (mirageParam === 'on') {
      mirageServer.start();
    }

    if (mirageParam === 'off') {
      mirageServer.stop();
    }
  }

  mirageOn() {
    mirageServer.start();
  }

  mirageOff() {
    mirageServer.stop();
  }
}
