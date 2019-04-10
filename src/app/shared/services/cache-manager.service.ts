import { Injectable } from "@angular/core";
import { HttpResponse } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CacheManagerService {
  constructor() {}

  private cache = new Map();

  save(url: string, response: HttpResponse<any>) {
    this.cache.set(url, response);
  }

  get(url: string) {
    return this.cache.get(url);
  }

  has(url: string) {
    return this.cache.has(url);
  }
}
