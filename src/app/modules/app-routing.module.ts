import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../components/home/home.component";
import {AdminComponent} from "../components/admin/admin.component";

const routes: Routes = [
  {path: '', redirectTo: '/admin', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
