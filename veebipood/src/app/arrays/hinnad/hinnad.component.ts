import { Component, OnInit } from '@angular/core';
import { HindService } from '../../services/hind.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hinnad',
  imports: [RouterLink],
  templateUrl: './hinnad.component.html',
  styleUrl: './hinnad.component.css'
})
export class HinnadComponent implements OnInit {
  hinnad: {number: number, sonana: string}[] = [];

  constructor(private hindService: HindService) {}

  ngOnInit() {
    this.hinnad = this.hindService.hinnad.slice();
  }

  sorteeriKasvavalt() {
    this.hinnad.sort((a, b) => a.number - b.number);
  }

  sorteeriKahanevalt() {
    this.hinnad.sort((a, b) => b.number - a.number);
  }

  filtreeriSuuremadKui500() {
    this.hinnad = this.hindService.hinnad.filter(hind => hind.number > 500);
  }

  filtreeriVaiksemadKui10() {
    this.hinnad = this.hindService.hinnad.filter(hind => hind.number < 10);
  }

  reset() {
    this.hinnad = this.hindService.hinnad.slice();
  }
}
