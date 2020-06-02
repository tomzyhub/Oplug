import { Component, OnInit } from "@angular/core";
import { BakersService } from "../shared/bakers.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-bakers",
  templateUrl: "./bakers.component.html",
  styleUrls: ["./bakers.component.css"]
})
export class BakersComponent implements OnInit {
  constructor(
    private formservice: BakersService,
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
