import { Component } from '@angular/core';

@Component({
  selector: 'app-avaleht',
  imports: [],
  templateUrl: './avaleht.component.html',
  styleUrl: './avaleht.component.css'
})
export class AvalehtComponent {
  kogus = 0;
  sonum = "Muuda kogust!";
  laigitud = false;

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
