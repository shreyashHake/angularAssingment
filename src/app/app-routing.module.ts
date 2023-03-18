import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { UpdatepopComponent } from './updatepop/updatepop.component';
import { AuthGuard } from './guard/auth.guard';
// import { NavigationComponent } from './navigation/navigation.component';
import { OrderComponent } from './order/order.component';
import { AppComponent } from './app.component';
// import { PagenotfoundComponent } from './updatepop copy/pagenotfound.component';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },


  { path: '', component: OrderComponent, canActivate: [AuthGuard] },
  { path: 'order', component: OrderComponent, canActivate: [AuthGuard] },
  { path: 'customer', component: CustomerComponent, canActivate: [AuthGuard] },

  // { path: 'main', component: AppComponent, canActivate: [AuthGuard] },
  // {path:'navigate', component: NavigationComponent},
  { path: 'updatepop', component: UpdatepopComponent },
  // { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
