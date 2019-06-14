import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './services/guards/auth.guard';


const routes: Routes = [
  { path : '' , component:HomeComponent , },
  {path : 'login' , component:LoginComponent},
  {path : 'signup' , component:SignupComponent},
  {path:'dashboard', component:DashboardComponent ,canActivate:[AuthGuard]},
  {path: '**' , component : NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
