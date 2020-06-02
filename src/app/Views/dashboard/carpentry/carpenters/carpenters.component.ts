import { Component, OnInit } from "@angular/core";

import { CarpentersService } from "../shared/carpenters.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-carpenters",
  templateUrl: "./carpenters.component.html",
  styleUrls: ["./carpenters.component.css"]
})
export class CarpentersComponent implements OnInit {
  constructor(
    private formservice: CarpentersService,
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
