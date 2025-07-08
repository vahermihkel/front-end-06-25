import { Component } from '@angular/core';
import { KasutajaService } from '../../services/kasutaja.service';
import { FormsModule } from '@angular/forms';
import { Kasutaja } from '../../models/Kasutaja';

@Component({
  selector: 'app-halda-kasutajad',
  imports: [FormsModule],
  templateUrl: './halda-kasutajad.component.html',
  styleUrl: './halda-kasutajad.component.css'
})
export class HaldaKasutajadComponent {
  kasutajad: Kasutaja[] = [];
  kasutaja: Kasutaja = {nimi: "", email: "", parool: "" };

  constructor(private kasutajaService: KasutajaService) {}

  ngOnInit() {
    this.kasutajad = this.kasutajaService.kasutajad;
  }

  lisa() {
    this.kasutajad.push(this.kasutaja);
    this.kasutaja = {nimi: "", email: "", parool: "" };
  }

  kustuta(index: number) {
    this.kasutajad.splice(index,1);
  }
}
