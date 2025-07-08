import { Component, OnInit } from '@angular/core';
import { EsindusService } from '../services/esindus.service';
import { RouterLink } from '@angular/router';
import { Esindus } from '../models/Esindus';

@Component({
  selector: 'app-esindused',
  imports: [RouterLink],
  templateUrl: './esindused.component.html',
  styleUrl: './esindused.component.css'
})
export class EsindusedComponent implements OnInit {
  linn = "Tallinn";
  tallinnaKeskused: Esindus[] = [];

  constructor(private esindusService: EsindusService) {}

  ngOnInit() {
    this.tallinnaKeskused = this.esindusService.esindused;
  }

}
