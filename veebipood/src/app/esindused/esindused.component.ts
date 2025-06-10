import { Component, OnInit } from '@angular/core';
import { EsindusService } from '../services/esindus.service';

@Component({
  selector: 'app-esindused',
  imports: [],
  templateUrl: './esindused.component.html',
  styleUrl: './esindused.component.css'
})
export class EsindusedComponent implements OnInit {
  linn = "Tallinn";
  tallinnaKeskused: string[] = [];

  constructor(private esindusService: EsindusService) {}

  ngOnInit() {
    this.tallinnaKeskused = this.esindusService.esindused;
  }

}
