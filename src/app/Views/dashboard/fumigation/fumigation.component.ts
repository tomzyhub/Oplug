import { Component, OnInit } from "@angular/core";
import { FumigationService } from "../shared/fumigation.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-fumigation",
  templateUrl: "./fumigation.component.html",
  styleUrls: ["./fumigation.component.css"]
})
export class FumigationComponent implements OnInit {
  constructor(
    private formservice: FumigationService,
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
