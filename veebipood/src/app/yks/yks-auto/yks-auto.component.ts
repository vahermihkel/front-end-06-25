import { Component, OnInit } from '@angular/core';
import { Toode } from '../../models/Toode';
import { AutoService } from '../../services/auto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-yks-auto',
  imports: [],
  templateUrl: './yks-auto.component.html',
  styleUrl: './yks-auto.component.css'
})
export class YksAutoComponent implements OnInit {
  auto!: Toode; // hüüumärk --> alguses väärtust ei anna

  constructor(private autoService: AutoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //     this.autod = this.autoService.autod.filter(auto => auto.nimi.length <= 7);
    const autoNimi = this.route.snapshot.paramMap.get("mark");

    const leitud = this.autoService.autod.find(auto => auto.nimi === autoNimi);
    if (leitud) {
      this.auto = leitud;
    }
  }
}
