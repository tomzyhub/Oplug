import { Component, OnInit } from "@angular/core";
import { CarSparePartsService } from "../shared/car-spare-parts.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-car-spare-parts",
  templateUrl: "./car-spare-parts.component.html",
  styleUrls: ["./car-spare-parts.component.css"]
})
export class CarSparePartsComponent implements OnInit {
  constructor(
    private formservice: CarSparePartsService,
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
