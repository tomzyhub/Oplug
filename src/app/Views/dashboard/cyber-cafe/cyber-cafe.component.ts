import { Component, OnInit } from "@angular/core";

import { CybercafeService } from "../shared/cybercafe.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-cyber-cafe",
  templateUrl: "./cyber-cafe.component.html",
  styleUrls: ["./cyber-cafe.component.css"]
})
export class CyberCafeComponent implements OnInit {
  constructor(
    private formservice: CybercafeService,
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
