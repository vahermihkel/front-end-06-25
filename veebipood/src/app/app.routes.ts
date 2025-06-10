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
import { HaldaHomeComponent } from './halda/halda-home/halda-home.component';
import { HaldaAutodComponent } from './halda/halda-autod/halda-autod.component';
import { HaldaEsindusedComponent } from './halda/halda-esindused/halda-esindused.component';
import { HaldaHinnadComponent } from './halda/halda-hinnad/halda-hinnad.component';
import { HaldaKasutajadComponent } from './halda/halda-kasutajad/halda-kasutajad.component';
import { HaldaTootajadComponent } from './halda/halda-tootajad/halda-tootajad.component';
import { HaldaTootedComponent } from './halda/halda-tooted/halda-tooted.component';

export const routes: Routes = [
  {path: "", component: AvalehtComponent},
  {path: "kinkekaardid", component: KinkekaardidComponent},
  {path: "lisa-toode", component: LisaToodeComponent},
  {path: "ostukorv", component: OstukorvComponent},
  {path: "seaded", component: SeadedComponent},
  {path: "kalkulaator", component: KalkulaatorComponent},
 
  {path: "arrays-home", component: HomeComponent},
  {path: "autod", component: AutodComponent},
  {path: "esindused", component: EsindusedComponent},
  {path: "hinnad", component: HinnadComponent},
  {path: "kasutajad", component: KasutajadComponent},
  {path: "tootajad", component: TootajadComponent},
  {path: "tooted", component: TootedComponent},

  {path: "halda-home", component: HaldaHomeComponent},
  {path: "halda-autod", component: HaldaAutodComponent},
  {path: "halda-esindused", component: HaldaEsindusedComponent},
  {path: "halda-hinnad", component: HaldaHinnadComponent},
  {path: "halda-kasutajad", component: HaldaKasutajadComponent},
  {path: "halda-tootajad", component: HaldaTootajadComponent},
  {path: "halda-tooted", component: HaldaTootedComponent},

  {path: "**", component: NotFoundComponent},
];
