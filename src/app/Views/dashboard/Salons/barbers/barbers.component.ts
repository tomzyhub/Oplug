import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { BarberService } from "../shared/barber.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "barbers",
  templateUrl: "./barbers.component.html",
  styleUrls: ["./barbers.component.css"]
})
export class BarbersComponent implements OnInit {
  constructor(
    private formservice: BarberService,
    private message: NotificationService,
    private spinner: NgxSpinnerService
  ) {
    //    this.formservice;
  }
  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1500);
  }

  ngOnInit() {}

  onSubmit() {
    if (this.formservice.form.valid) {
      this.formservice.addItem(this.formservice.form.value);
      this.message.success(":: Submitted successfully");
      this.formservice.form.reset();
      this.formservice.initializeFormGroup();
    }
  }
}
