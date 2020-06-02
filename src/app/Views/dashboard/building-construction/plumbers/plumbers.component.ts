import { Component, OnInit } from "@angular/core";

import { PlumbersService } from "../shared/plumbers.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-plumbers",
  templateUrl: "./plumbers.component.html",
  styleUrls: ["./plumbers.component.css"]
})
export class PlumbersComponent implements OnInit {
  constructor(
    private formservice: PlumbersService,
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
