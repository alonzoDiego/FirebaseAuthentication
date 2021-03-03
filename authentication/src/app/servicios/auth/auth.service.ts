import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import 'firebase/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  constructor(public firebaseAuth: AngularFireAuth) {}

  async loginGoodle(){
    try{
      return await this.firebaseAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }catch(error){
      console.log(error)
    }
  }

  async resetPassword(email: string): Promise<void>{
    try{
      return await this.firebaseAuth.sendPasswordResetEmail(email);
    }catch(error){
      console.log(error)
    }
  }

  async sendVerificationEmail(): Promise<void>{
    return await (await this.firebaseAuth.currentUser).sendEmailVerification();
  }

  async logIn(email: string, password: string){
    try{
      const result = await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      return result
    }catch(error){
      console.log(error);
    }
  }

  async signUp(email: string, password: string){
    try{
      const result = await this.firebaseAuth.createUserWithEmailAndPassword(email, password);
      this.sendVerificationEmail();
      return result
    }catch(error){
      console.log(error);
    }
  }

  async logOut(){
    try{
      await this.firebaseAuth.signOut();
      localStorage.removeItem('user');
    }catch(error){
      console.log(error)
    }
  }
}
