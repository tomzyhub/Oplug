import { Component, OnInit } from "@angular/core";
import { CarDealersService } from "../shared/car-dealers.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-car-dealers",
  templateUrl: "./car-dealers.component.html",
  styleUrls: ["./car-dealers.component.css"]
})
export class CarDealersComponent implements OnInit {
  constructor(
    private formservice: CarDealersService,
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
