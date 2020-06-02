import { Component, OnInit } from "@angular/core";
import { PiggeryService } from "../shared/piggery.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-piggery",
  templateUrl: "./piggery.component.html",
  styleUrls: ["./piggery.component.css"]
})
export class PiggeryComponent implements OnInit {
  constructor(
    private formservice: PiggeryService,
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
