import { Component, OnInit } from "@angular/core";
import { PoultryService } from "../shared/poultry.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-poultry",
  templateUrl: "./poultry.component.html",
  styleUrls: ["./poultry.component.css"]
})
export class PoultryComponent implements OnInit {
  constructor(
    private formservice: PoultryService,
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
