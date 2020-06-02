import { Component, OnInit } from "@angular/core";
import { PhotographersService } from "../shared/photographers.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-photographers",
  templateUrl: "./photographers.component.html",
  styleUrls: ["./photographers.component.css"]
})
export class PhotographersComponent implements OnInit {
  constructor(
    private formservice: PhotographersService,
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
