import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { KasutajaService } from '../services/kasutaja.service';
import { Kasutaja } from '../models/Kasutaja';
import { Toode } from '../models/Toode';
import { OstukorvService } from '../services/ostukorv.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  sisselogitud = false;
  kasutaja!: Kasutaja | undefined;
  ostukorviKogusumma = 0;

  constructor(private translate: TranslateService,
    private kasutajaService: KasutajaService,
    private ostukorvService: OstukorvService
  ) {}

  ngOnInit(): void {
    this.leiaKasutaja();
    this.arvutaKogusumma();
  }  

  private leiaKasutaja() {
    this.kasutajaService.sisselogitud.subscribe(vastus => {
      this.sisselogitud = vastus;
      if (vastus === true) {
        this.kasutaja = this.kasutajaService.otsiKasutaja();
      } else {
        this.kasutaja = undefined;
      }
    })
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem("keel", language);
  }

  logout() {
    this.kasutajaService.sisselogitud.next(false);
    // .next muudab väärtust, aga käivitab korraga kõik .subscribe kohad
    this.sisselogitud = false;
    sessionStorage.removeItem("token");
  }

  private arvutaKogusumma() {
    this.ostukorvService.ostukorvSubject.subscribe(() => {
      let summa = 0;
      const tooted: Toode[] = JSON.parse(localStorage.getItem("ostukorv") || "[]");
      tooted.forEach(toode => summa = summa + toode.hind)
      this.ostukorviKogusumma = summa;
    })
  }
}
