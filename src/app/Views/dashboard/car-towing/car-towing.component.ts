import { Component, OnInit } from "@angular/core";

import { CartowingService } from "../shared/cartowing.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-car-towing",
  templateUrl: "./car-towing.component.html",
  styleUrls: ["./car-towing.component.css"]
})
export class CarTowingComponent implements OnInit {
  constructor(
    private formservice: CartowingService,
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
