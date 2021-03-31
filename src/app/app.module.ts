import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbButtonModule, NbInputModule, NbCardModule, NbListModule, NbDialogModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Error404Component } from './components/shared/error404/error404.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ConfirmboxComponent } from './components/shared/confirmbox/confirmbox.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ListingComponent } from './components/pages/listing/listing.component';
import { InfoComponent } from './components/pages/info/info.component';
import { EditComponent } from './components/pages/edit/edit.component';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthguardService } from './services/authguard.service';
import { DeleteComponent } from './components/pages/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    NavComponent,
    ConfirmboxComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ListingComponent,
    InfoComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbButtonModule,
    NbInputModule,
    NbCardModule,
    NbListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NbDialogModule.forRoot(),
 

  ],
  providers: [
    UserService,
    AuthService,
    AuthguardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
