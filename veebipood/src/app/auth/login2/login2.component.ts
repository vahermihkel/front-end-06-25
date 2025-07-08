import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { KasutajaService } from '../../services/kasutaja.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2',
  imports: [FormsModule],
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.css'
})
export class Login2Component {

  constructor(private kasutajadService: KasutajaService,
    private router: Router
  ) {}
  
  // Template-driven form
  logiSisse(vorm: NgForm) {
    console.log(vorm) // <--- kogu vorm koos kõigi tema omadustega
    console.log(vorm.value) // kõik selle vormi väärtused. pean niimoodi kirjutama
    console.log(vorm.value.email) // <input ngModel name="email" <----
    console.log(vorm.value.parool) // <input ngModel name="parool" <----

    const leitud = this.kasutajadService.kasutajad
        .find(tsykliSiseneKasutaja => tsykliSiseneKasutaja.email === vorm.value.email)
    if (leitud === undefined) {
      alert("Sellise e-mailiga kasutaja puudub!");
      return;
    }

    // Service-st .find()      ngModel abil HTMLst
     if (leitud.parool !== vorm.value.parool) {
      alert("Parool vale!");
      return;
    }

    this.router.navigateByUrl("/");    
  }
}
