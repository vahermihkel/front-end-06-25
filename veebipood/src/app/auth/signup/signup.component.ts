import { Component } from '@angular/core';
import { KasutajaService } from '../../services/kasutaja.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  kasutaja = {nimi: "", email: "", parool: "" };
  parooliKordus = "";

  constructor(private kasutajaService: KasutajaService,
    private router: Router
  ) {}

  lisa() {
    if (this.kasutaja.parool !== this.parooliKordus) {
      alert("Paroolid ei ühti!");
      return;
    }

    this.kasutajaService.kasutajad.push(this.kasutaja);
    this.router.navigateByUrl("/login");
  }
}
