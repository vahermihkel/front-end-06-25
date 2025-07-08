import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import {TranslateModule} from "@ngx-translate/core";   // <--- standalone only
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'veebipood';
  isDark = JSON.parse(localStorage.getItem("isDarkTheme") || "false");

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['et', 'en']);
    this.translate.use(localStorage.getItem("keel") || "en");
  }

  setMode(darkTheme: boolean) {
    this.isDark = darkTheme;
    localStorage.setItem("isDarkTheme",JSON.stringify(darkTheme));
  }
}

// 1. 27.05 13.00 Angular algus, routing
// 2. 29.05 14.00 @if, (click), [(ngModel)], firebase
// 3. 03.06 14.00-15.30 kalkulaator
// 4. 05.06 kalkulaatori järk. array algus: @for, sort, filter
// 5. T 10.06 ngOnInit, Service
// 6. N 12.06  15.35-16.15 paus. bootstrap. e-maili saatmine. tõlge.
// 7. T 17.06 objektid, kasutajad, ostukorv. template-driven form
// 8. N 19.06 andmemudelid, localStorage, dünaamiline CSS, URL muutuja
//xx. T 24.06
//09. R 27.06 API päringud
//10. E 30.06 13.00 ---> allkirjalehel26.06 
// pipes, kaardirakendus, unikaalsuse kontroll
//11. T 01.07 14.30 (15.00) reactive form, template-driven form uuesti
//12. T 15.07 13.00    andmebaas, kategooriate haldamine
//13. R 18.07 9.00
//14. T 22.07
//15a N 24.07 poolik
//15b. N 07.08 14.00-15.30 ---> lõpuprojekti esitlemine

// 15*4ak/h = 60ak/h