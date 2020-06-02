import { Component, OnInit } from "@angular/core";
import { WelderService } from "../shared/welder.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-welders",
  templateUrl: "./welders.component.html",
  styleUrls: ["./welders.component.css"]
})
export class WeldersComponent implements OnInit {
  constructor(
    private formservice: WelderService,
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
