import { Component, OnInit } from "@angular/core";
import { HomeAccessoryService } from "../shared/home-accessory.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-mobile-phone-accessory",
  templateUrl: "./mobile-phone-accessory.component.html",
  styleUrls: ["./mobile-phone-accessory.component.css"]
})
export class MobilePhoneAccessoryComponent implements OnInit {
  constructor(
    private formservice: HomeAccessoryService,
    private message: NotificationService
  ) {}

  ngOnInit() {}
  onSubmit() {
    if (this.formservice.form.valid) {
      this.formservice.addItem(this.formservice.form.value);
      this.message.success("Form Submitted successfully ");
      this.formservice.form.reset();
      this.formservice.initializeFormGroup();
    }
  }
}
