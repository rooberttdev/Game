import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { JogoComponent } from './views/jogo/jogo.component';
import { RankingComponent } from './views/ranking/ranking.component';
import { RegrasJogoComponent } from './views/regras-jogo/regras-jogo.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'jogo', component: JogoComponent},
  { path: 'regras', component: RegrasJogoComponent},
  { path: 'ranking', component: RankingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
