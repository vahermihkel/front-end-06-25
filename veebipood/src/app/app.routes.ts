import { Routes } from '@angular/router';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';
import { EsindusedComponent } from './esindused/esindused.component';
import { KinkekaardidComponent } from './kinkekaardid/kinkekaardid.component';
import { LisaToodeComponent } from './lisa-toode/lisa-toode.component';
import { SeadedComponent } from './seaded/seaded.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { KalkulaatorComponent } from './kalkulaator/kalkulaator.component';
import { HomeComponent } from './arrays/home/home.component';
import { AutodComponent } from './arrays/autod/autod.component';
import { HinnadComponent } from './arrays/hinnad/hinnad.component';
import { KasutajadComponent } from './arrays/kasutajad/kasutajad.component';
import { TootajadComponent } from './arrays/tootajad/tootajad.component';
import { TootedComponent } from './arrays/tooted/tooted.component';

export const routes: Routes = [
  {path: "", component: AvalehtComponent},
  {path: "esindused", component: EsindusedComponent},
  {path: "kinkekaardid", component: KinkekaardidComponent},
  {path: "lisa-toode", component: LisaToodeComponent},
  {path: "ostukorv", component: OstukorvComponent},
  {path: "seaded", component: SeadedComponent},
  {path: "kalkulaator", component: KalkulaatorComponent},
  {path: "arrays-home", component: HomeComponent},
  {path: "autod", component: AutodComponent},
  {path: "hinnad", component: HinnadComponent},
  {path: "kasutajad", component: KasutajadComponent},
  {path: "tootajad", component: TootajadComponent},
  {path: "tooted", component: TootedComponent},
  {path: "**", component: NotFoundComponent},
];
