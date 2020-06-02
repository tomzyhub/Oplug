import { Component, OnInit } from "@angular/core";
import { ElectriciansService } from "../shared/electricians.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-electricians",
  templateUrl: "./electricians.component.html",
  styleUrls: ["./electricians.component.css"]
})
export class ElectriciansComponent implements OnInit {
  constructor(
    private formservice: ElectriciansService,
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
