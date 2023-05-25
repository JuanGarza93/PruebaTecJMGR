import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentTableComponent } from './Componentes/content-table/content-table.component';
import { DetailCardComponent } from './Componentes/detail-card/detail-card.component';

const routes: Routes = [
  {path: 'home', component: ContentTableComponent},
  {path: 'detail/:id', component: DetailCardComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
