import { Component } from '@angular/core';

@Component({
  selector: 'app-hinnad',
  imports: [],
  templateUrl: './hinnad.component.html',
  styleUrl: './hinnad.component.css'
})
export class HinnadComponent {
  hinnad = [312,13,5,9,5134,6,43,62,123,534];

  sorteeriKasvavalt() {
    this.hinnad.sort((a, b) => a - b);
  }

  sorteeriKahanevalt() {
    this.hinnad.sort((a, b) => b - a);
  }

  filtreeriSuuremadKui500() {
    this.hinnad = this.hinnad.filter(hind => hind > 500);
  }

  filtreeriVaiksemadKui10() {
    this.hinnad = this.hinnad.filter(hind => hind < 10);
  }

  reset() {
    this.hinnad = [312,13,5,9,5134,6,43,62,123,534];
  }
}
