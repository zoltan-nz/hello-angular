import { Component, OnInit } from '@angular/core';
import { Hero } from './models/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Hero App';

  constructor() {}

  ngOnInit() {}

}
