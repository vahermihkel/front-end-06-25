import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  autod = ["Ferrari", "Ford", "Lamborghini", "BMW", "Tesla", "Mercedes"];

  constructor() { }
}
