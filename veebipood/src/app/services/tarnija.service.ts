import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class TarnijaService {

  constructor(private http: HttpClient) { }

  teeAPIParingTarnija1() {
    return this.http.get<Product[]>("https://fakestoreapi.com/products");
  }

  teeAPIParingTarnija2() {
    return this.http.get<any[]>("https://api.escuelajs.co/api/v1/products");
  }

  teeAPIParingTarnija3() {
    return this.http.get<any>("https://api.itbook.store/1.0/search/angular?page=0");
  }
}
