import { Component, OnInit } from "@angular/core";
import { PharmacyService } from "../shared/pharmacy.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-pharmacy",
  templateUrl: "./pharmacy.component.html",
  styleUrls: ["./pharmacy.component.css"]
})
export class PharmacyComponent implements OnInit {
  constructor(
    private formservice: PharmacyService,
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
