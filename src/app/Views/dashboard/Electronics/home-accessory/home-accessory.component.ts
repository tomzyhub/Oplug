import { Component, OnInit } from "@angular/core";
import { HomeAccessoryService } from "../shared/home-accessory.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-home-accessory",
  templateUrl: "./home-accessory.component.html",
  styleUrls: ["./home-accessory.component.css"]
})
export class HomeAccessoryComponent implements OnInit {
  constructor(
    private formservice: HomeAccessoryService,
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
