import { Component } from "@angular/core";
//import { NgxPageScrollDirective } from "ngx-page-scroll";
import { NgxSpinnerService } from "ngx-spinner";
import { DOCUMENT } from "@angular/common";
import { AuthService } from "../shared/auth.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent {
  constructor(
    public authService: AuthService,
    public spinner: NgxSpinnerService
  ) {}

  ngOnInit() {}
  //spinner function
  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  createUser() {
    this.authService.register();
  }
}
