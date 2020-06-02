import { Injectable, NgZone } from "@angular/core";
import { auth } from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from "./user";
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { Router } from "@angular/router";

import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NotificationService } from "../../authentication/shared/notification.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  userData: any; // Save logged in user data
  form: FormGroup;
  form2: FormGroup;
  form3: FormGroup;
  dbcollections: AngularFirestoreDocument<any>;
  CreHolderAlpha: any;
  CredHolder: any;
  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    public message: NotificationService //notification service
  ) {
    //login form
    this.form = new FormGroup({
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    });
    //forgot password form
    this.form3 = new FormGroup({
      email: new FormControl("", Validators.required),
    });

    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem("user", JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem("user"));
      } else {
        localStorage.setItem("user", null);
        JSON.parse(localStorage.getItem("user"));
      }
    });

    this.CredHolder = this.afAuth.auth.currentUser;
  }

  //register function
  async register() {
    try {
      if (this.form.valid) {
        const values = this.form.value;
        const result = await this.afAuth.auth
          .createUserWithEmailAndPassword(values.email, values.password)
          .then((result) => {
            this.SendVerificationMail();
            this.CreHolderAlpha = result;
            this.SetUserData(result.user);
            this.message.success("account created successfully ('_')");
            this.form.reset();
          });
      }
    } catch (error) {
      let eirr = error;
      if (eirr.code === "auth/email-already-in-use") {
        let response = "sorry email is already in-use ";
        this.message.success(response);
      } else if (eirr.code === "auth/weak-password") {
        let response = eirr.message;
        this.message.success(response);
      } else if (eirr.code === "auth/invalid-email") {
        let response = eirr.message;
        this.message.success(response);
      }
    }
  }

  //login/signin
  async login() {
    try {
      if (this.form.valid) {
        const values = this.form.value;
        const result = await this.afAuth.auth
          .signInWithEmailAndPassword(values.email, values.password)
          .then((result) => {
            this.ngZone.run(() => {
              this.router.navigate(["dashboard"]);
            });
            this.CreHolderAlpha = result;
            this.SetUserData(result.user);
            this.message.success("login succesful ('_')");
            this.form.reset();
          });
      }
    } catch (error) {
      this.form.reset();

      let err = error;
      if (err.code === "auth/wrong-password") {
        let response = err.message;
        this.message.success(response);
      } else if (err.code === "auth/user-not-found") {
        let response = err.message;
        this.message.success(response);
      } else if (err.code === "auth/too-many-requests") {
        let response = err.message;
        this.message.success(response);
      } else if (err.code === "auth/invalid-email") {
        let response = err.message;
        this.message.success(response);
      }
    }
  }

  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(["dashboard"]);
        });
        this.form.reset();
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  //catching the current user detaill

  /*CurrentUserDetail = {
    CredHolder: this.afAuth.auth.currentUser,

    displayName: this.CredHolder.displayName,
    email: this.CredHolder.email,
    photoURL: this.CredHolder.photoURL,
    emailVerified: this.CredHolder.emailVerified
  };*/

  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification().then(() => {
      this.router.navigate(["verify-email"]);
    });
  }
  // Reset Forggot password
  async ForgotPassword() {
    const values = this.form3.value;
    const result = await this.afAuth.auth
      .sendPasswordResetEmail(values.email)
      .then(() => {
        this.ngZone.run(() => {
          this.router.navigate(["login"]);
        });
        this.message.success("Password reset email sent, check your inbox.");
      })
      .catch((error) => {
        this.message.success(error.message);
      });
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem("user"));

    return user !== null && user.emailVerified !== false ? true : false;
  }

  // Sign in with facebook
  FacebookAuth() {
    return this.AuthLogin(new auth.FacebookAuthProvider());
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.auth
      .signInWithPopup(provider)
      .then((result) => {
        this.CreHolderAlpha = result.user;
        this.ngZone.run(() => {
          this.router.navigate(["dashboard"]);
        });
        this.SetUserData(result.user);
        //can console.log();
      })
      .catch((error) => {
        let toastErro = error;
        if (
          toastErro.code === "auth/account-exists-with-different-credential"
        ) {
          let response = toastErro.message;
          this.message.success(response);
        } else if (toastErro.code === "auth/popup-closed-by-user") {
          let response = toastErro.message;
          this.message.success(response);
        } else if (toastErro.code === "auth/cancelled-popup-request") {
          let response = toastErro.message;
          this.message.success(response);
        } else if (toastErro.code === "auth/network-request-failed") {
          let response = toastErro.message;
          this.message.success(response);
        }
      });
  }

  /* Setting up user data when sign in with username/password, 
  sign up with email/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  // Sign out
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem("user");
      this.router.navigate(["login"]).then(() => {
        console.log("user is logged out");
        this.message.success("you are logged out, see you soon ");
      });
    });
  }
}
