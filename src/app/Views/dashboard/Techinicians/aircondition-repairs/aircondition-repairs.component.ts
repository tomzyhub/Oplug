import { Component, OnInit } from "@angular/core";
import { AirconditionRepairsService } from "../shared/aircondition-repairs.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-aircondition-repairs",
  templateUrl: "./aircondition-repairs.component.html",
  styleUrls: ["./aircondition-repairs.component.css"]
})
export class AirconditionRepairsComponent implements OnInit {
  constructor(
    private formservice: AirconditionRepairsService,
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
