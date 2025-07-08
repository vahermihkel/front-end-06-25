import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KasutajaService } from '../../services/kasutaja.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // Two-way binding  [(ngModel)]
  kasutaja = { email: "@gmail.com", parool: "" };

  constructor(private kasutajadService: KasutajaService,
    private router: Router
  ) {}

  logiSisse() {
    const leitud = this.kasutajadService.kasutajad
        .find(tsykliSiseneKasutaja => tsykliSiseneKasutaja.email === this.kasutaja.email)
    if (leitud === undefined) {
      alert("Sellise e-mailiga kasutaja puudub!");
      return;
    }

    // Service-st .find()      ngModel abil HTMLst
     if (leitud.parool !== this.kasutaja.parool) {
      alert("Parool vale!");
      return;
    }

    sessionStorage.setItem("token", this.kasutaja.email);
    this.kasutajadService.sisselogitud.next(true);
    this.router.navigateByUrl("/");    
  }
}
