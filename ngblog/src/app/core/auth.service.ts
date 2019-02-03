import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
authstate:any=null
  constructor(public afAuth:AngularFireAuth) {
    this.afAuth.authstate.subscribe(data=>this.authstate=data)
  }
  get Authenticated():boolean{
    return this.authstate!==null
  }
  get currentUserId():string{
    return this.Authenticated ? this.authstate.uid : null
  }
login(){
  this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
}
logout(){
  this.afAuth.auth.signOut();
}

}
