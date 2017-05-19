import { Injectable } from '@angular/core';

@Injectable()
export class Globalservice{
  url: string = "http://localhost:48008";

  constructor() { }
  getUrl() {
    return this.url;
  }
}
