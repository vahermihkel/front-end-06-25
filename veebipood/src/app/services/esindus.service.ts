import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EsindusService {
  esindused = [
    {"keskus": "Ülemiste", "tel": "51312312", "aadress": "Suur-Sõjamäe 77"},
    {"keskus": "Kristiine", "tel": "51312313", "aadress": "Endla 41"},
    {"keskus": "Rocca al Mare", "tel": "51312314", "aadress": "Loomaaia 55"},
    {"keskus": "Vesse", "tel": "51312315", "aadress": "Vesi 123"},
    {"keskus": "Järveotsa", "tel": "51312316", "aadress": "Järve 542"},
    {"keskus": "Magistrali", "tel": "51312317", "aadress": "Mägi 23"},
    {"keskus": "Viru keskus", "tel": "51312318", "aadress": "Viru 99"}
  ];

  constructor() { }
}
