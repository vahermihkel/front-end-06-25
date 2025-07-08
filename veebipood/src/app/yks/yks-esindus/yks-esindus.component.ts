import { Component } from '@angular/core';
import { Esindus } from '../../models/Esindus';
import { EsindusService } from '../../services/esindus.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-yks-esindus',
  imports: [],
  templateUrl: './yks-esindus.component.html',
  styleUrl: './yks-esindus.component.css'
})
export class YksEsindusComponent {
  esindus!: Esindus; // hüüumärk --> alguses väärtust ei anna

  constructor(private esindusService: EsindusService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //     this.autod = this.autoService.autod.filter(auto => auto.nimi.length <= 7);
    const pood = this.route.snapshot.paramMap.get("pood");

    const leitud = this.esindusService.esindused.find(esindus => esindus.keskus === pood);
    if (leitud) {
      this.esindus = leitud;
    }
  }
}
