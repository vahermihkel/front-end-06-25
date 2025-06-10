import { Component } from '@angular/core';

@Component({
  selector: 'app-ostukorv',
  imports: [],
  templateUrl: './ostukorv.component.html',
  styleUrl: './ostukorv.component.css'
})
export class OstukorvComponent {
  tooted = ["Coca","Fanta","Sprite", "Red bull"];

  kustuta(index: number) {
    this.tooted.splice(index,1);
  }

  arvutaKogusumma() {
    let summa = 0;
    // summa = 0 + 4;
    // summa = 4 + 5;
    // summa = 9 + 6
    // summa =15 + 8   ---> 23
    this.tooted.forEach(toode => summa = summa + toode.length)
    return summa;
  }
}
