import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OstukorvService {
  ostukorvSubject = new BehaviorSubject(0);

  ostukorv:{ nimi: string; hind: number; aktiivne: boolean; pilt: string; }[] = [];

  constructor() { }
}
