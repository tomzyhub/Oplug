import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../authentication/shared/auth.service";
import { NotificationService } from "../../authentication/shared/notification.service";
import { DashboardService } from "../../Views/shared/dashboard.service";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ProfileComponent } from "../profile/profile.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  newUser: any;
  docRef: any;
  constructor(
    public authService: AuthService,
    public afs: AngularFirestore,
    public message: NotificationService,
    public dbs: DashboardService,
    public dialog: MatDialog
  ) {}

  openDialog() {
    this.authService.afAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        this.newUser = user;

        //profile dialog modal
        this.dialog.open(ProfileComponent, {
          data: {
            name: this.newUser.displayName,
            photo: this.newUser.photoURL,
            email: this.newUser.email,
          },
        });

        //query for all data with the current Uid
        this.docRef = this.afs.collection("/users").doc(`${this.newUser.uid}`);
        this.docRef.get().then((doc) => {
          if (doc.exist) {
            console.log("document data:", doc.data());
          } else {
            console.log("failed to find data");
          }
        });
        //query ends
      }
    });
  }

  ngOnInit() {
    this.message.success("welcome to dashboard ");
  }
  //humburger open function
  openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  //humburger close function
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  //scroll for complete  reg form
  scroll() {
    document.querySelector("#routelet").scrollIntoView({ behavior: "smooth" });
  }
}
