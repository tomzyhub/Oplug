import { Component, OnInit } from "@angular/core";
import { UpholsteryService } from "../shared/upholstery.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-upholstery",
  templateUrl: "./upholstery.component.html",
  styleUrls: ["./upholstery.component.css"]
})
export class UpholsteryComponent implements OnInit {
  constructor(
    private formservice: UpholsteryService,
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
