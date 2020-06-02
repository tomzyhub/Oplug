import { Component, OnInit } from "@angular/core";
import { MakeoverService } from "../shared/makeover.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-makeover",
  templateUrl: "./makeover.component.html",
  styleUrls: ["./makeover.component.css"]
})
export class MakeoverComponent implements OnInit {
  constructor(
    private formservice: MakeoverService,
    private message: NotificationService
  ) {}

  ngOnInit() {}
  onSubmit() {
    if (this.formservice.form.valid) {
      this.formservice.addItem(this.formservice.form.value);
      this.message.success(":: Submitted successfully");
      this.formservice.form.reset();
    }
  }
}
