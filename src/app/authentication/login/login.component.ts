import { Component, OnInit } from "@angular/core";
import { AuthService } from "../shared/auth.service";
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public spinner: NgxSpinnerService
  ) {}
  email: string;
  password: string;

  ngOnInit() {}
  //spinner function
  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }
  //login function
  Login() {
    this.authService.login();
  }
}
