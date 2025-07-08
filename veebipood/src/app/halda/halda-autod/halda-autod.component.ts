import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoService } from '../../services/auto.service';
import { Toode } from '../../models/Toode';
import { RouterLink } from '@angular/router';
import { ShortenerPipe } from '../../pipes/shortener.pipe';
import { PricePipe } from '../../pipes/price.pipe';

@Component({
  selector: 'app-halda-autod',
  imports: [FormsModule, RouterLink, ShortenerPipe, PricePipe],
  templateUrl: './halda-autod.component.html',
  styleUrl: './halda-autod.component.css'
})
export class HaldaAutodComponent implements OnInit {
  autod: Toode[] = [];
  auto: Toode = {nimi: "", hind: 0, aktiivne: false, pilt: ""};
  kasNuppAktiivne = true;

  constructor(private autoService: AutoService) {}

  ngOnInit() {
    this.autod = this.autoService.autod;
  }

  kasUnikaalne() {
    const leitud = this.autoService.autod.find(a => a.nimi === this.auto.nimi);
    if (leitud === undefined) {
      this.kasNuppAktiivne = true;
    } else {
      this.kasNuppAktiivne = false;
    }
  }

  lisa() {
    if (this.auto.nimi === "") {
      alert("Auto nimi ei saa olla tühi!");
      return;
    }

    this.autod.push(this.auto);
    this.auto = {nimi: "", hind: 0, aktiivne: false, pilt: ""};
  }

  kustuta(index: number) { // teistes: .remove(index)   .delete(index)
    this.autod.splice(index, 1); // mitmendat, mitu-tk
  }

}
