import { Component, OnInit } from "@angular/core";

import { ElectricalsPartsService } from "../shared/electricals-parts.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-electrical-parts",
  templateUrl: "./electrical-parts.component.html",
  styleUrls: ["./electrical-parts.component.css"]
})
export class ElectricalPartsComponent implements OnInit {
  constructor(
    private formservice: ElectricalsPartsService,
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
