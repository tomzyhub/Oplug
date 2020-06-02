import { Component, OnInit } from "@angular/core";

import { PaintersService } from "../shared/painters.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-painters",
  templateUrl: "./painters.component.html",
  styleUrls: ["./painters.component.css"]
})
export class PaintersComponent implements OnInit {
  constructor(
    private formservice: PaintersService,
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
