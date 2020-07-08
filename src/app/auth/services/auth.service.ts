import { ProfileUserComponent } from './../../profile/components/profile-user/profile-user.component';
import { UpdateProfile } from './../store/auth.actions';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User | null>;
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) { }


  register(email: string, password: string) {
    return from(this.afAuth.createUserWithEmailAndPassword(email, password));
  }

  /* updateProfile(displayName: string, photoUrl: string) {
    const userProfile = this.afAuth.currentUser;
    if (userProfile) {
      return from(userProfile.ProfileUserComponent({dis})) as any );
    }
  } */

  login(email: string, password: string) {
    return from(this.afAuth.signInWithEmailAndPassword(email, password));
  }

  socialLogin(authProvider: string) {
    let provider: any;
    if (authProvider === 'google') {
      provider = new firebase.auth.GoogleAuthProvider();
    }

    if (authProvider === 'facebook') {
      provider = new firebase.auth.FacebookAuthProvider();
    }

    if (authProvider === 'twitter') {
      provider = new firebase.auth.TwitterAuthProvider();
    }
    return from(this.afAuth.signInWithPopup(provider));
  }

  logout(uid: string) {
    this.updateOnlineStatus(uid, false);
    return from(this.afAuth.signOut());
  }

  saveUser(user: User) {
    const users = this.db.object('users/' + user.uid);
    return users.set(user);
  }

  updateOnlineStatus(uid: string, status: boolean) {
    if (status) {
      this.db.database.ref().child('users/' + uid).onDisconnect().update({ isOnline: false });
    }
    return from(this.db.object('users/' + uid).update({ isOnline: status }));
  }

  checkUserRole(uid: string) {
    return this.db.object('admins/' + uid).valueChanges();
  }

  getAuthState() {
    return this.afAuth.authState;
  }

  getCurrentUser() {
    return this.afAuth.currentUser;
  }
}
