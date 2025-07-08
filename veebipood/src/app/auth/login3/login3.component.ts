import { Component, OnInit } from '@angular/core';
import { KasutajaService } from '../../services/kasutaja.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login3',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login3.component.html',
  styleUrl: './login3.component.css'
})
export class Login3Component implements OnInit {
  // Reactive-form
  loginForm!: FormGroup;

  constructor(private kasutajadService: KasutajaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl("@gmail.com"),
      parool: new FormControl()
    })
  }
  
  logiSisse() {
    console.log(this.loginForm) // <--- kogu vorm koos kõigi tema omadustega
    console.log(this.loginForm.value) // kõik selle vormi väärtused. pean niimoodi kirjutama
    console.log(this.loginForm.value.email) // <input ngModel name="email" <----
    console.log(this.loginForm.value.parool) // <input ngModel name="parool" <----

    const leitud = this.kasutajadService.kasutajad
        .find(tsykliSiseneKasutaja => tsykliSiseneKasutaja.email === this.loginForm.value.email)
    if (leitud === undefined) {
      alert("Sellise e-mailiga kasutaja puudub!");
      return;
    }

    // Service-st .find()      ngModel abil HTMLst
     if (leitud.parool !== this.loginForm.value.parool) {
      alert("Parool vale!");
      return;
    }

    this.router.navigateByUrl("/");    
  }
}

