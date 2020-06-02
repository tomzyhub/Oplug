import { Injectable } from "@angular/core";
import { UserformModule } from "../userform/userform.module";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";

import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../../../../authentication/shared/auth.service";

import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class BuildingMatrialService {
  dbcollections: AngularFirestoreDocument<UserformModule>;
  items: Observable<UserformModule>;
  CurrentUser: any;
  //form variable
  form: FormGroup;

  //injecting firebase
  constructor(private afs: AngularFirestore, public authService: AuthService) {
    this.CurrentUser = this.authService.afAuth.auth.currentUser;

    //databse connection
    this.dbcollections = this.afs.doc(
      `Building-Materials/${this.CurrentUser.uid}`
    );
    //setting up form with formgroup
    this.form = new FormGroup({
      occupation: new FormControl("Building materials", Validators.required),
      country: new FormControl("", Validators.required),
      state: new FormControl("", Validators.required),
      city: new FormControl("", Validators.required),
      phonenumber: new FormControl("", [
        Validators.required,
        Validators.maxLength(11),
        Validators.minLength(5)
      ])
    });
  }

  initializeFormGroup() {
    this.form.setValue({
      occupation: "Building materials",
      country: "",
      state: "",
      city: "",
      phonenumber: ""
    });
  }
  //adding items to database
  addItem(item: UserformModule) {
    return this.dbcollections.set(item, { merge: true });
  }
}
