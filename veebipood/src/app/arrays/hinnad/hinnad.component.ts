import { Component, OnInit } from '@angular/core';
import { HindService } from '../../services/hind.service';

@Component({
  selector: 'app-hinnad',
  imports: [],
  templateUrl: './hinnad.component.html',
  styleUrl: './hinnad.component.css'
})
export class HinnadComponent implements OnInit {
  hinnad: number[] = [];

  constructor(private hindService: HindService) {}

  ngOnInit() {
    this.hinnad = this.hindService.hinnad.slice();
  }

  sorteeriKasvavalt() {
    this.hinnad.sort((a, b) => a - b);
  }

  sorteeriKahanevalt() {
    this.hinnad.sort((a, b) => b - a);
  }

  filtreeriSuuremadKui500() {
    this.hinnad = this.hindService.hinnad.filter(hind => hind > 500);
  }

  filtreeriVaiksemadKui10() {
    this.hinnad = this.hindService.hinnad.filter(hind => hind < 10);
  }

  reset() {
    this.hinnad = this.hindService.hinnad.slice();
  }
}
