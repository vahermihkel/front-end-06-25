import { Component, OnInit } from '@angular/core';
import { OstukorvService } from '../services/ostukorv.service';
import { PakiautomaatService } from '../services/pakiautomaat.service';

@Component({
  selector: 'app-ostukorv',
  imports: [],
  templateUrl: './ostukorv.component.html',
  styleUrl: './ostukorv.component.css'
})
export class OstukorvComponent implements OnInit {
  tooted: { nimi: string; hind: number; aktiivne: boolean; pilt: string; }[] = [];
  pakiautomaadid: any[] = [];

  constructor(private pakiautomaatService: PakiautomaatService,
    private ostukorvService: OstukorvService
  ) {}

  ngOnInit(): void {
    // this.tooted = this.ostukorvService.ostukorv;
    this.tooted = JSON.parse(localStorage.getItem("ostukorv") || "[]");
    this.pakiautomaatService.saaPakiautomaadid().subscribe(vastus => {
      this.pakiautomaadid = vastus.filter(automaat => automaat.A0_NAME === "EE");
    })
  }

  kustuta(index: number) {
    this.tooted.splice(index,1);
    localStorage.setItem("ostukorv", JSON.stringify(this.tooted));
    this.ostukorvService.ostukorvSubject.next(0);
  }

  tyhjenda() {
    this.tooted = [];
    localStorage.setItem("ostukorv", JSON.stringify(this.tooted));
    this.ostukorvService.ostukorvSubject.next(0);
  }

  arvutaKogusumma() {
    let summa = 0;
    // summa = 0 + 4;
    // summa = 4 + 5;
    // summa = 9 + 6
    // summa =15 + 8   ---> 23
    this.tooted.forEach(toode => summa = summa + toode.hind)
    return summa;
  }
}
