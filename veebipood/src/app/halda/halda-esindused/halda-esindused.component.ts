import { Component } from '@angular/core';
import { EsindusService } from '../../services/esindus.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-halda-esindused',
  imports: [FormsModule],
  templateUrl: './halda-esindused.component.html',
  styleUrl: './halda-esindused.component.css'
})
export class HaldaEsindusedComponent {
  esindused: string[] = [];
  uusEsindus = "";

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
