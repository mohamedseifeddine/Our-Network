import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AngularFireModule} from '@angular/fire'
import {AngularFireAuthModule} from '@angular/fire/auth'
import {AngularFirestoreModule} from '@angular/fire/firestore'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component'
import { NgForm } from '@angular/forms';
import { FormsModule }   from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    NotFoundComponent,
    NavbarComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA6Ml9XH6ebMRyz8E4YjJbEq_mVTEhuFKc",
      authDomain: "ournetwork-c2ba7.firebaseapp.com",
      databaseURL: "https://ournetwork-c2ba7.firebaseio.com",
      projectId: "ournetwork-c2ba7",
      storageBucket: "ournetwork-c2ba7.appspot.com",
      messagingSenderId: "940076451275",
      appId: "1:940076451275:web:df9734a08994ecb2"
    }),
    AngularFireAuthModule,
    AngularFirestoreModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
