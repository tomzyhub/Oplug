import { Component, OnInit } from "@angular/core";
import { TailorsService } from "../shared/tailors.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-tailors",
  templateUrl: "./tailors.component.html",
  styleUrls: ["./tailors.component.css"]
})
export class TailorsComponent implements OnInit {
  constructor(
    private formservice: TailorsService,
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
