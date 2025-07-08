import { Component } from '@angular/core';
import { EsindusService } from '../../services/esindus.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Esindus } from '../../models/Esindus';

@Component({
  selector: 'app-halda-esindused',
  imports: [FormsModule, RouterLink],
  templateUrl: './halda-esindused.component.html',
  styleUrl: './halda-esindused.component.css'
})
export class HaldaEsindusedComponent {
  esindused: Esindus[] = [];
  uusEsindus = {keskus: "", tel: "", aadress: ""};

  constructor(private esindusService: EsindusService) {}

  ngOnInit() {
    this.esindused = this.esindusService.esindused;
  }

  lisa() {
    this.esindused.push(this.uusEsindus);
  }

  kustuta(index: number) {
    this.esindused.splice(index,1);
  }
}
