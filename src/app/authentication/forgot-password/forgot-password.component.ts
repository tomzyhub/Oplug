import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../authentication/shared/auth.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.css"]
})
export class ForgotPasswordComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit() {}

  forgotPassword() {
    this.auth.ForgotPassword();
  }
}
