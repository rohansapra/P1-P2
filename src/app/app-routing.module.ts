import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SiteComponent} from '../app/site/site.component';
const routes: Routes = [
  {path:'Site', component:SiteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
