import { Component } from '@angular/core';

@Component({
  selector: 'app-autod',
  imports: [],
  templateUrl: './autod.component.html',
  styleUrl: './autod.component.css',
})
export class AutodComponent {
  autod = [
    'Ferrari',
    'BMW',
    'Audi',
    'Mercedes',
    'Lamborghini',
    'Tesla',
    'Aston Martin',
    'Hyundai',
    'Volkswagen',
    'Subaru',
  ];

   reset() {
    this.autod = [
    'Ferrari',
    'BMW',
    'Audi',
    'Mercedes',
    'Lamborghini',
    'Tesla',
    'Aston Martin',
    'Hyundai',
    'Volkswagen',
    'Subaru',
  ];
  }

  sorteeriAZ() {
    this.autod.sort((a,b) => a.localeCompare(b));
  }

  sorteeriZA() {
    this.autod.sort((a,b) => b.localeCompare(a));
  }

  sorteeriTahedKasv() {
    this.autod.sort((a, b) => a.length - b.length);
  }

  sorteeriTahedKah() {
    this.autod.sort((a, b) => b.length - a.length);
  }

  sorteeriKolmasTahtAZ() {                               // 012
    this.autod.sort((a,b) => a[2].localeCompare(b[2]));  // Ferrari
    // this.autod.sort((a,b) => a.at(2).localeCompare(b.at(2)));
    // this.autod.sort((a,b) => a.charAt(2).localeCompare(b.charAt(2)));
  }

  filtreeriIgaLoppevad() {
    this.autod = this.autod.filter(auto => auto.endsWith("i"));
  }

  filtreeri7Tahelised() {
    this.autod = this.autod.filter(auto => auto.length === 7);
  }

  filtreeriKuni7Tahelised() {
    this.autod = this.autod.filter(auto => auto.length <= 7);
  }

  filtreeriKellelLyhendAr() {
    this.autod = this.autod.filter(auto => auto.includes("ar"));
  }

  filtreeriTeineTahtE() {
    this.autod = this.autod.filter(auto => auto[1] === "e");
  }
}
