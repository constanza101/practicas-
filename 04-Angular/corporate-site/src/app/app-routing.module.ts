import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductoComponent } from './producto/producto.component';
import { PersonalComponent } from './personal/personal.component';
import { Per1Component } from './per1/per1.component';
import { Per2Component } from './per2/per2.component';
import { Per3Component } from './per3/per3.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'product', component: ProductoComponent},
  {path:'personal', component: PersonalComponent},
  {path:'marta', component: Per1Component},
  {path:'jose', component: Per2Component},
  {path:'gabriel', component: Per3Component},
  {path:'', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
