import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

user:Observable<firebase.User>
  constructor( private afAuth:AngularFireAuth) { 
    this.user = afAuth.user
  }
  signup(email , password){
    return this.afAuth.auth.createUserWithEmailAndPassword(email,password)
    }
  login(email,password){
    return this.afAuth.auth.signInWithEmailAndPassword(email,password)
  }
  logout(){
    return this.afAuth.auth.signOut()    
  }

}
