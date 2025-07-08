import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KasutajaService } from '../../services/kasutaja.service';

@Component({
  selector: 'app-profiil',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './profiil.component.html',
  styleUrl: './profiil.component.css'
})
export class ProfiilComponent implements OnInit {
  // Reactive-form
  profiilForm!: FormGroup;
  private index!: number;

  constructor(private kasutajaService: KasutajaService) {}

  ngOnInit(): void {
    const kasutaja = this.kasutajaService.otsiKasutaja();
    if (kasutaja === undefined) {
      return;
    }
    this.index = this.kasutajaService.kasutajad.indexOf(kasutaja);
    this.profiilForm = new FormGroup({
      nimi: new FormControl(kasutaja.nimi),
      email: new FormControl(kasutaja.email),
      parool: new FormControl(kasutaja.parool)
    })
  }

  muudaKasutajat() {
    this.kasutajaService.kasutajad[this.index] = this.profiilForm.value;
    this.kasutajaService.sisselogitud.next(true);
  }
}
