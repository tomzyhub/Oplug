import { Component, OnInit } from "@angular/core";

import { AllDesignService } from "../shared/all-design.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-all-design",
  templateUrl: "./all-design.component.html",
  styleUrls: ["./all-design.component.css"]
})
export class AllDesignComponent implements OnInit {
  constructor(
    private formservice: AllDesignService,
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
