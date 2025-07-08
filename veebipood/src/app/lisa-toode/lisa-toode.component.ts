import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { AutoService } from '../services/auto.service';

@Component({
  selector: 'app-lisa-toode',
  imports: [FormsModule, MatButtonModule], // selleks, et inputi seest väärtusi lugeda [(ngModel)]
  templateUrl: './lisa-toode.component.html',
  styleUrl: './lisa-toode.component.css'
})
export class LisaToodeComponent {

  constructor(private autoService: AutoService) {}

  lisa(lisaTooteVorm: NgForm) {
    if (lisaTooteVorm.value.nimi === "") {
      alert("Tühja nimetusega ei saa toodet lisada!");
    } else {
      alert("Toode lisatud: " + lisaTooteVorm.value.nimi);
      this.autoService.autod.push(lisaTooteVorm.value);
    }
  }
}
