import { Component, OnInit } from '@angular/core';
import { AutoService } from '../../services/auto.service';
import { OstukorvService } from '../../services/ostukorv.service';
import { FormsModule } from '@angular/forms';
import { Toode } from '../../models/Toode';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-autod',
  imports: [FormsModule, RouterLink],
  templateUrl: './autod.component.html',
  styleUrl: './autod.component.css',
})
export class AutodComponent implements OnInit {
  // kooloni on tüüp. võrdusmärgiga annan väärtust
  autod: Toode[] = [];
  otsitavaAutoNimi = "";

  constructor(private autoService: AutoService,
    private ostukorvService: OstukorvService
  ) {}

  ngOnInit() {
    this.autod = this.autoService.autod.slice();
  }

   reset() {
    this.autod = this.autoService.autod.slice();
  }

  sorteeriAZ() {
    this.autod.sort((a,b) => a.nimi.localeCompare(b.nimi));
  }

  sorteeriZA() {
    this.autod.sort((a,b) => b.nimi.localeCompare(a.nimi));
  }

  sorteeriTahedKasv() {
    this.autod.sort((a, b) => a.nimi.length - b.nimi.length);
  }

  sorteeriTahedKah() {
    this.autod.sort((a, b) => b.nimi.length - a.nimi.length);
  }

  sorteeriKolmasTahtAZ() {                               // 012
    this.autod.sort((a,b) => a.nimi[2].localeCompare(b.nimi[2]));  // Ferrari
    // this.autod.sort((a,b) => a.at(2).localeCompare(b.at(2)));
    // this.autod.sort((a,b) => a.charAt(2).localeCompare(b.charAt(2)));
  }

  filtreeriIgaLoppevad() {
    this.autod = this.autoService.autod.filter(auto => auto.nimi.endsWith("i"));
  }

  filtreeri7Tahelised() {
    this.autod = this.autoService.autod.filter(auto => auto.nimi.length === 7);
  }

  filtreeriKuni7Tahelised() {
    this.autod = this.autoService.autod.filter(auto => auto.nimi.length <= 7);
  }

  filtreeriKellelLyhendAr() {
    this.autod = this.autoService.autod.filter(auto => auto.nimi.includes("ar"));
  }

  filtreeriTeineTahtE() {
    this.autod = this.autoService.autod.filter(auto => auto.nimi[1] === "e");
  }

  lisaOstukorvi(auto: Toode) {
    // this.ostukorvService.ostukorv.push(auto);
    const ostukorvLS = JSON.parse(localStorage.getItem("ostukorv") || "[]");
    ostukorvLS.push(auto);
    localStorage.setItem("ostukorv", JSON.stringify(ostukorvLS));
    this.ostukorvService.ostukorvSubject.next(0);
  }

  otsi() {
    this.autod = this.autoService.autod.filter(auto => auto.nimi.includes(this.otsitavaAutoNimi));
  }
}
