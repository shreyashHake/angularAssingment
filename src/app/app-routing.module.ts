import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { AboutusComponent } from './myComponents/aboutus/aboutus.component';
import { RegisterComponent } from './auth/register/register.component';
import { CustomerComponent } from './myComponents/customer/customer.component';
import { HomeComponent } from './myComponents/home/home.component';
import { OrderComponent } from './myComponents/order/order.component';
import { PagenotfoundComponent } from './myComponents/pagenotfound/pagenotfound.component';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },


  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'order', component: OrderComponent, canActivate: [AuthGuard] },
  { path: 'customer', component: CustomerComponent, canActivate: [AuthGuard] },
  { path: 'aboutus', component: AboutusComponent, canActivate: [AuthGuard] },
  { path: '**', component: PagenotfoundComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
