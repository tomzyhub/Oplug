import { Component, OnInit } from "@angular/core";
import { PhoneComputerRepairService } from "../shared/phone-computer-repair.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-phone-computer-repairs",
  templateUrl: "./phone-computer-repairs.component.html",
  styleUrls: ["./phone-computer-repairs.component.css"]
})
export class PhoneComputerRepairsComponent implements OnInit {
  constructor(
    private formservice: PhoneComputerRepairService,
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
