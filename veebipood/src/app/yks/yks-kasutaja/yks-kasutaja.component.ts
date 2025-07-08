import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KasutajaService } from '../../services/kasutaja.service';

@Component({
  selector: 'app-yks-kasutaja',
  imports: [],
  templateUrl: './yks-kasutaja.component.html',
  styleUrl: './yks-kasutaja.component.css'
})
export class YksKasutajaComponent implements OnInit {
  kasutaja!: {email: string, parool: string};

  constructor(private route: ActivatedRoute,
    private kasutajaService: KasutajaService
  ) {}

  ngOnInit(): void {
    const email = this.route.snapshot.paramMap.get("email");
    const leitud = this.kasutajaService.kasutajad.find(kasutaja => kasutaja.email === email);
    if (leitud !== undefined) {
      this.kasutaja = leitud;
    } 
  }
}
