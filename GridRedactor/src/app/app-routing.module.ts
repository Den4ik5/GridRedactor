import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BaseComponent} from './components/base/base.component';


const routes: Routes = [
  {path: '', redirectTo: '/grid', pathMatch: 'full'},
  {path: '**', redirectTo: '/grid', pathMatch: 'full'},
  {path: 'grid', component: BaseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
