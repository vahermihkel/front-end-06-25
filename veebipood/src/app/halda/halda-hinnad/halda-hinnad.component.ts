import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HindService } from '../../services/hind.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-halda-hinnad',
  imports: [FormsModule, RouterLink],
  templateUrl: './halda-hinnad.component.html',
  styleUrl: './halda-hinnad.component.css'
})
export class HaldaHinnadComponent implements OnInit {
  hinnad: {number: number, sonana: string}[] = [];
  hind = {number: 0, sonana: ""};

  constructor(private hindService: HindService) {}

  ngOnInit() {
    this.hinnad = this.hindService.hinnad;
  }

  lisa() {
    if (this.hind.number <= 0) {
      alert("Peab olema positiivne number!");
      return;
    }
    this.hinnad.push(this.hind);
    this.hind = {number: 0, sonana: ""};
  }

  kustuta(index: number) {
    this.hinnad.splice(index,1);
  }
}
