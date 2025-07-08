import { Component } from '@angular/core';
import { Esindus } from '../../models/Esindus';
import { EsindusService } from '../../services/esindus.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-muuda-esindus',
  imports: [FormsModule],
  templateUrl: './muuda-esindus.component.html',
  styleUrl: './muuda-esindus.component.css'
})
export class MuudaEsindusComponent {
  esindus!: Esindus;
  private index!: number; // me ei kasuta seda muutujat HTML-s

  constructor(private esindusService: EsindusService, 
    private route: ActivatedRoute,
    private router: Router
  ) {}
    
  ngOnInit(): void {
    this.index = Number(this.route.snapshot.paramMap.get("index"))

    const leitud = this.esindusService.esindused[this.index];
      this.esindus = leitud;
  }

   muuda() {
    this.esindusService.esindused[this.index] = this.esindus;
    this.router.navigateByUrl("/halda-esindused");
  }
}