import { Component, OnInit } from "@angular/core";
import { LaundryService } from "../shared/laundry.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-laundry",
  templateUrl: "./laundry.component.html",
  styleUrls: ["./laundry.component.css"]
})
export class LaundryComponent implements OnInit {
  constructor(
    private formservice: LaundryService,
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
