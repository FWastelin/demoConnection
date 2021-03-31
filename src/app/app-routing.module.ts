import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './components/pages/edit/edit.component';
import { HomeComponent } from './components/pages/home/home.component';
import { InfoComponent } from './components/pages/info/info.component';
import { ListingComponent } from './components/pages/listing/listing.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { Error404Component } from './components/shared/error404/error404.component';
import { AuthService } from './services/auth.service';
import { AuthguardService } from './services/authguard.service';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch : 'full'},
  {path: 'home', component : HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'listing', canActivate:[AuthguardService], component : ListingComponent},
  {path: 'info/:id', canActivate:[AuthService], component : InfoComponent},
  {path: 'edit/:id', canActivate:[AuthService], component : EditComponent},
  
  {path:'notfound', component : Error404Component},
  {path: '**', redirectTo: 'notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
