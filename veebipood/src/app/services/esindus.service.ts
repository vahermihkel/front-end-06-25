import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EsindusService {
  esindused = [
    "Ülemiste",
    "Kristiine",
    "Rocca al Mare",
    "Vesse",
    "Järveotsa",
    "Magistrali",
    "Viru keskus"
  ];

  constructor() { }
}
