import { Component, OnInit } from "@angular/core";
import { CarsBusesRepairService } from "../shared/cars-buses-repair.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-cars-buses-repairs",
  templateUrl: "./cars-buses-repairs.component.html",
  styleUrls: ["./cars-buses-repairs.component.css"]
})
export class CarsBusesRepairsComponent implements OnInit {
  constructor(
    private formservice: CarsBusesRepairService,
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
