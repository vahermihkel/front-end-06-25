import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Kasutaja } from '../models/Kasutaja';

@Injectable({
  providedIn: 'root'
})
export class KasutajaService {
  //sisselogitud = new Subject(); // algväärtust pole
  sisselogitud = new BehaviorSubject(sessionStorage.getItem("token") !== null);
  kasutajad = [
    {"nimi": "admin", "email": "admin@veebipood.ee", "parool": "midagi"},
    {"nimi": "Toomas","email": "tere@gmail.com", "parool": "midagi"},
    {"nimi": "Jaanus","email": "jou@gmail.com", "parool": "midagi"},
    {"nimi": "Henno","email": "hei@gmail.com", "parool": "midagi"},
    {"nimi": "Howard","email": "howdy@gmail.com", "parool": "midagi"},
    {"nimi": "Tõnu","email": "tervist@gmail.com", "parool": "midagi"},
    {"nimi": "Teini","email": "tervitus@gmail.com", "parool": "midagi"},
  ]
  // sisselogitudKasutaja: Kasutaja | undefined = this.otsiKasutaja();

  constructor() { }

  otsiKasutaja() {
    return this.kasutajad.find(kasutaja => kasutaja.email === sessionStorage.getItem("token"));
    
    // return this.kasutajad.find(kasutaja => {
    //   console.log(kasutaja);
    //   console.log(sessionStorage.getItem("token"));
    //   return kasutaja.email === sessionStorage.getItem("token")
    // });
  }
}
