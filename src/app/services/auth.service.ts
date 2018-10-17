import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      // email and pw coming from the parameters
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        // returns a promise where it gives the user data and use resolve when we wanna return something from the promise
        .then(userData => resolve(userData),
          err => reject(err))
    });
  }

  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      // email and pw coming from the parameters
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        // returns a promise where it gives the user data and use resolve when we wanna return something from the promise
        .then(userData => resolve(userData),
          err => reject(err))
    });
  }


  //function to check if we are logged in
  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
