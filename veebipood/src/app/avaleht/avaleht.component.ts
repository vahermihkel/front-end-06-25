import { DatePipe, PercentPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-avaleht',
  imports: [RouterLink, DatePipe, PercentPipe],
  templateUrl: './avaleht.component.html',
  styleUrl: './avaleht.component.css'
})
export class AvalehtComponent {
  kogus = 0;
  sonum = "Muuda kogust!";
  laigitud = false;
  kuupaev = new Date(); // praegune kellaaeg ja kuupäev
  protsent = 0.25;

  nulli() {
    this.kogus = 0;
    this.sonum = "Kogus nullitud!";
  }

  vahenda() {
    this.kogus = this.kogus - 1;
    this.sonum = "Kogus vähendatud!"
  }

  suurenda() {
    this.kogus = this.kogus + 1;
    this.sonum = "Kogus suurendatud!"
  }
}
