import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SagesseComponent }     from './sagesse/sagesse.component';
import { NoahGabrielComponent } from './noah-gabriel/noah-gabriel.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/sagesse', pathMatch: 'full' },
  { path: 'sagesse', component: SagesseComponent },
  { path: 'noah-gabriel', component: NoahGabrielComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
