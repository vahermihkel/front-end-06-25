import { Component } from '@angular/core';
import { TarnijaService } from '../../services/tarnija.service';

@Component({
  selector: 'app-tarnija2',
  imports: [],
  templateUrl: './tarnija2.component.html',
  styleUrl: './tarnija2.component.css'
})
export class Tarnija2Component {
  products: any[] = [];
  
  constructor(private tarnijaService: TarnijaService) {}

  ngOnInit(): void {
    this.tarnijaService.teeAPIParingTarnija2().subscribe(vastus => {
      this.products = vastus;
    });
  }
}
