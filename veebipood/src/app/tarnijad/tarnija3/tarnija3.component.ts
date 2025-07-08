import { Component } from '@angular/core';
import { TarnijaService } from '../../services/tarnija.service';

@Component({
  selector: 'app-tarnija3',
  imports: [],
  templateUrl: './tarnija3.component.html',
  styleUrl: './tarnija3.component.css'
})
export class Tarnija3Component {
  products: any[] = [];
  
  constructor(private tarnijaService: TarnijaService) {}

  ngOnInit(): void {
    this.tarnijaService.teeAPIParingTarnija3().subscribe(vastus => {
      this.products = vastus.books;
    });
  }
}
