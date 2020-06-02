import { Component, OnInit } from "@angular/core";
import { RefridgeratorRepairService } from "../shared/refridgerator-repair.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-refridgerator-repairs",
  templateUrl: "./refridgerator-repairs.component.html",
  styleUrls: ["./refridgerator-repairs.component.css"]
})
export class RefridgeratorRepairsComponent implements OnInit {
  constructor(
    private formservice: RefridgeratorRepairService,
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
