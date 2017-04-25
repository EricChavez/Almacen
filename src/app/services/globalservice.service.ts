import { Injectable } from '@angular/core';

@Injectable()
export class GlobalserviceService {
  url: string = "http://192.168.50.31:8000";

  constructor() { }
  getUrl() {
    return this.url;
  }
}
