import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HindService } from '../../services/hind.service';

@Component({
  selector: 'app-yks-hind',
  imports: [],
  templateUrl: './yks-hind.component.html',
  styleUrl: './yks-hind.component.css'
})
export class YksHindComponent implements OnInit {
  hind!: {number:number, sonana:string};

  constructor(private route: ActivatedRoute,
    private hindService: HindService
  ) {}

  ngOnInit(): void {
    const index = this.route.snapshot.paramMap.get("index");
    const leitud = this.hindService.hinnad[Number(index)];
    // if (leitud !== undefined) {
      this.hind = leitud;
    // }
  }
}
