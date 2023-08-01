import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component'
import { DetalhesComponent } from './pages/detalhes/detalhes.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post/:id', component: DetalhesComponent },
  { path: 'sobre', component: SobreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
