import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from '../fixtures/mock-heroes';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Promise<Hero[]> {
    return new Promise(resolve => setTimeout(() => resolve(HEROES), 2000));
  }
}
