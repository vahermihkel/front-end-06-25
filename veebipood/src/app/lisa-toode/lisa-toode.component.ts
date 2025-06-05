import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lisa-toode',
  imports: [FormsModule], // selleks, et inputi seest väärtusi lugeda [(ngModel)]
  templateUrl: './lisa-toode.component.html',
  styleUrl: './lisa-toode.component.css'
})
export class LisaToodeComponent {
  toode = "";

  lisa() {
    if (this.toode === "") {
      alert("Tühja nimetusega ei saa toodet lisada!");
    } else {
      alert("Toode lisatud: " + this.toode);
      this.toode = "";
    }
  }
}
